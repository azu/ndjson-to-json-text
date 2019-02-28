import * as path from "path";
import * as fs from "fs";
import { ndjsonToJsonText } from "../src";
import * as assert from "assert";

const fixturesDir = path.join(__dirname, "snapshots");
describe("ndjsonToJsonText", () => {
    fs.readdirSync(fixturesDir).map(caseName => {
        const normalizedTestName = caseName.replace(/-/g, " ");
        it(`Test ${normalizedTestName}`, function() {
            const fixtureDir = path.join(fixturesDir, caseName);
            const actualFilePath = path.join(fixtureDir, "ndjson.json");
            const actual = ndjsonToJsonText(fs.readFileSync(actualFilePath, "utf-8"));
            const expectedFilePath = path.join(fixtureDir, "output.json");
            // UPDATE_SNAPSHOT=1 npm test
            if (!fs.existsSync(expectedFilePath) || process.env.UPDATE_SNAPSHOT) {
                fs.writeFileSync(expectedFilePath, actual);
                this.skip();
                return;
            }
            const expected = fs.readFileSync(expectedFilePath, "utf-8");
            assert.deepStrictEqual(
                actual,
                expected,
                `
${fixtureDir}
${JSON.stringify(actual)}
`
            );
        });
    });
});