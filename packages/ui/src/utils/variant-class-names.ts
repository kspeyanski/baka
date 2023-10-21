import { BakaVariant } from "../models/variant";

export const variantClassNames = (
  variant: BakaVariant<any>,
  design?: { [key: string]: string }
): string | string[] | null =>
  design && Object.keys(design).length > 0
    ? Array.isArray(variant)
      ? variant.map((v) => design[`variant--${v}`])
      : design[`variant--${variant}`]
    : Array.isArray(variant)
    ? variant.map((v) => `variant--${v}`)
    : variant
    ? `variant--${variant}`
    : null;
