export interface BakaDesignMaterialYou {
  AvatarVariant: "small" | "medium" | "large";
  BadgeVariant: "small" | "single-digit" | "multi-digit";
  ButtonState: {
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    disabled?: boolean;
    selected?: boolean;
  };
  ButtonVariant:
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

  CheckboxState: {
    checked?: boolean;
    indeterminate?: boolean;
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    disabled?: boolean;
  };
  CheckboxVariant: "error";
  BottomSheetVariant: "modal";
  ChipVariant: "elevated";
  CardVariant: "outlined" | "elevated" | "filled" | "horizontal";
  DialogVariant: "basic" | "full-screen";
  HeadingVariant:
    | "display-large"
    | "display-medium"
    | "display-small"
    | "headline-large"
    | "headline-medium"
    | "headline-small";
  TextVariant:
    | "title-large"
    | "title-medium"
    | "title-small"
    | "label-large"
    | "label-medium"
    | "label-small"
    | "body-large"
    | "body-medium"
    | "body-small";
  LabelVariant:
    | "title-large"
    | "title-medium"
    | "title-small"
    | "label-large"
    | "label-medium"
    | "label-small"
    | "body-large"
    | "body-medium"
    | "body-small";
  ParagraphVariant: "body-large" | "body-medium" | "body-small";
  ListItemVariant: "multi-line" | "video";
  IconVariant: "primary" | "small" | "medium" | "large" | "filled" | "error";
  SwitchVariant: "icon";

  TextFieldState: {
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    disabled?: boolean;
    invalid?: boolean;
  };
  TextFieldVariant: "filled" | "outlined";
  TabGroupVariant: "primary" | "secondary" | "overflow";
  TooltipVariant: "rich" | "plain";
  TopBarVariant: "small" | "medium" | "large" | "elevated";
}
