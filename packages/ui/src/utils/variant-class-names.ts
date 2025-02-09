export const variantClassNames = (
  variant?: string | string[],
  classNames?: { [key: string]: string }
): string | string[] | null =>
  classNames && Object.keys(classNames).length > 0
    ? Array.isArray(variant)
      ? variant.map((v) => classNames[`variant--${v}`])
      : classNames[`variant--${variant}`]
    : Array.isArray(variant)
    ? variant.map((v) => `variant--${v}`)
    : variant
    ? `variant--${variant}`
    : null;
