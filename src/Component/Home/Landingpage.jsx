import { useEffect, useRef } from "react";
import "./landing.css";

export default function LandingPage() {
  const vantaRef = useRef(null);

  useEffect(() => {
    // Wait until the global VANTA is available
    const initVanta = () => {
      if (window.VANTA) {
        const VANTA = window.VANTA;
        const THREE = window.THREE;

        const effect = VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 0.5,
          color: 0x88dbda,
          backgroundColor: 0xffffff,
        //   showDots: false,
          points: 7.00,
          maxDistance: 15.00,
          spacing: 15.00
        });

        return effect;
      }
    };

    const effect = initVanta();

    return () => {
      if (effect && typeof effect.destroy === "function") {
        effect.destroy();
      }
    };
  }, []);

  return (
    <div className="landing-page" ref={vantaRef}>
      <img src="images/text.png" alt="Landing Page Image" />
    </div>
  );
}
