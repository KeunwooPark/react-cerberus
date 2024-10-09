import { ReactNode } from 'react';
import { CerberusStyle } from '../style/CerberusStyle';
import { getRenderer } from '../renderer';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void | Promise<void>;
  onFocus?: () => void;
  onBlur?: () => void;
  disabled?: boolean;
  style?: CerberusStyle;
  testID?: string;
}

/**
 * Button element is a button element that represents a button in the Cerberus system. It is similar to the HTML button element and Pressable component in React Native.
 *
 * @param props.children - The children of the button element.
 * @param props.onClick - The callback function that is called when the button element is clicked.
 * @param props.onFocus - The callback function that is called when the button element is focused.
 * @param props.onBlur - The callback function that is called when the button element is blurred.
 * @param props.disabled - The disabled state of the button element.
 * @param props.style - The style of the button element.
 * @returns A Button element.
 */
export function Button(props: ButtonProps) {
  const { onClick, onFocus, onBlur, children, style, disabled, testID } = props;
  const renderer = getRenderer('button');
  return renderer({
    args: { onClick, onFocus, onBlur, disabled },
    children,
    style,
    testID,
  });
}
