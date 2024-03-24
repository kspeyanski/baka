"use server";

import fs from "fs";

export const getDemo = async (demo: string) => {
  if (process.env.NODE_ENV === "development") {
    await import("../../lib/demo.mjs");
  }
  const allDemos = fs.readFileSync("public/demos.json", "utf8");
  const parsed = JSON.parse(allDemos);
  const url = new URL(
    demo.endsWith("/") ? demo.slice(0, demo.length - 2) : demo,
    "http://localhost"
  );

  console.log(url);

  return parsed.find((d: any) => new URL(d.name, "http://localhost").pathname === url.pathname);
};
