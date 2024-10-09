import { AnimationPhysics } from './AnimationPhysics';
import { AnimationState } from './AnimationState';

/**
 * AnimationProps is a set of properties that define an animation.
 *
 * @property from - The initial state of the animation.
 * @property to - The final state of the animation.
 * @property physics - The physics model of the animation.
 * @property loop - The loop configuration of the animation. If it is true, the animation will loop infinitely. If it is an object, it will loop with the specified configuration.
 */
export interface AnimationProps {
  from: AnimationState;
  to: AnimationState;
  physics?: AnimationPhysics;
  loop?: boolean | { reverse: boolean };
}
