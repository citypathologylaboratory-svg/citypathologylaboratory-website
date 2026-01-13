'use client';
import { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
export default function Home() {
  const [rotation, setRotation] = useState(0);
  const animationRef = useRef<number>();

  const services = [
    'PATHOLOGICAL INVESTIGATION',
    'INDUSTRIAL HEALTH CHECK UP',
    'PFT',
    'AUDIOMETRY',
    'ECG',
    'X-RAY',
    'VISION BY TITMUS',
    'OHC SETUP GUIDANCE',
    'MEDICAL STAFF FOR INDUSTRIES'
  ];

  useEffect(() => {
    let lastTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Continuous rotation: 360 degrees in 30 seconds (12 degrees per second)
      setRotation(prev => (prev + (deltaTime / 1000) * 12) % 360);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <main className="min-h-screen">
            <Hero />
{/* Hero section with video background and home collection promotion above */}          
      

<WhyChooseUs />

      {/* Other sections below remain unchanged */}
    </main>
  );
}
