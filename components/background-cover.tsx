"use client";

import Particles from "@/blocks/Backgrounds/Particles/Particles";

const BackgroundCover = () => {
  return (
    <Particles
      particleColors={["#ffffff", "#ffffff"]}
      particleCount={300}
      particleSpread={5}
      speed={0.05}
      particleBaseSize={100}
      moveParticlesOnHover={false}
      alphaParticles={false}
      disableRotation={false}
    />
  );
};

export default BackgroundCover;
