import { CerberusStyle } from '@react-cerberus/elements';

const excludedKeys = [
  'fontWeight',
  'zIndex',
  'opacity',
  'flex',
  'flexGrow',
  'flexShrink',
  'flexBasis',
  'order',
  'aspectRatio',
];

export default function numbersToPixels(
  style: CerberusStyle
): Record<string, string> {
  const typedStyle = { ...style } as Record<string, string | number>;
  const newStyle: Record<string, string> = {};

  for (const key in typedStyle) {
    if (typeof typedStyle[key] === 'number') {
      if (excludedKeys.includes(key)) {
        newStyle[key] = typedStyle[key].toString();
        continue;
      }

      newStyle[key] = `${typedStyle[key]}px`;
    } else {
      newStyle[key] = typedStyle[key] as string;
    }
  }

  return newStyle;
}
