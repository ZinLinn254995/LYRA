import React from 'react';

interface LyraLogoProps {
  className?: string;
  size?: number;
}

export const LyraLogo: React.FC<LyraLogoProps> = ({ className = 'text-amber-500', size = 26 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer elegant lyre acoustic curve */}
      <path
        d="M8 7C8 14.5 10.5 22 16 26C21.5 22 24 14.5 24 7"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Top crossbar */}
      <path
        d="M6 7H26"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
      {/* Three central harmonic strings representing 1, 2, 3 notation lines */}
      <path
        d="M12 9V22"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M16 9V24.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 9V22"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Harmonic point at the base */}
      <circle cx="16" cy="27" r="1.5" fill="currentColor" />
    </svg>
  );
};
