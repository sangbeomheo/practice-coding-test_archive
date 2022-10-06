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

var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
console.log(
  lines[1].split("").reduce(function (acc, a) {
    return acc + +a;
  }, 0)
);
