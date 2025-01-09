import React, { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi2';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-gradient-to-r from-orange-400 to-pink-500
        text-white shadow-lg
        flex items-center justify-center
        transform transition-all duration-300 ease-in-out
        hover:scale-110 hover:shadow-pink-500/25
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
      aria-label="Scroll to top"
    >
      <HiArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;
