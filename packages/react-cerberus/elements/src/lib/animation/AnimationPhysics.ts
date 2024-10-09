/**
 * AnimationPhysics is a mass-based physics model for animations.
 *
 * @property mass - The mass of the object.
 * @property damping - The damping of the object.
 * @property stiffness - The stiffness of the object.
 */
export interface AnimationPhysics {
  mass?: number;
  damping?: number;
  stiffness?: number;
}

export const DefaultAnimationPhysics: AnimationPhysics = {
  mass: 1,
  damping: 10,
  stiffness: 100,
};
