import { Avatar, AvatarProps, Icon } from "baka-material-you";

export type AvatarStoryProps = AvatarProps & {
  type: "letter" | "icon" | "image";
  children?: React.ReactNode;
};
export const defaultProps: AvatarStoryProps = {
  type: "letter",
};

export default function AvatarStory(props: AvatarStoryProps) {
  const { type, children, ...other } = { ...defaultProps, ...props };

  return (
    <>
      {(() => {
        switch (type) {
          case "icon":
            return (
              <Avatar {...other}>
                <Icon>check</Icon>
              </Avatar>
            );
          case "image":
            return (
              <Avatar {...other}>
                <Icon as="img" src="./avatar.svg" />
              </Avatar>
            );
          case "letter":
          default:
            return <Avatar {...other}>{children || "A"}</Avatar>;
        }
      })()}
    </>
  );
}
