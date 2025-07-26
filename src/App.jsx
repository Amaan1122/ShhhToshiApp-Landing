import React, { useEffect, useRef } from "react";

import BG from "./assets/bg1.jpg";
import FloatingParticlesSection from "./components/FloatingParticlesSection";
import VideoBackgroundSection from "./components/VideoBackgroundSection";
import { gsap } from "gsap";
import { FaBeer, FaCoins, FaTelegramPlane } from "react-icons/fa";
import { GoCrossReference } from "react-icons/go";
import { RiCoinsFill } from "react-icons/ri";
import WaveEffect from "./components/WaveEffect";
import TokenUtility from "./components/TokenUtility";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SubtleLinesBackground from "./components/SubtleLinesBackground";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          buttonRef.current,
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );
    });

    return () => ctx.revert(); // clean up on unmount
  }, []);

  return (
    <section className="relative text-white text-center h-screen overflow-hidden">
      {/* Hero Image */}
      <img
        src={BG}
        alt="ShhhToshi Logo"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Animated Gradient Overlay */}
      <div className="hero-animated-gradient absolute inset-0 z-5 pointer-events-none" />

      {/* Animated Particles Overlay */}
      <div className="hero-particles absolute inset-0 z-6 pointer-events-none" />

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />

      {/* Text Content */}
      <div
        className="absolute top-1/2 left-1/2 md:right-[10%] md:left-auto transform -translate-y-1/2 -translate-x-1/2 md:translate-x-0 z-20 font-sans text-white/80 text-center w-full max-w-xl md:max-w-2xl lg:max-w-4xl px-4"
      >
        <div className="hero-glow relative inline-block">
          <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-4 text-yellow-200 font-sans">
            Welcome to <span className="hero-highlight">ShhhToshi</span>
          </h1>
        </div>
        <p ref={subtitleRef} className="text-lg md:text-xl mb-6 font-sans">
          Stake, Earn, and Meme your way into the future of Web3
        </p>
        <button
          ref={buttonRef}
          className="text-yellow-200 bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition font-sans shadow-md hero-pulse"
        >
          {/* <a
            href="https://linktr.ee/shhhtoshi"
            target="_blank"
            rel="noopener noreferrer"
          > */}
            Coming Soon....
          {/* </a> */}
        </button>
      </div>
    </section>
  );
};

const colors = {
  yellow: "#FDB80A",
  orange: "#FEC31E",
  amber: "#FDB60C",
  paleYellow: "#FEDA5E",
  black: "#000000",
};

const features = [
  {
    icon: <FaCoins />,
    title: "Staking",
    description:
      "Lock your tokens and earn rewards based on time and commitment.",
    bg: colors.yellow,
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
    bg: colors.amber,
  },
];

const FeaturesSection = () => {
  const cardsRef = useRef([]);
  const iconsRef = useRef([]);

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

  return (
    <div className="relative">
      <section className="bg-black py-16 px-4 text-white/80 font-sans text-center">
        <div className="max-w-5xl mx-auto text-center mb-[110px]">
          <h1 className="text-xl md:text-2xl lg:text-3xl mb-4">Staking. Tasks. Referrals. All in One Place.</h1>
          <h4 className="mb-20">
            ShhhToshi brings you a fully decentralized rewards ecosystem right
            inside Telegram.
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="relative rounded-xl bg-gradient-to-br from-yellow-400/40 to-yellow-600/10 p-[2px]"
              >
                <div className="bg-black p-6 rounded-xl h-full flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 animated-glow">
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
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-b from-transparent to-[#222324] z-10 pointer-events-none" />
      </section>
      {/* <WaveEffect /> */}
    </div>
  );
};

const TokenUtilitySection = () => (
  <section className="py-16 px-8 bg-white text-gray-800">
    <h2 className="text-3xl font-semibold mb-4 text-center">Token Utility</h2>
    <p className="max-w-3xl mx-auto text-center">
      The ShhhToshi token fuels the ecosystem — from staking to claiming
      rewards. It's the currency of fun, engagement, and earning inside our Mini
      App.
    </p>
  </section>
);

const howItWorksSteps = [
  "Join the ShhhToshi Mini App via Telegram",
  "Stake your $SHHHTOSHI tokens to begin earning passively",
  "Complete Tasks like follows, likes, or watching ads",
  "Earn Points, climb the leaderboard, and grow your balance",
  "Claim Rewards - distributed as tokens during the airdrop"
];

const HowItWorksSection = () => {
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);
  const introRef = useRef(null);

  useEffect(() => {
    let ctx;
    if (sectionRef.current) {
      ctx = gsap.context(() => {
        gsap.set([introRef.current, ...stepRefs.current], { opacity: 0, x: -60 });
        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
            toggleActions: "play none none none",
          },
        })
          .to(introRef.current, { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" })
          .to(stepRefs.current, {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.3,
            ease: "power3.out",
          }, "+=0.1");
      }, sectionRef);
    }
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 px-4 bg-black text-yellow-100 font-sans flex flex-col items-center overflow-hidden">
      {/* <SubtleLinesBackground /> */}
      <WaveEffect/>
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-yellow-200 relative z-10">How It Works</h2>
      <div ref={introRef} className="text-xl md:text-2xl mb-10 text-yellow-200 font-semibold text-center max-w-2xl relative z-10">
        Start Earning in Just a Few Steps
      </div>
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
        {howItWorksSteps.map((step, idx) => (
          <li
            key={idx}
            ref={el => stepRefs.current[idx] = el}
            className={`relative pl-10 text-lg md:text-xl text-white/80 bg-[#181818] rounded-lg py-4 px-4 border-l-4 border-yellow-400 shadow-md list-none ${howItWorksSteps.length % 2 === 1 && idx === howItWorksSteps.length - 1 ? 'lg:col-span-2 lg:mx-auto lg:w-1/2' : ''}`}
            style={{overflow: 'hidden'}}
          >
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-yellow-300 font-bold text-2xl">{idx+1}.</span>
            {step}
          </li>
        ))}
      </div>
    </section>
  );
};

const faqData = [
  {
    q: "Where do I access the full app?",
    a: "All features are available via the Telegram Mini App. Click 'Open App' to get started."
  },
  {
    q: "Is this platform secure?",
    a: "Yes. Smart contracts are deployed on the TON blockchain and will undergo a full audit before launch."
  },
  {
    q: "How do I earn rewards?",
    a: "Stake tokens and complete simple tasks like following or watching short ads. You earn points, which convert to $SHHHTOSHI."
  },
  {
    q: "When do I receive my tokens?",
    a: "Tokens will be distributed in an airdrop after the full campaign period (approximately 1 year)."
  },
  {
    q: "What if I don't have a wallet?",
    a: "You can create or connect a TON wallet directly inside the app. No advanced knowledge required."
  },
];

const FAQSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    let ctx;
    if (sectionRef.current) {
      ctx = gsap.context(() => {
        gsap.set(cardRefs.current, { opacity: 0, y: 40 });
        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
            toggleActions: "play none none none",
          },
        })
          .to(cardRefs.current, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.25,
            ease: "power3.out",
          });
      }, sectionRef);
    }
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 px-4 bg-black text-yellow-100 font-sans flex flex-col items-center overflow-hidden">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-10 text-yellow-200">Frequently Asked Questions</h2>
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            ref={el => cardRefs.current[idx] = el}
            className={`faq-card bg-[#181818] rounded-xl p-6 transition-all duration-300 hover:scale-[1.025] animated-glow ${faqData.length % 2 === 1 && idx === faqData.length - 1 ? 'lg:col-span-2 lg:mx-auto lg:w-1/2' : ''}`}
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <svg
              className="faq-border"
              width="100%"
              height="100%"
              viewBox="0 0 400 200"
              preserveAspectRatio="none"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2 }}
            >
              <defs>
                <linearGradient id="faq-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#FEDA5E" stop-opacity="0.8" />
                  <stop offset="80%" stop-color="#181818" stop-opacity="0.2" />
                  <stop offset="100%" stop-color="#181818" stop-opacity="0" />
                </linearGradient>
              </defs>
              <rect
                x="3" y="3" width="394" height="194" rx="20" ry="20"
                fill="none"
                stroke="url(#faq-gradient)"
                strokeWidth="4"
                className="faq-border-rect"
              />
            </svg>
            <div className="flex items-start gap-3 mb-2">
              <span className="text-yellow-300 text-2xl font-bold">Q:</span>
              <span className="font-semibold text-lg text-white/80">{item.q}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-300 text-2xl font-bold">A:</span>
              <span className="text-white/80 text-base">{item.a}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CommunitySection = () => {
  const sectionRef = useRef(null);
  const linkRefs = useRef([]);

  useEffect(() => {
    let ctx;
    if (sectionRef.current) {
      ctx = gsap.context(() => {
        gsap.set(linkRefs.current, { opacity: 0, y: 30 });
        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
            toggleActions: "play none none none",
          },
        })
          .to(linkRefs.current, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: "power3.out",
          });
      }, sectionRef);
    }
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 px-4 bg-black text-yellow-100 font-sans flex flex-col items-center overflow-hidden">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-yellow-200">Community Links</h2>
      <p className="text-xl md:text-2xl mb-10  font-semibold text-center max-w-2xl text-white/80">
        Stay updated and be part of the movement:
      </p>
      <div className="flex justify-center gap-8">
        <a
          href="https://t.me/shhhtoshi"
          target="_blank"
          rel="noopener noreferrer"
          ref={el => linkRefs.current[0] = el}
          className="flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110 group"
        >
          <FaTelegramPlane className="text-4xl text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300" />
          <span className="text-sm text-yellow-100 font-semibold">Telegram</span>
        </a>
        <a
          href="https://twitter.com/shhhtoshi"
          target="_blank"
          rel="noopener noreferrer"
          ref={el => linkRefs.current[1] = el}
          className="flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110 group"
        >
          <FaXTwitter className="text-4xl text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300" />
          <span className="text-sm text-yellow-100 font-semibold">X</span>
        </a>
        <a
          href="https://linktr.ee/shhhtoshi"
          target="_blank"
          rel="noopener noreferrer"
          ref={el => linkRefs.current[2] = el}
          className="flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110 group"
        >
          <IoIosLink className="text-4xl text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300" />
          <span className="text-sm text-yellow-100 font-semibold">All links</span>
        </a>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 px-6 bg-gray-900 text-white text-center text-sm">
    <p>© {new Date().getFullYear()} ShhhToshi. All rights reserved.</p>
    <p className="mt-2">Terms & Policies</p>
  </footer>
);

export default function App() {
  return (
    <main className="font-sans">
      <HeroSection /> 
      <VideoBackgroundSection />
      <FloatingParticlesSection />
      {/* <FeaturesSection /> */}
      {/* <TokenUtility /> */}
      {/* <TokenUtilitySection /> */}
      {/* <WaveEffect/> */}
      <HowItWorksSection />
      <FAQSection />
      <CommunitySection />
      <Footer />
    </main>
  );
}
