import { BakaBadge, BakaBadgeProps, BakaIcon, BakaText } from "baka-ui";

export default function BadgeCatalog(props: { variant: BakaBadgeProps["variant"] }) {
  if (!props.variant) return null;

  return (
    <div className="flex flex-row gap-[28px]">
      <div className="flex flex-col gap-[32px]">
        <BakaBadge variant={[...(Array.isArray(props.variant) ? props.variant : [props.variant]), "filled"]}>
          <BakaIcon></BakaIcon>
          <BakaText>1</BakaText>
        </BakaBadge>
        <BakaBadge variant={[...(Array.isArray(props.variant) ? props.variant : [props.variant]), "filled"]}>
          <BakaText>1</BakaText>
          <BakaIcon></BakaIcon>
        </BakaBadge>
        <BakaBadge variant={[...(Array.isArray(props.variant) ? props.variant : [props.variant]), "filled"]}>
          <BakaText>1</BakaText>
        </BakaBadge>
        <BakaBadge variant={[...(Array.isArray(props.variant) ? props.variant : [props.variant]), "filled"]}>
          <BakaIcon></BakaIcon>
        </BakaBadge>
      </div>
      <div className="flex flex-col gap-[32px]">
        <BakaBadge variant={[...(Array.isArray(props.variant) ? props.variant : [props.variant]), "tint"]}>
          <BakaIcon></BakaIcon>
          <BakaText>1</BakaText>
        </BakaBadge>
        <BakaBadge variant={[...(Array.isArray(props.variant) ? props.variant : [props.variant]), "tint"]}>
          <BakaText>1</BakaText>
          <BakaIcon></BakaIcon>
        </BakaBadge>
        <BakaBadge variant={[...(Array.isArray(props.variant) ? props.variant : [props.variant]), "tint"]}>
          <BakaText>1</BakaText>
        </BakaBadge>
        <BakaBadge variant={[...(Array.isArray(props.variant) ? props.variant : [props.variant]), "tint"]}>
          <BakaIcon></BakaIcon>
        </BakaBadge>
      </div>
      <div className="flex flex-col gap-[32px]">
        <BakaBadge variant={[...(Array.isArray(props.variant) ? props.variant : [props.variant]), "outline"]}>
          <BakaIcon></BakaIcon>
          <BakaText>1</BakaText>
        </BakaBadge>
        <BakaBadge variant={[...(Array.isArray(props.variant) ? props.variant : [props.variant]), "outline"]}>
          <BakaText>1</BakaText>
          <BakaIcon></BakaIcon>
        </BakaBadge>
        <BakaBadge variant={[...(Array.isArray(props.variant) ? props.variant : [props.variant]), "outline"]}>
          <BakaText>1</BakaText>
        </BakaBadge>
        <BakaBadge variant={[...(Array.isArray(props.variant) ? props.variant : [props.variant]), "outline"]}>
          <BakaIcon></BakaIcon>
        </BakaBadge>
      </div>
      <div className="flex flex-col gap-[32px]">
        <BakaBadge variant={[...(Array.isArray(props.variant) ? props.variant : [props.variant]), "subtle"]}>
          <BakaIcon></BakaIcon>
          <BakaText>1</BakaText>
        </BakaBadge>
        <BakaBadge variant={[...(Array.isArray(props.variant) ? props.variant : [props.variant]), "subtle"]}>
          <BakaText>1</BakaText>
          <BakaIcon></BakaIcon>
        </BakaBadge>
        <BakaBadge variant={[...(Array.isArray(props.variant) ? props.variant : [props.variant]), "subtle"]}>
          <BakaText>1</BakaText>
        </BakaBadge>
        <BakaBadge variant={[...(Array.isArray(props.variant) ? props.variant : [props.variant]), "subtle"]}>
          <BakaIcon></BakaIcon>
        </BakaBadge>
      </div>
    </div>
  );
}
