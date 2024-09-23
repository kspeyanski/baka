import Image from "next/image";
import {
  Avatar,
  Checkbox,
  Icon,
  List,
  ListItem,
  Radio,
  Switch,
  Text,
} from "baka-material-you";

export type ListItemStoryProps = {
  prefix: null | "avatar" | "icon" | "media" | "checkbox" | "radio" | "switch";
  suffix: null | "checkbox" | "icon";
  media?: "image" | "video";
  multiLine: boolean;
};

export const defaultProps = {
  multiLine: false,
  prefix: null,
  media: "image",
  suffix: null,
};

export default function ListItemStory(props: ListItemStoryProps) {
  const args = { ...defaultProps, ...props };

  return (
    <div className="container-low" style={{ maxWidth: 360 }}>
      <List>
        <ListItem
          variant={
            [
              args.multiLine ? "multi-line" : false,
              args.prefix === "media" && args.media === "video"
                ? "video"
                : false,
            ].filter(Boolean) as any[]
          }
        >
          {(() => {
            switch (args.prefix) {
              case "avatar":
                return <Avatar>A</Avatar>;
              case "icon":
                return <Icon>person</Icon>;
              case "media":
                return args.media === "video" ? (
                  <Image
                    src="/media.png"
                    width={114}
                    height={64}
                    alt="media-video"
                  />
                ) : (
                  <Image
                    src="/media-small.png"
                    width={56}
                    height={56}
                    alt="media-small"
                  />
                );
              case "checkbox":
                return <Checkbox readOnly={true} checked={true} />;
              case "radio":
                return <Radio readOnly={true} checked={true} />;
              case "switch":
                return <Switch readOnly={true} checked={false} />;
              default:
                return null;
            }
          })()}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Text variant="body-large">List item</Text>
            <Text
              variant={["body-medium", "variant"]}
              style={
                args.multiLine
                  ? { width: "100%" }
                  : {
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      width: "100%",
                    }
              }
            >
              Supporting line text lorem ipsum dolor sit amet, consectetur.
            </Text>
          </div>
          {(() => {
            switch (args.suffix) {
              case "checkbox":
                return <Checkbox readOnly={true} checked={true} />;
              case "icon":
                return <Icon>arrow_right</Icon>;
              default:
                return null;
            }
          })()}
        </ListItem>
      </List>
    </div>
  );
}
