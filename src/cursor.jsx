import { useEffect } from "react";
import gsap from "gsap";

export default function TargetCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".target-cursor-wrapper");
    const dot = document.querySelector(".target-cursor-dot");

    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(dot, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.25,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <div className="target-cursor-wrapper">
      <div className="target-cursor-dot"></div>
      <div className="target-cursor-corner corner-tl"></div>
      <div className="target-cursor-corner corner-tr"></div>
      <div className="target-cursor-corner corner-br"></div>
      <div className="target-cursor-corner corner-bl"></div>
    </div>
  );
}
