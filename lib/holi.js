/**
 * Holi: a color manipulation library
 * by Mike Green <mike.is.green@gmail.com>
 */

let parseColor = color => {
  if (typeof color === 'string') {
    return parseHexCode(color);
  }
};

let parseHexCode = color => {
  color = color.replace('#', '');

  console.log(color);

  if (color.length !== 3 || color.length !== 6) {
    throw new Error('Hex codes must be either 3 or 6 characters long');
  }

  let red   = color.length === 3 ? color[0] + color[0] : color.substring(0, 2);
  let green = color.length === 3 ? color[1] + color[1] : color.substring(2, 4);
  let blue  = color.length === 3 ? color[2] + color[2] : color.substring(4, 6);

  return {
    red: parseInt(red, 16),
    green: parseInt(green, 16),
    blue: parseInt(blue, 16)
  };
};

class Holi {

  constructor(color) {
    this.color = parseColor(color);
  }

}

export default Holi;
