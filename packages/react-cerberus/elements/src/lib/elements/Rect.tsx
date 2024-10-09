import { getRenderer } from '../renderer';
import { CerberusStyle } from '../style/CerberusStyle';

export function Rect(
  props: CerberusStyle & {
    x?: number;
    y?: number;
    rx?: number;
    ry?: number;
    fill?: string;
  }
) {
  const { x, y, width, height, rx, ry, fill, ...style } = props;
  const renderer = getRenderer('rect');
  return renderer({
    style,
    args: { x, y, width, height, rx, ry },
  });
}
