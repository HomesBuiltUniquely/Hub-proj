'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

interface MagneticButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  text, 
  onClick, 
  className = '' 
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const initialPositionRef = useRef<{ x: number; y: number } | null>(null);
  
  // Spring values for smooth magnetic movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring configuration for smooth, damped movement
  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  // Update button position on mount and resize
  useEffect(() => {
    const updatePosition = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        initialPositionRef.current = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;

      // Calculate current button center position
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate distance from mouse to button center
      const distanceX = mouseX - centerX;
      const distanceY = mouseY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      // Magnetic effect within 100px proximity
      const proximity = 100;
      if (distance < proximity) {
        // Calculate movement (20% of distance for subtle effect)
        // The spring will handle smooth interpolation automatically
        const strength = 0.2;
        const moveX = distanceX * strength;
        const moveY = distanceY * strength;
        
        x.set(moveX);
        y.set(moveY);
      } else {
        // Return to center when mouse is far (spring handles smooth return)
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  // Text parallax - use a single motion value with calculated offsets
  const words = text.split(' ');
  const textY = useMotionValue(0);
  const textYSpring = useSpring(textY, { damping: 20, stiffness: 300 });

  useEffect(() => {
    if (isHovered) {
      textY.set(-1);
    } else {
      textY.set(0);
    }
  }, [isHovered, textY]);

  return (
    <>
      {/* Magnetic Button */}
      <motion.button
        ref={buttonRef}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          // Reset position when mouse leaves
          x.set(0);
          y.set(0);
        }}
        className={`relative z-50 ${className}`}
        style={{
          x: xSpring,
          y: ySpring,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex flex-row items-center bg-white/60 backdrop-blur-xl border border-white/50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 px-1 py-0.5">
          {/* Left section - Text area */}
          <div className="flex flex-row items-center justify-center px-5 py-1.5 bg-white/95 backdrop-blur-sm rounded-full">
            {/* Horizontal text with parallax effect */}
            <motion.div
              className="flex flex-row items-center gap-1"
              style={{
                x: textYSpring,
              }}
            >
              {words.map((word, wordIndex) => {
                // Calculate parallax offset based on word index and hover state
                const parallaxOffset = isHovered ? wordIndex * -0.5 : 0;
                return (
                  <motion.span
                    key={wordIndex}
                    className="text-black font-bold text-xs uppercase tracking-widest manrope"
                    animate={{
                      y: parallaxOffset,
                    }}
                    transition={{
                      type: "spring",
                      damping: 25,
                      stiffness: 400,
                    }}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </motion.div>
          </div>
          
          {/* Transparent gap area - shows the glassy background through */}
          <div className="w-3 h-6 bg-transparent flex-shrink-0"></div>
          
          {/* Right section - Circular icon */}
          <div className="flex items-center justify-center w-8 h-8 bg-white/95 backdrop-blur-sm rounded-full flex-shrink-0">
            <FaHome className="text-black text-[10px]" />
          </div>
        </div>
      </motion.button>
    </>
  );
};

export default MagneticButton;

