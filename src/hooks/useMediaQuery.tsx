import { useState, useEffect } from 'react';

// Tailwind's default breakpoints
const BREAKPOINTS = {
  sm: 460,   // @media (min-width: 640px)
  md: 768,   // @media (min-width: 768px)
  lg: 1280,  // @media (min-width: 1024px)
  xl: 1440,  // @media (min-width: 1280px)
};

type BreakpointKey = keyof typeof BREAKPOINTS;

export const useMediaQuery = (breakpoint: BreakpointKey | number) => {
  // Convert breakpoint to actual pixel value if it's a key
  const breakpointValue = typeof breakpoint === 'number' 
    ? breakpoint 
    : BREAKPOINTS[breakpoint];

  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Create media query
    const query = `(max-width: ${breakpointValue}px)`;
    const mediaQuery = window.matchMedia(query);

    // Update state initially and on change
    setMatches(mediaQuery.matches);

    // Handler for media query changes
    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // Add event listener
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup listener
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [breakpointValue]);

  return matches;
};
