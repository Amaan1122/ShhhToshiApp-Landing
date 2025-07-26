import React from 'react';
import movingLogo from '../assets/moving-logo.mp4';

const VideoBackgroundSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={movingLogo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* About ShhhToshi Content Overlay */}
      <div className="relative z-20 flex items-center justify-center h-full text-white text-center px-4">
        <div className="max-w-2xl bg-black/60 rounded-xl p-8 shadow-[0_0_25px_rgba(255,221,0,0.4)]">
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-yellow-200">About ShhhToshi</p>
          <p className="text-lg md:text-xl text-white/80">
            ShhhToshi is a stealthy memecoin built on the TON blockchain, blending humor, community spirit, and crypto culture. Inspired by the mystery of Satoshi Nakamoto and the viral power of memes, ShhhToshi thrives on organic growth, surprise giveaways, and active Telegram engagement. With a growing army of loyal holders and interactive bots, ShhhToshi is not just a token — it's a movement that rewards the loudest whispers in Web3.
          </p>
        </div>
      </div>

      {/* Gradient Overlay at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-15" />
    </section>
  );
};

export default VideoBackgroundSection;
