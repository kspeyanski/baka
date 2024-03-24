declare module "baka-core" {

  export interface BakaDesign{
    ButtonVariant: "link" | "cta" | "secondary-cta";
    HeadingVariant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "hero";
    ParagraphVariant: "body" | "body-large" | "body-small" | "sub-hero";
    TextVariant: "body" | "body-large" | "body-small" | "code";
  }
}
