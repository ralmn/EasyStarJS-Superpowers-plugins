import * as fs from "fs";

SupAPI.registerPlugin("typescript", "EasyStar", {
  defs: fs.readFileSync(`${__dirname}/../typings/easystarjs/easystarjs.d.ts`, { encoding: "utf8" }),
  code: "",
});
