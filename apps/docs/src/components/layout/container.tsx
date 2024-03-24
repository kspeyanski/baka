import { BakaContainer, BakaContainerProps } from "baka-ui";

export type ContainerProps = BakaContainerProps;

export const Container: BakaContainer = (props) => {
  return <BakaContainer {...props} className="container" />;
};
