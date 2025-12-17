import React, { useState, useEffect, useRef } from 'react';
import { Phone, ArrowRight, CheckCircle, Users, Target, Zap } from 'lucide-react';

export default function CTAConsultation() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };


  return (
    <div 
      ref={sectionRef}
      className="
      relative h-130 flex items-center justify-center overflow-hidden
      bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800
      py-70 sm:py-17 md:py-24
    "
  >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop)',
          transform: isVisible ? 'scale(1)' : 'scale(1.1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-900/90 to-blue-800/95"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Phone Icon with Pulse Animation */}
        <div 
          className="inline-flex items-center justify-center mb-8 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-50px) scale(0.5)',
          }}
        >
          <div className="relative">
            <div 
              className="absolute inset-0 bg-orange-500 rounded-full opacity-75"
              style={{
                animation: isVisible ? 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite' : 'none'
              }}
            ></div>
            <div className="relative bg-gradient-to-br from-orange-500 to-red-500 p-5 rounded-full shadow-2xl">
              <Phone 
                className="w-8 h-8 text-white"
                style={{
                  animation: isVisible ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none'
                }}
              />
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 
          className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-200"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) rotateX(0deg)' : 'translateY(30px) rotateX(10deg)',
            fontFamily: "var(--font-Playfair)"
          }}
          
        >
          Call Us Now For A{' '}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Free Consultation!
            </span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-orange-500/30 to-red-500/30 blur-lg"></span>
          </span>
        </h1>

        {/* Description */}
        <p 
          className=" text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-400"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          During the consultation, we will take the time to understand your unique situation and 
          provide you with tailored advice and solutions. Our team of experts will work with you to 
          identify any challenges you may be facing and develop a plan of action to help you 
          overcome them.
        </p>

        {/* CTA Button with Interactive Effect */}
        <div 
          className="transition-all duration-700 delay-900"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)',
          }}
          onMouseMove={handleMouseMove}
        >
          <button 
            className="group relative inline-flex items-center gap-3 px-7 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-full overflow-hidden shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
            style={{
              animation: isVisible ? 'pulseGlow 3s ease-in-out infinite' : 'none'
            }}
          >
            {/* Animated Background */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent)`
              }}
            ></div>
            
            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-3">
              GET STARTED
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>

            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
          </button>
       </div>
    </div>

    </div>
  );
}