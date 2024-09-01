import { BakaCard, BakaText } from "baka-ui";

const content = (
  <div className="w-[100%] uppercase p-10 flex align-center justify-center bg-brand-background-2 text-brand-foreground-1">
    <BakaText variant={"caption-2-strong"}>content</BakaText>
  </div>
);

export default function CardDemos() {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-4">
      <BakaCard>{content}</BakaCard>
      <BakaCard hovered={true}>{content}</BakaCard>
      <BakaCard activated={true}>{content}</BakaCard>
      <BakaCard selected={true}>{content}</BakaCard>
      <BakaCard variant="filled-alt">{content}</BakaCard>
      <BakaCard variant="filled-alt" hovered={true}>
        {content}
      </BakaCard>
      <BakaCard variant="filled-alt" activated={true}>
        {content}
      </BakaCard>
      <BakaCard variant="filled-alt" selected={true}>
        {content}
      </BakaCard>
      <BakaCard variant="outline">{content}</BakaCard>
      <BakaCard variant="outline" hovered={true}>
        {content}
      </BakaCard>
      <BakaCard variant="outline" activated={true}>
        {content}
      </BakaCard>
      <BakaCard variant="outline" selected={true}>
        {content}
      </BakaCard>
      <BakaCard variant="subtle">{content}</BakaCard>
      <BakaCard variant="subtle" hovered={true}>{content}</BakaCard>
      <BakaCard variant="subtle" activated={true}>{content}</BakaCard>
      <BakaCard variant="subtle" selected={true}>{content}</BakaCard>
    </div>
  );
}
