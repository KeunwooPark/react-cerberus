import { getRenderer } from '../renderer';
import { CerberusStyle } from '../style/CerberusStyle';

/**
 * Circle is a vector element that represents a circle in the Cerberus system. It is similar to the SVG circle element.
 * @param props.cx - The x-coordinate of the center of the circle.
 * @param props.cy - The y-coordinate of the center of the circle.
 * @param props.r - The radius of the circle.
 * @param props - The rest of the props are the style of the circle element.
 * @returns
 */
export function Circle(
  props: CerberusStyle & { cx: number; cy: number; r: number }
) {
  const renderer = getRenderer('circle');

  return renderer({ args: props, style: {} });
}
