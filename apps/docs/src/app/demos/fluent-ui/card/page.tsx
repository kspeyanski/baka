import { Text } from "baka-fluent-ui";
import { Card } from "baka-fluent-ui";

const content = (
  <div className="w-[100%] uppercase p-10 flex align-center justify-center bg-brand-background-2 text-brand-foreground-1">
    <Text variant={"caption-2-strong"}>content</Text>
  </div>
);

export default function CardDemos() {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-4">
      <Card>{content}</Card>
      <Card state={{ hover: true }}>{content}</Card>
      <Card state={{ pressed: true }}>{content}</Card>
      <Card state={{ selected: true }}>{content}</Card>
      <Card variant="filled-alt">{content}</Card>
      <Card variant="filled-alt" state={{ hover: true }}>
        {content}
      </Card>
      <Card variant="filled-alt" state={{ pressed: true }}>
        {content}
      </Card>
      <Card variant="filled-alt" state={{ selected: true }}>
        {content}
      </Card>
      <Card variant="outline">{content}</Card>
      <Card variant="outline" state={{ hover: true }}>
        {content}
      </Card>
      <Card variant="outline" state={{ pressed: true }}>
        {content}
      </Card>
      <Card variant="outline" state={{ selected: true }}>
        {content}
      </Card>
      <Card variant="subtle">{content}</Card>
      <Card variant="subtle" state={{ hover: true }}>
        {content}
      </Card>
      <Card variant="subtle" state={{ pressed: true }}>
        {content}
      </Card>
      <Card variant="subtle" state={{ selected: true }}>
        {content}
      </Card>
    </div>
  );
}
