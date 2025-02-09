export const valueClassNames = (
  value: any,
  classNames: { [className: string]: string }
): string | string[] | null =>
  Array.isArray(value)
    ? value.map((v, index) => {
        const key = `value-${index}--${v}`;
        return classNames?.[key] || key;
      })
    : value
    ? (classNames?.[`value--${value}`] ?? `value--${value}`)
    : null;
