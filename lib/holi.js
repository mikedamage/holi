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

  if (!(color.length === 3 || color.length === 6 || color.length === 8)) {
    throw new Error('Hex codes must be either 3, 6 or 8 characters long');
  }

  let red   = color.length === 3 ? color[0] + color[0] : color.substring(0, 2);
  let green = color.length === 3 ? color[1] + color[1] : color.substring(2, 4);
  let blue  = color.length === 3 ? color[2] + color[2] : color.substring(4, 6);
  let alpha = color.length < 8 ? 'ff' : color.substring(6, 8);

  return {
    red: parseInt(red, 16),
    green: parseInt(green, 16),
    blue: parseInt(blue, 16),
    alpha: parseInt(alpha, 16)
  };
};

let mapObject = (object, callback) => {
  for (let key in object) {
    object[key] = callback.call(object, object[key]);
  }
  return object;
};

let includes = (array, value) => {
  if (array.length < 1) return false;

  for (let idx in array) {
    if (array[idx] === value) return true;
  }

  return false;
}

let joinObject = (object, ignoreKeys = []) => {
  let string = '';

  for (let key in object) {
    if (includes(ignoreKeys, key)) continue;
    string += object[key];
  }

  return string;
}

class Holi {

  constructor(color) {
    this.color = parseColor(color);
  }

  toHexCode(withAlpha = false) {
    let strings = mapObject(this.color, value => {
      return value.toString(16);
    });

    return joinObject(strings, withAlpha ? [] : [ 'alpha' ]);
  }

}

export default Holi;
