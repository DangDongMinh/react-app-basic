import React, { useState } from 'react';
import './ColorBox.css';

function getRandomColor() {
  const COLOR_LIST = ['yellow', 'brown', 'green', 'blue', 'black'];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box_color') || 'deeppink';
    return initColor;
  });

  function handleBoxClick() {
    const newColor = getRandomColor()
    setColor(newColor);

    localStorage.setItem('box_color', newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      COLOR BOX
    </div>
  );
}

export default ColorBox;