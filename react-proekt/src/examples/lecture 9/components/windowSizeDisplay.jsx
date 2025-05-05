import React from 'react';
import useWindowSize from './useWindowSize';

function WindowSizeDisplay() {
  const [width, height] = useWindowSize();

  return (
    <div>
      <h3>Window Size</h3>
      <p>{width}px wide</p>
      <p>{height}px tall</p>
    </div>
  );
}

export default WindowSizeDisplay;