declare var __baka_DESIGN: string;

declare module "@baka/design-core" {
  type BakaAvatarVariant = string;
  type BakaBadgeVariant = string;

  type BakaButtonVariant = string;
  type BakaButtonStates = {
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    disabled?: boolean;
  };

  type BakaRadioButtonStates = {
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    disabled?: boolean;
    checked?: boolean;
  };

  type BakaBottomSheetVariant = string;
  type BakaCardVariant = string;
  type BakaChipVariant = string;

  type BakaCheckboxVariant = string;
  type BakaCheckboxStates = {
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    checked?: boolean;
    disabled?: boolean;
  };

  type BakaSwitchStates = {
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    checked?: boolean;
    disabled?: boolean;
  };

  type BakaTextFieldStates = {
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    disabled?: boolean;
  };

  type BakaDialogVariant = string;
  type BakaDividerVariant = string;
  type BakaDividerVariant = "horizontal" | "vertical";
  type BakaHeadingVariant = string;
  type BakaParagraphVariant = string;
  type BakaListItemVariant = string;
  type BakaTextVariant = string;
  type BakaSwitchVariant = string;
  type BakaIconVariant = string;
  type BakaTextFieldVariant = string;
  type BakaLabelVariant = string;
  type BakaTabGroupVariant = string;
  type BakaTooltipVariant = string;
  type BakaTopBarVariant = string;
  type BakaContainerVariant = string;
  type BakaColumnVariant = string;
}
