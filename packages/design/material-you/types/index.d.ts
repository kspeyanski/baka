declare module "baka--core" {
  type BakaAvatarVariant = "small" | "medium" | "large";
  type BakaBadgeVariant = "small" | "single-digit" | "multi-digit";
  type ButtonStates = {
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    disabled?: boolean;
    selected?: boolean;
  };
  type ButtonVariant =
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
    | "extended";

  type BakaCheckboxStates = {
    checked?: boolean;
    indeterminate?: boolean;
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    disabled?: boolean;
  };
  type BakaCheckboxVariant = "error";
  type BottomSheetVariant = "modal";
  type BakaChipVariant = "elevated";
  type BakaCardVariant = "outlined" | "elevated" | "filled" | "horizontal";
  type BakaDialogVariant = "basic" | "full-screen";
  type BakaHeadingVariant =
    | "display-large"
    | "display-medium"
    | "display-small"
    | "headline-large"
    | "headline-medium"
    | "headline-small";
  type TextVariant =
    | "title-large"
    | "title-medium"
    | "title-small"
    | "label-large"
    | "label-medium"
    | "label-small"
    | "body-large"
    | "body-medium"
    | "body-small";
  type BakaLabelVariant =
    | "title-large"
    | "title-medium"
    | "title-small"
    | "label-large"
    | "label-medium"
    | "label-small"
    | "body-large"
    | "body-medium"
    | "body-small"
  type BakaParagraphVariant = "body-large" | "body-medium" | "body-small";
  type BakaListItemVariant = "multi-line" | "video";
  type IconVariant = "primary" | "small" | "medium" | "large" | "filled" | "error";
  type BakaSwitchVariant = "icon";

  type BakaTextFieldStates = {
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    disabled?: boolean;
    invalid?: boolean;
  };
  type BakaTextFieldVariant = "filled" | "outlined";
  type BakaTabGroupVariant = "primary" | "secondary" | "overflow";
  type BakaTooltipVariant = "rich" | "plain";
  type BakaTopBarVariant = "small" | "medium" | "large" | "elevated";
}
