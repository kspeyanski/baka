import { BakaComponent, BakaProps } from "baka-ui";

type AccordionProps<T extends React.ElementType> = BakaProps<T, "accordion"> & {};

export const Accordion = <T extends React.ElementType = "li">(
  props: AccordionProps<T>
) => {
  return <BakaComponent as="li" {...props} baka="accordion" />;
};
