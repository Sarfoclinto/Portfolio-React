import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import useOptions from "./options";

const Background = () => {
  const [init, setInit] = useState(false);
  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options = useOptions();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;
  return (
    <Particles
      particlesLoaded={particlesLoaded}
      options={options}
      className="debug w-full min-h-dvh fixed -z-50"
    />
  );
};
export default Background;
