// 1. ?

// 2. fs 사용

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// string array
let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
let wordInput = fs.readFileSync(filePath).toString().trim().split(/\s/g);

const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

console.log(lineInput);
console.log(wordInput);

console.log("Test4");
