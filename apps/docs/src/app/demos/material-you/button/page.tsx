import { Button } from "baka-material-you";

export default function ButtonDemo() {
  return (
    <>
      <div className="flex flex-col">
        <Button variant="filled">Button</Button>
        <Button variant="outlined">Button</Button>
        <Button variant="text">Button</Button>
        <Button variant="elevated">Button</Button>
      </div>
    </>
  );
}
