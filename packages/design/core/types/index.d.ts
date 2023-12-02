export type BakaDesign = {
  AvatarVariant: string;
  BadgeVariant: string;

  ButtonVariant: string;
  ButtonStates: {
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    disabled?: boolean;
  };

  RadioButtonStates: {
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    disabled?: boolean;
    checked?: boolean;
  };

  BottomSheetVariant: string;
  CardVariant: string;
  ChipVariant: string;

  CheckboxVariant: string;
  CheckboxStates: {
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    checked?: boolean;
    disabled?: boolean;
  };

  SwitchStates: {
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    checked?: boolean;
    disabled?: boolean;
  };

  TextFieldStates: {
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    disabled?: boolean;
  };

  DialogVariant: string;
  DividerVariant: "horizontal" | "vertical";
  HeadingVariant: string;
  ParagraphVariant: string;
  ListItemVariant: string;
  TextVariant: string;
  SwitchVariant: string;
  IconVariant: string;
  TextFieldVariant: string;
  LabelVariant: string;
  TabGroupVariant: string;
  TooltipVariant: string;
  TopBarVariant: string;
  ContainerVariant: string;
  ColumnVariant: string;
};
