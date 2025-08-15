import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sections.forEach((sec) => sec.classList.remove("active"));
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: window.innerWidth < 768 ? 0.3 : 0.5 }

    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimation;
