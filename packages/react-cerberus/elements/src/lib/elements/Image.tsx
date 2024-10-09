import { ReactNode } from 'react';
import { CerberusStyle } from '../style/CerberusStyle';
import { getRenderer } from '../renderer';
import { ImageResizeMode } from '../type/ImageResizeMode';

export interface ImageProps {
  src: string;
  alt: string;
  resizeMode?: ImageResizeMode; // only for native
  children?: ReactNode | ReactNode[];
  onLoad?: () => void;
  onError?: () => void;
  style?: CerberusStyle;
  testID?: string;
}

/**
 * Image element is a media element that represents an image in the Cerberus system. It is similar to the HTML img element and Image element in React Native.
 * @param props.src - The source of the image.
 * @param props.alt - The alternative text of the image.
 * @param props.children - The children of the image element.
 * @param props.onLoad - The callback function that is called when the image is loaded.
 * @param props.onError - The callback function that is called when the image fails to load.
 * @param props.style - The style of the image element.
 * @returns An Image element.
 */
export function Image(props: ImageProps): ReactNode {
  const { src, alt, children, onLoad, onError, resizeMode, style, testID } =
    props;

  const renderer = getRenderer('image');

  return renderer({
    args: { src, alt, onLoad, onError, resizeMode },
    children,
    style,
    testID,
  });
}
