import p from "node:path";
import fs from "node:fs";
import { glob } from "glob";

import { type NextRequest, NextResponse } from "next/server";

const root = p.join("src", "app");
let demos: any[] = [];

(() => {
  demos = glob
    .sync(p.join(root, "demos", "**", `page.tsx`), {
      root: process.cwd(),
    })
    .map((d) => ({
      url: d,
      code: fs.readFileSync(d, "utf-8"),
    }));
})();

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const demo = url.searchParams.get("demo");
  if (!demo) {
    return new NextResponse("Demo not found!", { status: 400 });
  }

  const result = demos.find((d) => d.url === p.join(root, demo, `page.tsx`));

  if (result) {
    return NextResponse.json(result, {
      headers: { "Cache-Control": "s-maxage=1440000" },
      status: 200,
    });
  } else {
    return new NextResponse("Demo not found!", {
      status: 400,
    });
  }

  //   if (demo) {
  //     const result = await octokit.request(`GET /repos/{owner}/{repo}/contents/{path}`, {
  //       owner: "kspeyanski",
  //       repo: "baka",
  //       ref: "docs",
  //       path: p.join("apps/docs/src/app", demo, `page.tsx`),
  //     });

  //     const file = await fetch(result.data?.download_url).then((res) => res.text());

  //     return NextResponse.json(
  //       { code: file },
  //       {
  //         headers: { "Cache-Control": "s-maxage=1440000" },
  //         status: 200,
  //       }
  //     );
  //   }
}
