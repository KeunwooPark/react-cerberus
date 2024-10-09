import { ReactNode } from 'react';
import { CerberusStyle } from '../style/CerberusStyle';
import { getRenderer } from '../renderer';
import { RefreshControl } from '../type/RefreshControl';

interface GridProps {
  numCols: number;
  items: unknown[];
  renderItem: (args: { item: unknown; index?: number }) => ReactNode;
  getKey: (item: unknown, index?: number) => string;
  extraData?: unknown;
  style?: CerberusStyle;
  contentContainerStyle?: CerberusStyle;
  refreshControl?: RefreshControl;
  disableScroll?: boolean;
}

/**
 * A grid component that renders a list of items in a grid layout.
 *
 * The default bahavior in the web and the native environments are different.
 *
 * @param props.numCols - number of columns in the grid.
 * @param props.items - list of items to render.
 * @param props.renderItem - function that renders each item.
 * @param props.getKey - function that returns a unique key for each item.
 * @param props.extraData - when it changes, the component will re-render.
 * @param props.style - style for the grid.
 * @param props.contentContainerStyle - style for the content container.
 * @param props.refreshControl - only for native, config for pull to refresh.
 * @param props.disableScroll - if true, the grid will not scroll.
 * @returns
 */
export function Grid(props: GridProps) {
  const {
    style,
    numCols,
    items,
    renderItem,
    getKey,
    extraData,
    contentContainerStyle,
    refreshControl,
    disableScroll,
  } = props;
  const renderer = getRenderer('grid');
  return renderer({
    args: {
      numCols,
      items,
      renderItem,
      getKey,
      extraData,
      contentContainerStyle,
      refreshControl,
      disableScroll,
    },
    style,
  });
}
