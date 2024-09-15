"use client";
import { Button, Icon } from "baka-fluent-ui";

export default function ButtonDemo() {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <Button variant={"primary"}>Text</Button>
          <Button variant={"primary"}>
            <Icon></Icon>
            Text
          </Button>
          <Button variant={["primary", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button state={{ hover: true }} variant={"primary"}>
            Text
          </Button>
          <Button state={{hover: true}} variant={"primary"}>
            <Icon></Icon>
            Text
          </Button>
          <Button state={{hover: true}} variant={["primary", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button state={{ pressed: true }} variant={"primary"}>
            Text
          </Button>
          <Button state={{ pressed: true }} variant={"primary"}>
            <Icon></Icon>
            Text
          </Button>
          <Button state={{ pressed: true }} variant={["primary", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button state={{ selected: true }} variant={"primary"}>
            Text
          </Button>
          <Button state={{ selected: true }} variant={"primary"}>
            <Icon></Icon>
            Text
          </Button>
          <Button state={{ selected: true }} variant={["primary", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button state={{ focus: true }} variant={"primary"}>
            Text
          </Button>
          <Button state={{ focus: true }} variant={"primary"}>
            <Icon></Icon>
            Text
          </Button>
          <Button state={{ focus: true }} variant={["primary", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button disabled={true} state={{ disabled: true }} variant={"primary"}>
            Text
          </Button>
          <Button disabled={true} state={{ disabled: true }} variant={"primary"}>
            <Icon></Icon>
            Text
          </Button>
          <Button disabled={true} state={{ disabled: true }} variant={["primary", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
      </div>
    </>
  );
}
