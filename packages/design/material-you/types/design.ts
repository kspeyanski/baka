import { MultiVariant } from "baka-ui";

export interface MaterialYouState {
  enabled?: boolean;
  hovered?: boolean;
  focused?: boolean;
  pressed?: boolean;
  disabled?: boolean;
  selected?: boolean;
  dragged?: boolean;
  invalid?: boolean;
  empty?: boolean;
  indeterminate?: boolean;
}

export interface BakaDesign {
  avatar: {
    variant: MultiVariant<"small" | "medium" | "large">;
  };
  badge: {
    variant: MultiVariant<"small" | "single-digit" | "multi-digit">;
  };
  bar: {
    variant: MultiVariant<
      "top" | "bottom" | "small" | "medium" | "large" | "elevated"
    >;
  };
  button: {
    state: Pick<
      MaterialYouState,
      "enabled" | "hovered" | "focused" | "pressed" | "disabled" | "selected"
    >;
    variant?: MultiVariant<
      | "filled"
      | "outlined"
      | "text"
      | "elevated"
      | "tonal"
      | "icon"
      | "toggle"
      | "fab"
      | "primary"
      | "secondary"
      | "tertiary"
      | "small"
      | "medium"
      | "large"
      | "extended"
    >;
  };
  checkbox: {
    state: Pick<
      MaterialYouState,
      | "selected"
      | "indeterminate"
      | "hovered"
      | "focused"
      | "pressed"
      | "disabled"
    >;
    variant: MultiVariant<"primary" | "error">;
  };
  sheet: {
    variant: MultiVariant<"modal" | "bottom">;
  };
  chip: {
    state: Pick<
      MaterialYouState,
      "hovered" | "focused" | "pressed" | "dragged" | "selected"
    >;
    variant: MultiVariant<"elevated">;
  };
  card: {
    variant: MultiVariant<"outlined" | "elevated" | "filled" | "horizontal">;
    state: Pick<
      MaterialYouState,
      "hovered" | "focused" | "pressed" | "selected" | "disabled"
    >;
  };
  dialog: {
    variant: MultiVariant<"basic" | "full-screen">;
  };
  divider: {
    variant: MultiVariant<"horizontal" | "vertical">;
  };
  text: {
    variant: MultiVariant<
      | "display-large"
      | "display-medium"
      | "display-small"
      | "headline-large"
      | "headline-medium"
      | "headline-small"
      | "title-large"
      | "title-medium"
      | "title-small"
      | "label-large"
      | "label-medium"
      | "label-small"
      | "body-large"
      | "body-medium"
      | "body-small"
      | "variant"
    >;
  };
  list: {};
  "list-item": {
    variant: MultiVariant<"multi-line" | "video">;
  };
  menu: {};
  "menu-item": {};
  icon: {
    variant: MultiVariant<
      "primary" | "small" | "medium" | "large" | "filled" | "error"
    >;
  };
  switch: {
    state: Pick<
      MaterialYouState,
      "selected" | "hovered" | "focused" | "pressed" | "disabled"
    >;
    variant: MultiVariant<"icon">;
  };
  container: {
    variant: MultiVariant<"contained" | "fluid">;
  };
  row: {};
  column: {
    variant: MultiVariant<"region-left" | "region-right">;
  };
  "text-field": {
    state: Pick<
      MaterialYouState,
      "hovered" | "focused" | "pressed" | "disabled" | "invalid"
    >;
    variant: MultiVariant<"filled" | "outlined" | "search">;
  };
  "tab-group": {
    variant: MultiVariant<"primary" | "secondary" | "overflow">;
  };
  tab: {
    state: Pick<MaterialYouState, "selected">;
  };
  input: {
    state: Pick<MaterialYouState, "empty">;
  };
  tooltip: {
    variant: MultiVariant<"rich" | "plain">;
  };
  navigation: {
    variant: MultiVariant<"bottom" | "rail" | "side">;
  };
  "navigation-item": {
    state: Pick<
      MaterialYouState,
      "selected" | "hovered" | "focused" | "pressed" | "disabled"
    >;
  };
  radio: {
    state: Pick<
      MaterialYouState,
      "selected" | "hovered" | "focused" | "pressed" | "disabled"
    >;
  };
}
