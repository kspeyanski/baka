export const valueClassNames = (
  value: any,
  design?: { [key: string]: string }
): string | string[] | null =>
  design && Object.keys(design).length > 0
    ? Array.isArray(value)
      ? value.map((v) => design[`value--${v}`])
      : design[`value--${value}`]
    : Array.isArray(value)
    ? value.map((v) => `value--${v}`)
    : value
    ? `value--${value}`
    : null;
