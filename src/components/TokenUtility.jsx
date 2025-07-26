import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const utilityLines = [
  "The $SHHHTOSHI token isn't just a currency – it's your ticket to participate, earn, and grow with the ecosystem.",
  "Stake your tokens to earn ongoing rewards.",
  "Use them to unlock features, boost tasks, or increase your visibility in the leaderboard.",
  "Earn $SHHHTOSHI via points converted from task completions, referrals, and ad views.",
  "After one year, tokens will be distributed via a community-wide airdrop based on your activity and contributions."
];

const TokenUtility = () => {
  const sectionRef = useRef(null);
  const lineRefs = useRef([]);

  useEffect(() => {
    let ctx;
    if (sectionRef.current) {
      ctx = gsap.context(() => {
        gsap.set(lineRefs.current, { opacity: 0, x: -60 });
        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
            toggleActions: "play none none none",
          },
        })
          .to(lineRefs.current, {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.4,
            ease: "power3.out",
          });
      }, sectionRef);
    }
    return () => ctx && ctx.revert();
  }, []);

  return (
    <div className="relative">
      <div ref={sectionRef} className="bg-[#222324] px-4 flex justify-center items-center min-h-[60vh]">
        <div className="max-w-2xl w-full">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-8 text-yellow-200">Token Utility</h1>
          <div className="flex flex-col gap-6">
            {utilityLines.map((line, idx) => (
              <div
                key={idx}
                ref={el => lineRefs.current[idx] = el}
                className="text-lg md:text-xl text-yellow-100 text-left"
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenUtility;
