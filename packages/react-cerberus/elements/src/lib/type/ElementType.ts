const ElementTypes = [
  // 'h1',
  // 'h2',
  // 'h3',
  'div',
  'span',
  // 'image',
  // 'paragraph',
  // 'animatedDiv',
  // 'button',
  // 'textInput',
  // 'scrollDiv',
  // 'grid',
  // 'link',
  // svg related
  // 'svg',
  // 'path',
  // 'circle',
  // 'mask',
  // 'rect',
] as const;

/**
 * The types of the Cerberus elements.
 */
export type ElementType = (typeof ElementTypes)[number];
