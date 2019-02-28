const data = new Array(2345).fill(6).map((item, index) => {
    var l = index;
    var c = "あいうえお…ab!?JSOcdefghijklmnopqrstuvñwxyz0123456789";
    var cl = c.length;
    var r = "";
    for (var i = 0; i < l; i++) {
        r += c[Math.floor(Math.random() * cl)];
    }
    return {
        id: index,
        text: r
    };
});
const text = data.map(item => `{ "id": ${item.id}, "text": ${JSON.stringify(item.text)} }`);
require("fs").writeFileSync(__dirname + "/ndjson.json", text.join("\n"), "utf-8");