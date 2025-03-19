import Particles from "@/blocks/Backgrounds/Particles/Particles";

const BackgroundAnimation = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 pointer-events-none z-0">
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
    </div>
  );
};

export default BackgroundAnimation;
