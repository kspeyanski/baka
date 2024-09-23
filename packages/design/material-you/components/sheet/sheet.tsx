import { BakaComponent, BakaProps } from "baka-ui";

export type SheetProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "sheet"
> & {};

export const Sheet = <T extends React.ElementType = "div">(
  props: SheetProps<T>
) => {
  return <BakaComponent as="div" type="sheet" {...props} baka="sheet" />;
};
