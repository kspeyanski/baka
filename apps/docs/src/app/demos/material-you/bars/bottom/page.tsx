import { Bar, Button, Icon } from "baka-material-you";

export default async function Demo() {
  return (
    <Bar
      style={{
        width: 400,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      variant="bottom"
    >
      <div style={{ display: "flex", gap: 8 }}>
        {["circle", "change_history", "rectangle", "pentagon", "hexagon"].map(
          (shape) => (
            <Button key={shape} variant={"icon"}>
              <Icon>{shape}</Icon>
            </Button>
          )
        )}
      </div>
      {true ? (
        <Button variant={["fab", "secondary"]}>
          <Icon>add</Icon>
        </Button>
      ) : null}
    </Bar>
  );
}
