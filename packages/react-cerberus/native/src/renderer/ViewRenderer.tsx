import { RendererProps } from '@react-cerberus/elements';
import { LegacyRef, ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import { NativeRenderer } from './NativeRenderer';

export class ViewRenderer extends NativeRenderer {
  renderElement(props: RendererProps): ReactNode {
    const { children, style, ref, testID } = props;

    return (
      <View
        ref={ref as LegacyRef<View>}
        style={style as ViewStyle}
        testID={testID}
      >
        {children}
      </View>
    );
  }
}
