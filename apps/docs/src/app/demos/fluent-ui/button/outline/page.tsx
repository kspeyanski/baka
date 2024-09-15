import { Button, Icon } from "baka-fluent-ui";

export default function ButtonDemo() {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <Button variant={"outline"}>Text</Button>
          <Button variant={"outline"}>
            <Icon></Icon>
            Text
          </Button>
          <Button variant={["outline", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button state={{hover: true}} variant={"outline"}>
            Text
          </Button>
          <Button state={{hover: true}} variant={"outline"}>
            <Icon></Icon>
            Text
          </Button>
          <Button state={{hover: true}} variant={["outline", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button state={{ pressed: true }} variant={"outline"}>
            Text
          </Button>
          <Button state={{ pressed: true }} variant={"outline"}>
            <Icon></Icon>
            Text
          </Button>
          <Button state={{ pressed: true }} variant={["outline", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button state={{ selected: true }} variant={"outline"}>
            Text
          </Button>
          <Button state={{ selected: true }} variant={"outline"}>
            <Icon></Icon>
            Text
          </Button>
          <Button state={{ selected: true }} variant={["outline", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button state={{ focus: true }} variant={"outline"}>
            Text
          </Button>
          <Button state={{ focus: true }} variant={"outline"}>
            <Icon></Icon>
            Text
          </Button>
          <Button state={{ focus: true }} variant={["outline", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button disabled={true} state={{ disabled: true }} variant={"outline"}>
            Text
          </Button>
          <Button disabled={true} state={{ disabled: true }} variant={"outline"}>
            <Icon></Icon>
            Text
          </Button>
          <Button disabled={true} state={{ disabled: true }} variant={["outline", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
      </div>
    </>
  );
}
