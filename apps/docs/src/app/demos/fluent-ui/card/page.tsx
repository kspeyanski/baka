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
      <BakaCard state={{hover: true}}>{content}</BakaCard>
      <BakaCard state={{ pressed: true }}>{content}</BakaCard>
      <BakaCard state={{ selected: true }}>{content}</BakaCard>
      <BakaCard variant="filled-alt">{content}</BakaCard>
      <BakaCard variant="filled-alt" state={{hover: true}}>
        {content}
      </BakaCard>
      <BakaCard variant="filled-alt" state={{ pressed: true }}>
        {content}
      </BakaCard>
      <BakaCard variant="filled-alt" state={{ selected: true }}>
        {content}
      </BakaCard>
      <BakaCard variant="outline">{content}</BakaCard>
      <BakaCard variant="outline" state={{hover: true}}>
        {content}
      </BakaCard>
      <BakaCard variant="outline" state={{ pressed: true }}>
        {content}
      </BakaCard>
      <BakaCard variant="outline" state={{ selected: true }}>
        {content}
      </BakaCard>
      <BakaCard variant="subtle">{content}</BakaCard>
      <BakaCard variant="subtle" state={{hover: true}}>{content}</BakaCard>
      <BakaCard variant="subtle" state={{ pressed: true }}>{content}</BakaCard>
      <BakaCard variant="subtle" state={{ selected: true }}>{content}</BakaCard>
    </div>
  );
}
