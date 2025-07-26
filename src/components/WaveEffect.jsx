import { useEffect, useState } from "react";
import gsap from "gsap";

const WaveEffect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const lines = document.querySelectorAll(".wave-line");
    let animations = [];

    lines.forEach((line) => {
      let initialHeight, scaleY;
      if (Math.random() < 0.8) {
        initialHeight = gsap.utils.random(210, 300);
        scaleY = gsap.utils.random(1.7, 2.7);
      } else {
        initialHeight = gsap.utils.random(400, 500);
        scaleY = gsap.utils.random(2.7, 4.5);
      }
      line.style.height = `${initialHeight}px`;

      const anim = gsap.to(line, {
        scaleY: scaleY,
        transformOrigin: "center center",
        duration: gsap.utils.random(3, 5),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: gsap.utils.random(0, 0.8),
        repeatRefresh: true,
      });

      animations.push(anim);
    });

    return () => {
      animations.forEach((anim) => anim.kill());
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".wave-container",
        start: "top center",
        end: "bottom center",
        scrub: false,
      },
    });

    const navItems = document.querySelectorAll(".nav-link");

    navItems.forEach((item, index) => {
      tl.to(
        item,
        {
          y: 20,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        index * 0.2
      );
    });
  }, []);

  return (
    <>
      <div className="absolute bottom-0 left-0 w-full h-[700px] flex justify-between items-center gap-1 z-6 overflow-hidden notesContainer wave-container">
        {Array.from({ length: isMobile ? 16 : 80 }).map((_, i) => (
          <div
            key={i}
            className="wave-line w-[1.2px] bg-[#464749]"
          />
        ))}
      </div>
    </>
  );  
};

export default WaveEffect;
