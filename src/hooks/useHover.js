import { useState, useEffect, useRef } from "react";

function useHover() {
  const [hovered, setHovered] = useState(false);
  const element = useRef(null);
  useEffect(() => {
    const ref = element.current;
    element.current.addEventListener("mouseenter", enter);
    element.current.addEventListener("mouseleave", leave);

    return () => {
      ref.removeEventListener("mouseenter", enter);
      ref.removeEventListener("mouseleave", leave);
    };
  }, []);
  function enter() {
    setHovered(true);
  }
  function leave() {
    setHovered(false);
  }
  return [hovered, element];
}
export default useHover;
