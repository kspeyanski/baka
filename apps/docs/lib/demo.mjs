// #!/usr/bin/env node

import g from "fast-glob";
import fs from "node:fs";
import p from "path";

(() => {
  let cachedFiles = [];
  const demos = g.sync("./src/app/demos/**/page.{tsx,ts}");

  demos.forEach((demo) => {
    const root = p.dirname(demo);
    const files = fs.readdirSync(root);
    const result = [];

    files.forEach((file) => {
      if (file.endsWith(".tsx")) {
        const code = fs.readFileSync(p.join(root, file), "utf-8");
        result.push({
          name: file,
          code: code,
        });
      }
    });

    cachedFiles.push({
      name: p.relative("./src/app", root),
      files: result.sort((a, b) => (a.name === "page.tsx" ? -1 : 0)),
    });
  });

  fs.writeFileSync(p.join(process.cwd(), "public", "demos.json"), JSON.stringify(cachedFiles));
})();
