import fs from "fs";
import p from "path";
import fg from "fast-glob";

const packages = fg.sync(["./packages/**/package.json"], { deep: 3 });

packages.forEach((pkg) => {
  fs.copyFileSync(p.resolve("./misc/README.md"), p.resolve(pkg, "../README.md"));
});
