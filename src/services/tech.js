import fs from 'fs';
import path from 'path';
import csvtojson from 'csvtojson';

function getFilePath(slug, extension = 'csv') {
  return path.join(process.cwd(), 'src/data', `${slug}.${extension}`);
}

function getColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export async function get() {
  // [TODO] Alpha sort the types and keep object structure
  const data = await csvtojson().fromFile(getFilePath('tech'));

  const types = data.map((item) => item.type);
  const colors = [...new Set([...types])].reduce((obj, item, index, arr) => {
    return {
      ...obj,
      [item]: `hsl(${Math.floor((index / arr.length) * 360)}, 100%, 40%)`,
    };
  }, {});

  return {
    data,
    colors,
  };
}
