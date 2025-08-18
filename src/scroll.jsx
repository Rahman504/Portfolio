import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");   // add when in view
          } else {
            entry.target.classList.remove("active"); // remove when out of view
          }
        });
      },
      { threshold: window.innerWidth < 768 ? 0.1 : 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimation;
