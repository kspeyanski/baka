import { Icon, Text } from "baka-fluent-ui";
import { Badge, BadgeProps } from "baka-fluent-ui";

export default function BadgeCatalog(props: {
  variant: BadgeProps["variant"];
}) {
  if (!props.variant) return null;

  return (
    <div className="flex flex-row gap-[28px]">
      <div className="flex flex-col gap-[32px]">
        <Badge
          variant={[
            ...(Array.isArray(props.variant) ? props.variant : [props.variant]),
            "filled",
          ]}
        >
          <Icon></Icon>
          <Text>1</Text>
        </Badge>
        <Badge
          variant={[
            ...(Array.isArray(props.variant) ? props.variant : [props.variant]),
            "filled",
          ]}
        >
          <Text>1</Text>
          <Icon></Icon>
        </Badge>
        <Badge
          variant={[
            ...(Array.isArray(props.variant) ? props.variant : [props.variant]),
            "filled",
          ]}
        >
          <Text>1</Text>
        </Badge>
        <Badge
          variant={[
            ...(Array.isArray(props.variant) ? props.variant : [props.variant]),
            "filled",
          ]}
        >
          <Icon></Icon>
        </Badge>
      </div>
      <div className="flex flex-col gap-[32px]">
        <Badge
          variant={[
            ...(Array.isArray(props.variant) ? props.variant : [props.variant]),
            "tint",
          ]}
        >
          <Icon></Icon>
          <Text>1</Text>
        </Badge>
        <Badge
          variant={[
            ...(Array.isArray(props.variant) ? props.variant : [props.variant]),
            "tint",
          ]}
        >
          <Text>1</Text>
          <Icon></Icon>
        </Badge>
        <Badge
          variant={[
            ...(Array.isArray(props.variant) ? props.variant : [props.variant]),
            "tint",
          ]}
        >
          <Text>1</Text>
        </Badge>
        <Badge
          variant={[
            ...(Array.isArray(props.variant) ? props.variant : [props.variant]),
            "tint",
          ]}
        >
          <Icon></Icon>
        </Badge>
      </div>
      <div className="flex flex-col gap-[32px]">
        <Badge
          variant={[
            ...(Array.isArray(props.variant) ? props.variant : [props.variant]),
            "outline",
          ]}
        >
          <Icon></Icon>
          <Text>1</Text>
        </Badge>
        <Badge
          variant={[
            ...(Array.isArray(props.variant) ? props.variant : [props.variant]),
            "outline",
          ]}
        >
          <Text>1</Text>
          <Icon></Icon>
        </Badge>
        <Badge
          variant={[
            ...(Array.isArray(props.variant) ? props.variant : [props.variant]),
            "outline",
          ]}
        >
          <Text>1</Text>
        </Badge>
        <Badge
          variant={[
            ...(Array.isArray(props.variant) ? props.variant : [props.variant]),
            "outline",
          ]}
        >
          <Icon></Icon>
        </Badge>
      </div>
      <div className="flex flex-col gap-[32px]">
        <Badge
          variant={[
            ...(Array.isArray(props.variant) ? props.variant : [props.variant]),
            "subtle",
          ]}
        >
          <Icon></Icon>
          <Text>1</Text>
        </Badge>
        <Badge
          variant={[
            ...(Array.isArray(props.variant) ? props.variant : [props.variant]),
            "subtle",
          ]}
        >
          <Text>1</Text>
          <Icon></Icon>
        </Badge>
        <Badge
          variant={[
            ...(Array.isArray(props.variant) ? props.variant : [props.variant]),
            "subtle",
          ]}
        >
          <Text>1</Text>
        </Badge>
        <Badge
          variant={[
            ...(Array.isArray(props.variant) ? props.variant : [props.variant]),
            "subtle",
          ]}
        >
          <Icon></Icon>
        </Badge>
      </div>
    </div>
  );
}
