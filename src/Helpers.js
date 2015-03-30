function randomColorPart() {
  return Math.floor(Math.random() * 255);
};

export function randomColor() {
  const COLOR = {
    R: randomColorPart(),
    G: randomColorPart(),
    B: randomColorPart()
  };

  return `rgb(${COLOR.R}, ${COLOR.G}, ${COLOR.B})`;
};