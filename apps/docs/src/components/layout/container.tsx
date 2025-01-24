import {
  Container as BakaContainer,
  ContainerProps as BakaContainerProps,
} from "baka-material-you";

export type ContainerProps = BakaContainerProps;

export const Container: typeof BakaContainer = (props) => {
  return <BakaContainer {...props} className="container" />;
};
