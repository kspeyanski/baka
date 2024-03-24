import { Code } from "@/components/code/code";
// import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { common, createLowlight } from "lowlight";
import { toHtml } from "hast-util-to-html";
import { Pre } from "@/components/code/pre";
import { DemoSourceClient } from "./demo-source.client";
import { getDemo } from "@/lib/demo";

const lowlight = createLowlight(common);

export type DemoSourceProps = {
  src: string;
};

export const DemoSource = async (props: DemoSourceProps) => {
  const result = await getDemo(
    props.src
  ); /* await fetch(`http://localhost:3000/api/demo?demo=${props.src}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    }); */

  console.log(result);

  const tree = lowlight.highlight("js", result.files?.[0].code);
  const code = toHtml(tree);

  return (
    <DemoSourceClient>
      <Pre className="demo-source m-0">
        <Code dangerouslySetInnerHTML={{ __html: code }} className="hljs" />
      </Pre>
    </DemoSourceClient>
  );
};
