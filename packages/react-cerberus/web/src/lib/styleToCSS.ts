import { CerberusStyle } from '@react-cerberus/elements';
import numbersToPixels from './numbersToPixels';

const regex = new RegExp(/[A-Z]/g);
const kebabCase = (str: string) =>
  str.replace(regex, (v) => `-${v.toLowerCase()}`);
/**
 * Convert style object to CSS string for styled-components
 * ref: https://stackoverflow.com/questions/63771649/react-convert-cssproperties-to-styled-component
 * @param {PuisStyle} style - style object
 * @returns {string} - CSS string
 */
export function styleToCSS(style?: CerberusStyle): string {
  if (!style) {
    return '';
  }

  const cleanedStyle = numbersToPixels(style);

  const cssObject: Record<string, string> = {};
  for (const key in cleanedStyle) {
    const cssKey = kebabCase(key);
    cssObject[cssKey] = cleanedStyle[key];
  }

  return Object.keys(cssObject)
    .map((key) => `${key}: ${cssObject[key]};`)
    .join('\n');
}
