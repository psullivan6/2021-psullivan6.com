import React, { useState } from 'react';

// Utilities
import useEventListener from '../../../../utilities/useEventListener';

// Components
import Box from '../../../Box';

// Styles
import { Curve } from './styles';

function CurveBox({ navContainerRef, ...props }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  try {
    useEventListener('scroll', handleScroll);
  } catch (error) {
    // window isn't defined yet due to SSR
  }

  // Default to anything greater than 0 so the math works below
  const unitlessHeaderHeight = navContainerRef?.current?.offsetHeight || 1;

  let lastScrollPosition = 0;
  let ticking = false;

  const curveStart = -6;
  const curveEnd = 6;
  const curveYOffset =
    scrollPosition >= unitlessHeaderHeight
      ? curveEnd
      : (scrollPosition / unitlessHeaderHeight) * (curveEnd - curveStart) +
        curveStart;

  const svgYOffset = 0;

  function handleScroll(e) {
    if (typeof window === 'undefined') {
      return;
    }

    lastScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        setScrollPosition(lastScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  }

  return (
    <Box as="section" zIndex={2} {...props}>
      <Curve
        as="svg"
        display="block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 7">
        <path d={`m 0 ${svgYOffset} V 3 q 50 ${curveYOffset} 100 0 V 0 H 0`} />
      </Curve>
    </Box>
  );
}

export default CurveBox;
