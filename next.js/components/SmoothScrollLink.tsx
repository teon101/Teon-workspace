'use client';

import Link from 'next/link';
import React from 'react';

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function SmoothScrollLink({ href, children, className }: SmoothScrollLinkProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Link href={href} onClick={handleScroll} className={className}>
      {children}
    </Link>
  );
}