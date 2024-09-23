import Image from "next/image";
import { Checkbox, List, ListItem, Text } from "baka-material-you";

export default function ListItemWithVideoDemo() {
  return (
    <div className="container-low">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(1fr, 1fr)",
          gridColumnGap: 20,
          gridRowGap: 20,
          maxWidth: 740,
        }}
      >
        {/* With Video */}
        <List>
          <ListItem variant={["video"]}>
            <Image src="/media.png" width={114} height={64} alt="media-video" />
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <Text variant="body-large">List item</Text>
              <Text variant={["body-medium", "variant"]}>
                Supporting line text lorem ipsum dolor sit amet, consectetur.
              </Text>
            </div>
          </ListItem>
        </List>
        <List>
          <ListItem variant={["multi-line", "video"]}>
            <Image src="/media.png" width={114} height={64} alt="media-video" />
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <Text variant="body-large">List item</Text>
              <Text variant={["body-medium", "variant"]} style={{ width: "100%" }}>
                Supporting line text lorem ipsum dolor sit amet, consectetur.
              </Text>
            </div>
            <Checkbox readOnly={true} checked={true} />
          </ListItem>
        </List>
        <List>
          <ListItem variant={"video"}>
            <Image src="/media.png" width={114} height={64} alt="media-video" />
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
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  width: "100%",
                }}
              >
                Supporting line text lorem ipsum dolor sit amet, consectetur.
              </Text>
            </div>
          </ListItem>
        </List>
        <List>
          <ListItem variant={"video"}>
            <Image src="/media.png" width={114} height={64} alt="media-video" />
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
                style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}
              >
                Supporting line text lorem ipsum dolor sit amet, consectetur.
              </Text>
            </div>
            <Checkbox readOnly={true} checked={true} />
          </ListItem>
        </List>
        <List>
          <ListItem variant={"video"}>
            <Image src="/media.png" width={114} height={64} alt="media-video" />
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <Text variant="body-large">List item</Text>
            </div>
          </ListItem>
        </List>
        <List>
          <ListItem variant={"video"}>
            <Image src="/media.png" width={114} height={64} alt="media" />
            <div style={{ display: "flex", flexDirection: "column", gap: 0, width: "100%" }}>
              <Text variant="body-large">List item</Text>
            </div>
            <Checkbox readOnly={true} checked={true} />
          </ListItem>
        </List>
      </div>
    </div>
  );
}
