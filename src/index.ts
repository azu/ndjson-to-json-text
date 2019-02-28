/**
 * Convert ndjson text to JSON text
 * The return value is a string of JSON array text
 * @param ndjsonText
 */
export function ndjsonToJsonText(ndjsonText: string): string {
    const linesWithComma = ndjsonText.replace(/\r?\n/g, ",");
    return `[${linesWithComma}]`;
}