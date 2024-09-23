import { BakaComponent, BakaProps } from "baka-ui";

export type AccordionProps<T extends React.ElementType = "li"> = BakaProps<
  T,
  "accordion"
> & {};

export const Accordion = <T extends React.ElementType = "li">(
  props: AccordionProps<T>
) => {
  return <BakaComponent as="li" {...props} baka="accordion" />;
};
