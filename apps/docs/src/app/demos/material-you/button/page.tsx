import { BakaButton } from "baka-ui";

export default function ButtonDemo() {
  return (
    <>
      <div className="flex flex-col">
        <BakaButton variant="filled">Button</BakaButton>
        <BakaButton variant="outlined">Button</BakaButton>
        <BakaButton variant="text">Button</BakaButton>
        <BakaButton variant="elevated">Button</BakaButton>
      </div>
    </>
  );
}
