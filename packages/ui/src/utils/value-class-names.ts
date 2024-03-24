export const valueClassNames = (value: any): string | string[] | null =>
  Array.isArray(value)
    ? value.map((v, index) => (v ? (index ? `value-${index}--${v}` : `value--${v}`) : ''))
    : value
    ? `value--${value}`
    : null;
