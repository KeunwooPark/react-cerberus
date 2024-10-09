import { getRenderer } from '../renderer';
import { CerberusStyle } from '../style/CerberusStyle';
import { RefreshControl } from '../type/RefreshControl';

interface ScrollDiv {
  refreshControl?: RefreshControl; // only for native
  containerStyle?: CerberusStyle; // only for native
  children?: React.ReactNode;
  style?: CerberusStyle;
  testID?: string;
}

/**
 * ScrollDive element is the Div element with scroll. Similar to the React Native ScrollView element.
 *
 * @param props.children - The children of the scrollDiv element.
 * @param props.style - The style of the scrollDiv element.
 * @param props.refreshControl - The refresh control of the scrollDiv element. It is used for pull to refresh. It only works on native.
 * @param props.containerStyle - The container style of the scrollDiv element. It only works on native for now.
 * @returns
 */
export function ScrollDiv(props: ScrollDiv) {
  const { children, style, refreshControl, containerStyle, testID } = props;

  const renderer = getRenderer('scrollDiv');

  return renderer({
    children,
    style,
    args: { refreshControl, containerStyle },
    testID,
  });
}
