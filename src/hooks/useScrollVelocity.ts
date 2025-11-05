import { useEffect, useState, useRef } from "react";

export function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const lastTimestamp = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTimestamp = Date.now();
      
      const distance = currentScrollY - lastScrollY.current;
      const time = currentTimestamp - lastTimestamp.current;
      
      const currentVelocity = time > 0 ? Math.abs(distance / time) : 0;
      
      setVelocity(currentVelocity);
      
      lastScrollY.current = currentScrollY;
      lastTimestamp.current = currentTimestamp;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return velocity;
}






