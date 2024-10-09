/**
 * The state of an animation. It defines a property and its value.
 * When adding new properties, make sure to update the web and native components to support them.
 */
export interface AnimationState {
  property: 'opacity' | 'rotate' | 'translateX' | 'translateY';
  value: number;
}
