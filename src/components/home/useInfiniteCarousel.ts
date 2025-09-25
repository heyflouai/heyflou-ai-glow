import { useEffect, useMemo, useRef, useState } from "react";

export function useInfiniteCarousel<T>(items: T[], { peek = 0 }: { peek?: number } = {}) {
  // duplicate items [items][items][items] and start at the middle block
  const BASE = items.length;
  const tripled = useMemo(() => [...items, ...items, ...items], [items]);
  const [index, setIndex] = useState(BASE); // start in the middle
  const [anim, setAnim] = useState(true);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Jump logic: when we cross block boundaries, teleport without animation
  useEffect(() => {
    if (!anim) return;
    if (index >= BASE * 2) {
      // went past the middle block → jump back into middle at same relative slide
      setAnim(false);
      setIndex((i) => i - BASE);
    } else if (index < BASE) {
      setAnim(false);
      setIndex((i) => i + BASE);
    }
  }, [index, BASE, anim]);

  // Re-enable animation after a teleport
  useEffect(() => {
    if (!anim) {
      const id = requestAnimationFrame(() => setAnim(true));
      return () => cancelAnimationFrame(id);
    }
  }, [anim]);

  const goNext = () => setIndex((i) => i + 1);
  const goPrev = () => setIndex((i) => i - 1);

  const baseIndex = ((index % BASE) + BASE) % BASE; // 0..BASE-1 for dots/labels

  return { tripled, index, baseIndex, setIndex, goNext, goPrev, anim, trackRef, BASE };
}