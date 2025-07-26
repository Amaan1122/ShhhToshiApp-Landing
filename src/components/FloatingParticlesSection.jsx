import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./FloatingParticlesSection.css";
import { FaAngleDoubleRight, FaArrowAltCircleDown, FaCoins } from "react-icons/fa";
import { GoCrossReference } from "react-icons/go";
import { RiCoinsFill } from "react-icons/ri";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const features = [
  {
    icon: <FaCoins />,
    title: "Staking",
    description:
      "Lock your tokens and earn rewards based on time and commitment.",
  },
  {
    icon: <RiCoinsFill />,
    title: "Task-Based Rewards",
    description:
      "Complete simple tasks like following, liking, or watching ads to earn points.",
  },
  {
    icon: <GoCrossReference />,
    title: "Referral System",
    description: "Invite friends and earn bonus points for each verified user.",
  },
];

const utilityLines = [
  "The SHHHTOSHI token isn't just a currency – it's your ticket to participate, earn, and grow with the ecosystem.",
  "Stake your tokens to earn ongoing rewards.",
  "Use them to unlock features, boost tasks, or increase your visibility in the leaderboard.",
  "Earn $SHHHTOSHI via points converted from task completions, referrals, and ad views.",
  "After one year, tokens will be distributed via a community-wide airdrop based on your activity and contributions."
];

const FloatingParticlesSection = ({ numberOfParticles = 90 }) => {



  const cardsRef = useRef([]);
  const iconsRef = useRef([]);
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
  useEffect(() => {
    // Entry animations
    cardsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.95, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Icon flip on hover
    iconsRef.current.forEach((icon, i) => {
      const card = cardsRef.current[i];

      card.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          rotateY: 360, // full spin so front stays visible
          duration: 0.6,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          rotateY: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      });
    });
  }, []);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const particles = [];

    for (let i = 0; i < numberOfParticles; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      // Random initial position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      // Optional: random size and opacity
      const size = gsap.utils.random(4, 10);
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = gsap.utils.random(0.3, 0.7);

      backgroundRef.current.appendChild(particle);
      particles.push(particle);

      // Animate the particle
      gsap.to(particle, {
        x: `random(-40, 40)`,
        y: `random(-40, 40)`,
        duration: gsap.utils.random(1, 3),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Cleanup on unmount
    return () => {
      particles.forEach((p) => p.remove());
    };
  }, [numberOfParticles]);

  return (
    <div className="donation-page">
      <div className="donation-background" ref={backgroundRef} />
      <div className="relative w-full">
      <section className="px-4 text-white/80 font-sans text-center">
        <div className="max-w-5xl mx-auto text-center mb-[40px]">
          <p className="mb-4 text-xl md:text-3xl lg:text-4xl font-bold text-yellow-200">Staking. Tasks. Referrals. All in One Place.</p>
          <h4 className="mb-20">
            ShhhToshi brings you a fully decentralized rewards ecosystem right
            inside Telegram.
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="relative rounded-xl  from-yellow-400/40 to-yellow-600/10 p-[2px]"
              >
                <div className="bg-black p-6 rounded-xl h-full flex flex-col items-center text-center transition-transform duration-300 shadow-[0_0_25px_rgba(255,221,0,0.4)] hover:scale-105">
                  <div
                    ref={(el) => (iconsRef.current[i] = el)}
                    className="bg-yellow-400 text-black w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold shadow-md mb-4"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/80">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <h3 className="mt-20">
            All features are available in the Mini App. You just focus on
            earning - we handle the rest.
          </h3>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[300px]  from-transparent to-[#222324] z-10 pointer-events-none" />
      </section>

      <div className="relative">
      <div className="absolute bottom-0 left-0 w-full h-[300px] from-transparent to-black z-10 pointer-events-none" />
      <div ref={sectionRef} className=" px-4 flex justify-center items-center min-h-[60vh]">
        <div className="max-w-5xl w-full">
          <p className="text-xl md:text-3xl lg:text-4xl font-bold mb-8 text-yellow-200 text-center">Token Utility</p>
          <div className="flex flex-col gap-6">
            {utilityLines.map((line, idx) => (
              <div
                key={idx}
                ref={el => lineRefs.current[idx] = el}
                className="text-lg md:text-xl text-white/80 text-left flex items-start gap-2"
              >
                <span className="w-6 h-6 flex items-center justify-center text-yellow-300 text-2xl">
                  <BiSolidQuoteAltRight />
                </span>
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      {/* <WaveEffect /> */}
    </div>
    </div>
  );
};

export default FloatingParticlesSection;
