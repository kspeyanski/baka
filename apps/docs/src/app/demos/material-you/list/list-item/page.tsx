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
import Image from "next/image";
import ListItemBasicDemo from "./basic/page";
import ListItemWithAvatarDemo from "./with-avatar/page";
import ListItemWithIconDemo from "./with-icon/page";
import ListItemWithMediaDemo from "./with-media/page";
import ListItemWithVideoDemo from "./with-video/page";
import ListItemWithRadioDemo from "./with-radio/page";
import ListItemWithCheckboxDemo from "./with-checkbox/page";
import ListItemWithSwitchDemo from "./with-switch/page";

// ListItemVariant: "multi-line" | "video";
export default function ListItemDemo() {
  return (
    <>
      <ListItemBasicDemo />
      <br />
      <br />
      <ListItemWithAvatarDemo />
      <br />
      <br />
      <ListItemWithIconDemo />
      <br />
      <br />
      <ListItemWithMediaDemo />
      <br />
      <br />
      <ListItemWithVideoDemo />
      <br />
      <br />
      <ListItemWithCheckboxDemo />
      <br />
      <br />
      <ListItemWithRadioDemo />
      <br />
      <br />
      <ListItemWithSwitchDemo />
    </>
  );
}
