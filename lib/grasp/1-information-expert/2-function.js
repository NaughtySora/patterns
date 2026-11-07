"use strict";

const { Readable } = require("node:stream");
const { once } = require("node:events");

const readable = new Readable();
readable.push("abc\n");
readable.push("123\n");
readable.push("010\n");
readable.push(null);

const NEWLINE = 0xA;

const line = sequence => {
  let line = "";
  for (const data of sequence) {
    if (data === NEWLINE) return line;
    else line += String.fromCharCode(data);
  }
};

const readline = async stream => {
  const output = [];
  stream.on("data", data => void output.push(line(data)));
  await once(stream, "end");
  return output;
};

const display = lines => {
  let idx = 0;
  for(const line of lines) console.log(idx++, line);
};

void async function () {
  display(await readline(readable));
}();