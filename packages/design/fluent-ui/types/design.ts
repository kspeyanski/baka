import { MultiVariant } from "baka-ui";

export interface FluentUIState {
  rest?: boolean;
  hover?: boolean;
  pressed?: boolean;
  checked?: boolean;
  selected?: boolean;
  focus?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  readonly?: boolean;
  indeterminate?: boolean;
}

export interface BakaDesign {
  accordion: {};
  avatar: {
    variant: MultiVariant<
      | "size-16"
      | "size-20"
      | "size-24"
      | "size-28"
      | "size-32"
      | "size-40"
      | "size-48"
      | "size-56"
      | "size-64"
      | "size-72"
      | "size-96"
      | "size-120"
      | "neutral"
      | "brand"
      | "darkred"
      | "cranberry"
      | "red"
      | "pumpkin"
      | "peach"
      | "marigold"
      | "gold"
      | "brass"
      | "brown"
      | "forest"
      | "seafoam"
      | "darkgreen"
      | "lightteal"
      | "teal"
      | "steel"
      | "blue"
      | "royalroyal"
      | "cornflower"
      | "navy"
      | "lavender"
      | "purple"
      | "grape"
    >;
  };
  badge: {
    variant: MultiVariant<
      | "circular"
      | "filled"
      | "tint"
      | "outline"
      | "subtle"
      | "color-brand"
      | "color-danger"
      | "color-warning"
      | "color-success"
      | "color-important"
      | "color-informative"
      | "color-subtle"
    >;
  };
  button: {
    variant: MultiVariant<
      "primary" | "secondary" | "outline" | "subtle" | "transparent" | "icon"
    >;
    state: Pick<
      FluentUIState,
      "rest" | "hover" | "pressed" | "selected" | "focus" | "disabled"
    >;
  };
  card: {
    variant: MultiVariant<"filled" | "filled-alt" | "outline" | "subtle">;
    state: Pick<
      FluentUIState,
      "rest" | "hover" | "pressed" | "selected" | "focus" | "disabled"
    >;
  };
  checkbox: {
    variant: MultiVariant<"circular">;
    state: Pick<
      FluentUIState,
      | "rest"
      | "hover"
      | "pressed"
      | "selected"
      | "focus"
      | "disabled"
      | "indeterminate"
    >;
  };
  dialog: {};
  divider: {
    variant: MultiVariant<"subtle" | "strong" | "brand" | "inset">;
  };
  dropdown: {
    variant: MultiVariant<
      "outline" | "filled-darker" | "filled-lighter" | "focus" | "transparent"
    >;
    state: Pick<
      FluentUIState,
      | "rest"
      | "hover"
      | "pressed"
      | "selected"
      | "focus"
      | "invalid"
      | "disabled"
    >;
  };
  field: {
    variant: MultiVariant<
      "outline" | "filled-darker" | "filled-lighter" | "focus"
    >;
    state: Pick<
      FluentUIState,
      | "rest"
      | "hover"
      | "pressed"
      | "selected"
      | "focus"
      | "invalid"
      | "disabled"
    >;
  };
  input: {};
  label: {
    state: Pick<FluentUIState, "rest" | "disabled">;
    variant: MultiVariant<"small" | "medium" | "large" | "semibold">;
  };
  link: {
    state: Pick<
      FluentUIState,
      "rest" | "hover" | "pressed" | "focus" | "disabled"
    >;
    variant: MultiVariant<"subtle" | "over-brand">;
  };
  icon: {
    variant:
      | "size-12"
      | "size-16"
      | "size-20"
      | "size-24"
      | "size-28"
      | "size-32"
      | "size-48";
  };
  menu: {
    state: Pick<
      FluentUIState,
      "rest" | "hover" | "pressed" | "selected" | "focus" | "disabled"
    >;
  };
  ["menu-item"]: {
    state: Pick<
      FluentUIState,
      | "rest"
      | "hover"
      | "pressed"
      | "selected"
      | "focus"
      | "readonly"
      | "disabled"
    >;
  };

  radio: {
    state: Pick<
      FluentUIState,
      | "rest"
      | "hover"
      | "pressed"
      | "selected"
      | "focus"
      | "disabled"
      | "checked"
    >;
  };
  switch: {
    state: Pick<
      FluentUIState,
      | "rest"
      | "hover"
      | "pressed"
      | "selected"
      | "focus"
      | "disabled"
      | "checked"
    >;
  };
  ["tab-list"]: {
    variant: MultiVariant<"horizontal" | "vertical">;
  };
  ["tab"]: {
    state: Pick<
      FluentUIState,
      "rest" | "hover" | "pressed" | "selected" | "focus" | "disabled"
    >;
    variant: MultiVariant<"transparent" | "subtle">;
  };
  text: {
    state: Pick<
      FluentUIState,
      "rest" | "hover" | "pressed" | "selected" | "focus" | "disabled"
    >;
    variant: MultiVariant<
      | "caption-1"
      | "caption-1-strong"
      | "caption-1-stronger"
      | "caption-2"
      | "caption-2-strong"
      | "body-1"
      | "body-1-strong"
      | "body-1-stronger"
      | "body-2"
      | "subtitle-1"
      | "subtitle-1-stronger"
      | "subtitle-2"
      | "subtitle-2-stronger"
      | "title-3"
      | "title-2"
      | "title-1"
      | "large-title"
      | "display"
      | "link"
      | "subtle"
      | "over-brand"
      | "placeholder"
    >;
  };
}
