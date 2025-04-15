import { ChevronRightRegular } from "@fluentui/react-icons";
import { Icon, Text, Tree, TreeItem } from "baka-fluent-ui";

export default function TreeDemos() {
  return (
    <>
      <div style={{ width: 220 }}>
        <Tree>
          <TreeItem>
            <Icon as={ChevronRightRegular} />
            <Text>Item title</Text>
          </TreeItem>
          <TreeItem>
            <Icon as={ChevronRightRegular} />
            <Text>Item title</Text>
          </TreeItem>
        </Tree>
      </div>
      <div className="flex gap-2">
        <TreeItem state={{ rest: true }}>
          <Icon as={ChevronRightRegular} />
          Item title
        </TreeItem>
        <TreeItem state={{ hover: true }}>
          <Icon as={ChevronRightRegular} />
          Item title
        </TreeItem>
        <TreeItem state={{ pressed: true }}>
          <Icon as={ChevronRightRegular} />
          Item title
        </TreeItem>
        <TreeItem state={{ focus: true }}>
          <Icon as={ChevronRightRegular} />
          Item title
        </TreeItem>
        <TreeItem state={{ disabled: true }}>
          <Icon as={ChevronRightRegular} />
          Item title
        </TreeItem>
      </div>
    </>
  );
}
