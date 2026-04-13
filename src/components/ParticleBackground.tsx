import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

const ParticleBackground: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          style={{ position: 'fixed', inset: 0, zIndex: 0 }}
          options={{
            background: { color: { value: '#0a0a0a' } },
            particles: {
              color: { value: '#00ff99' },
              links: { enable: true, color: '#00ff99', distance: 180, opacity: 0.3, width: 2 },
              move: { enable: true, speed: 0.3 },
              number: { value: 40, density: { enable: true } },
              opacity: { value: 0.5 },
              shape: { type: 'circle' },
              size: { value: { min: 2, max: 4 } },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};

export default ParticleBackground;