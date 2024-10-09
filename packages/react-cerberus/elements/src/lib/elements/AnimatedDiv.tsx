import { ReactNode } from 'react';
import { CerberusStyle } from '../style/CerberusStyle';
import { getRenderer } from '../renderer';
import { AnimationProps } from '../animation';

interface AnimatedDivProps {
  children?: ReactNode;
  animationProps?: AnimationProps;
  style?: CerberusStyle;
  testID?: string;
}

/**
 * AnimatedDiv element is similar to the {@link Div} element but supports animations.
 * @param props.children - The children of the animated div element.
 * @param props.animationProps - The animation props of the animated div element.
 * @param props.style - The style of the animated div element.
 * @returns
 */
export function AnimatedDiv(props: AnimatedDivProps) {
  const { children, animationProps, style, testID } = props;
  const renderer = getRenderer('animatedDiv');
  return renderer({ children, args: { animationProps }, style, testID });
}
