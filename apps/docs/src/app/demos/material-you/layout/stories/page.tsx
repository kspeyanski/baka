import { Container, Row, Column } from "baka-material-you";

export type LayoutStoryProps = {
  columns?: number;
  size?: number;
  autosize?: boolean;
};

export const defaultProps = {
  columns: 12,
  autosize: false,
  size: 2,
  region: true,
};

export default function LayoutDemo(props: LayoutStoryProps) {
  const args = { ...defaultProps, ...props };

  return (
    <div
      style={{
        width: "calc(100vw - 128px)",
        height: "calc(100vh - 64px)",
        display: "flex",
      }}
    >
      {args.region ? (
        <Column variant={"region-left"} style={{ background: "#FDE0F1" }}>
          <div style={{ height: "calc(100vh - 64px" }} />
        </Column>
      ) : null}
      <Container>
        <Row style={{ height: "100%" }}>
          {Array.from({ length: args.columns }).map((_, index) => (
            <Column key={index} columns={args.autosize ? undefined : args.size}>
              <div
                style={{ height: "100%", width: "100%", background: "#E0F0F0" }}
              />
            </Column>
          ))}
        </Row>
      </Container>
    </div>
  );
}
