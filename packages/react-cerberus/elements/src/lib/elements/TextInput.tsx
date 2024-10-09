import { getRenderer } from '../renderer';
import { CerberusStyle } from '../style/CerberusStyle';

interface TextInputProps {
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onClick?: () => void;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  multiline?: boolean;
  blurOnSubmit?: boolean;
  style?: CerberusStyle;
  testID?: string;
}

/**
 * TextInput element is an input element that represents a text input in the Cerberus system. It is similar to the HTML input element.
 * @param props.value - The value of the input element.
 * @param props.onChange - The callback function that is called when the value of the input element is changed.
 * @param props.onFocus - The callback function that is called when the input element is focused.
 * @param props.onBlur - The callback function that is called when the input element is blurred.
 * @param props.onClick - The callback function that is called when the input element is clicked.
 * @param props.placeholder - The placeholder of the input element.
 * @param props.disabled - The disabled state of the input element.
 * @param props.readonly - The readonly state of the input element.
 * @param props.multiline - The multiline state of the input element. only for native component.
 * @param props.blurOnSubmit - The component will lose focus when the user submits the form. only for native component (for now).
 * @param props.style - The style of the input element.
 * @returns A TextInput element.
 */
export function TextInput(props: TextInputProps) {
  const {
    value,
    onClick,
    onChange,
    onFocus,
    placeholder,
    style,
    onBlur,
    disabled,
    multiline,
    blurOnSubmit,
    readonly,
    testID,
  } = props;
  const renderer = getRenderer('textInput');
  return renderer({
    args: {
      value,
      onChange,
      onClick,
      onFocus,
      placeholder,
      onBlur,
      disabled,
      readonly,
      multiline,
      blurOnSubmit,
    },
    style,
    testID,
  });
}
