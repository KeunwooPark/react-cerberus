import { Renderer, RendererProps } from '@react-cerberus/elements';
import { ReactNode } from 'react';
import { Text, TextStyle } from 'react-native';

export class TextRenderer extends Renderer {
  renderElement(props: RendererProps): ReactNode {
    const { children, style, testID } = props;
    return (
      <Text style={style as TextStyle} testID={testID}>
        {children}
      </Text>
    );
  }
}
