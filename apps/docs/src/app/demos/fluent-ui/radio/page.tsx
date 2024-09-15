import { BakaRadio } from "baka-ui";

export default function RadioDemo() {
  return (
    <>
      <div>
        <BakaRadio name="unchecked" />
        <BakaRadio name="unchecked" hover />
        <BakaRadio name="unchecked" pressed />
        <BakaRadio name="unchecked" disabled />
        <BakaRadio name="unchecked" focus />
      </div>
      <div>
        <BakaRadio name="checked" checked />
        <BakaRadio name="checked" checked hover />
        <BakaRadio name="checked" checked pressed />
        <BakaRadio name="checked" checked disabled />
        <BakaRadio name="checked" checked focus />
      </div>
    </>
  );
}
