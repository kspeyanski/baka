import { BakaButton, BakaIcon } from "baka-ui";

export default function ButtonDemo() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-5">
          <BakaButton variant="filled">Button</BakaButton>
          <BakaButton variant="filled" hovered={true}>
            Button
          </BakaButton>
          <BakaButton variant="filled" focused={true}>
            Button
          </BakaButton>
          <BakaButton variant="filled" activated={true}>
            Button
          </BakaButton>
          <BakaButton variant="filled" disabled={true}>
            Button
          </BakaButton>
        </div>
        <div className="flex flex-row gap-5">
          <BakaButton variant="filled">Button</BakaButton>
          <BakaButton variant="filled" hovered={true}>
            <BakaIcon>add</BakaIcon>
            Button
          </BakaButton>
          <BakaButton variant="filled" focused={true}>
            <BakaIcon>add</BakaIcon>
            Button
          </BakaButton>
          <BakaButton variant="filled" activated={true}>
            <BakaIcon>add</BakaIcon>
            Button
          </BakaButton>
          <BakaButton variant="filled" disabled={true}>
            <BakaIcon>add</BakaIcon>
            Button
          </BakaButton>
        </div>
      </div>
    </>
  );
}
