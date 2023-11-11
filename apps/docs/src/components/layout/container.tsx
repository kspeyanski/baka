import { BakaContainer, BakaContainerProps } from "baka-ui";

export type ContainerProps = BakaContainerProps;

export const Container = (props: ContainerProps) => {
  return <BakaContainer {...props} className="katana-container" />;
};
