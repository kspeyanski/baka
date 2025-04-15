import { common, createLowlight } from "lowlight";
import { toHtml } from "hast-util-to-html";
import { DemoSourceClient } from "./demo-source.client";
import { getDemo } from "@lib/demo";

const lowlight = createLowlight(common);

export type DemoSourceProps = {
  src: string;
  Pre: React.ComponentType<any>;
  Code: React.ComponentType<any>;
};

export const DemoSource = async (props: DemoSourceProps) => {
  const { Pre, Code } = props;
  const result = await getDemo(props.src);

  if (!result) {
    console.log("No result found", props.src);
    return null;
  }

  const tree = lowlight.highlight("js", result.files?.[0].code);
  const code = toHtml(tree);

  return (
    <DemoSourceClient>
      <Pre className="demo-source mt-0">
        <Code dangerouslySetInnerHTML={{ __html: code }} className="hljs" />
      </Pre>
    </DemoSourceClient>
  );
};
