'use client';

import React from 'react';

interface ScrollButtonProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ targetId, children, className }) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={scrollToSection} className={className}>
      {children}
    </button>
  );
};

export default ScrollButton;