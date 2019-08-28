const { readFileSync } = require("fs");
const hasBom = require("has-bom");

const buffer = readFileSync("index.css");
console.log("Has BOM?", hasBom(buffer));
