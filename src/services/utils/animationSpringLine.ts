import { useSpring } from "react-spring";

export const usePathAnimation = (
  initialD: string,
  targetD: string,
  alternateTargetD: string
) => {
  const pathAnimation = useSpring({
    from: { d: initialD },
    to: async (next) => {
      while (true) {
        await next({ d: targetD });
        await next({ d: alternateTargetD });
      }
    },
    config: { duration: 4000 },
  });

  return pathAnimation;
};
