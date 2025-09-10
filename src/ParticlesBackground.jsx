import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (engine) => {
    // this works with 2.12.0
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: "#5fc7a1" },
          links: {
            enable: true,
            color: "#5fc7a1",
            distance: 180,
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 0.7 },
          size: { value: 3 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
      }}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
