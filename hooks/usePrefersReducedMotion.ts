import { useEffect, useState } from "react";

// Returns true if user prefers reduced motion (accessibility)
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);
    onChange();
    media.addEventListener ? media.addEventListener("change", onChange) : media.addListener(onChange);
    return () => {
      media.removeEventListener ? media.removeEventListener("change", onChange) : media.removeListener(onChange);
    };
  }, []);

  return reduced;
}
