import { BakaCheckbox, BakaText } from "baka-ui";

export default function CheckboxDemos() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <BakaCheckbox readOnly checked={false} />
      <BakaCheckbox readOnly checked={false} hover />
      <BakaCheckbox readOnly checked={false} pressed />
      <BakaCheckbox readOnly checked={false} focus />
      <BakaCheckbox readOnly checked={false} disabled />
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} hover>
        <BakaCheckbox readOnly />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} pressed>
        <BakaCheckbox readOnly />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} focus>
        <BakaCheckbox readOnly />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly disabled />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly variant="circular" />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} hover>
        <BakaCheckbox readOnly variant="circular" />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} pressed>
        <BakaCheckbox readOnly variant="circular" />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} focus>
        <BakaCheckbox readOnly variant="circular" />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly disabled />
        Label
      </BakaText>
      <BakaCheckbox readOnly checked />
      <BakaCheckbox readOnly checked hover />
      <BakaCheckbox readOnly checked pressed />
      <BakaCheckbox readOnly checked focus />
      <BakaCheckbox readOnly checked disabled />
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly checked />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} hover>
        <BakaCheckbox readOnly checked />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} pressed>
        <BakaCheckbox readOnly checked />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} focus>
        <BakaCheckbox readOnly checked />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly checked disabled />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly checked variant="circular" />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} hover>
        <BakaCheckbox readOnly checked variant="circular" />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} pressed>
        <BakaCheckbox readOnly checked variant="circular" />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} focus>
        <BakaCheckbox readOnly checked variant="circular" />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly checked disabled variant="circular" />
        Label
      </BakaText>
      <BakaCheckbox readOnly indeterminate />
      <BakaCheckbox readOnly indeterminate hover />
      <BakaCheckbox readOnly indeterminate pressed />
      <BakaCheckbox readOnly indeterminate focus />
      <BakaCheckbox readOnly indeterminate disabled />
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly indeterminate />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} hover>
        <BakaCheckbox readOnly indeterminate />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} pressed>
        <BakaCheckbox readOnly indeterminate />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} focus>
        <BakaCheckbox readOnly indeterminate />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly disabled indeterminate />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly variant="circular" indeterminate />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} hover>
        <BakaCheckbox readOnly variant="circular" indeterminate />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} pressed>
        <BakaCheckbox readOnly variant="circular" indeterminate />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} focus>
        <BakaCheckbox readOnly variant="circular" indeterminate />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly disabled variant="circular" indeterminate />
        Label
      </BakaText>
    </div>
  );
}
