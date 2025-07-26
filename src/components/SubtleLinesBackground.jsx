import { useEffect } from "react";
import gsap from "gsap";

const SubtleLinesBackground = () => {
  useEffect(() => {
    const lines = document.querySelectorAll(".subtle-line");
    let animations = [];

    lines.forEach((line) => {
      let initialHeight = gsap.utils.random(180, 320);
      let scaleY = gsap.utils.random(1.05, 1.25);
      line.style.height = `${initialHeight}px`;

      const anim = gsap.to(line, {
        scaleY: scaleY,
        transformOrigin: "center center",
        duration: gsap.utils.random(7, 12),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: gsap.utils.random(0, 3),
        repeatRefresh: true,
      });
      animations.push(anim);
    });

    return () => {
      animations.forEach((anim) => anim.kill());
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full flex justify-between items-center z-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className="subtle-line w-[1px] h-3/4 bg-yellow-400/20 rounded-full"
          style={{ opacity: 0.5, marginLeft: i === 0 ? 0 : 8 }}
        />
      ))}
    </div>
  );
};

export default SubtleLinesBackground; 