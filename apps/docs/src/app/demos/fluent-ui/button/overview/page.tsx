import { Button, Icon } from "baka-fluent-ui";
import { AddFilled } from "@fluentui/react-icons";

export default function ButtonOverview() {
  return (
    <div className="flex flex-row gap-[12px]">
      <div className="flex flex-col gap-[12px]">
        <Button variant="primary">Primary</Button>
        <Button variant="primary">
          Primary
          <Icon as={AddFilled} />
        </Button>
        <Button variant="primary" state={{ disabled: true }}>
          Primary
          <Icon as={AddFilled} />
        </Button>
      </div>
      <div className="flex flex-col gap-[12px]">
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary">
          Secondary
          <Icon as={AddFilled} />
        </Button>
        <Button variant="secondary" state={{ disabled: true }}>
          Secondary
          <Icon as={AddFilled} />
        </Button>
      </div>
      <div className="flex flex-col gap-[12px]">
        <Button variant="outline">Outline</Button>
        <Button variant="outline">
          Outline
          <Icon as={AddFilled} />
        </Button>
        <Button variant="outline" state={{ disabled: true }}>
          Outline
          <Icon as={AddFilled} />
        </Button>
      </div>
      <div className="flex flex-col gap-[12px]">
        <Button variant="subtle">Subtle</Button>
        <Button variant="subtle">
          Subtle
          <Icon as={AddFilled} />
        </Button>
        <Button variant="subtle" state={{ disabled: true }}>
          Subtle
          <Icon as={AddFilled} />
        </Button>
      </div>
      <div className="flex flex-col gap-[12px]">
        <Button variant="transparent">Transparent</Button>
        <Button variant="transparent">
          Transparent
          <Icon as={AddFilled} />
        </Button>
        <Button variant="transparent" state={{ disabled: true }}>
          Transparent
          <Icon as={AddFilled} />
        </Button>
      </div>
    </div>
  );
}
