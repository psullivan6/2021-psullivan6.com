import path from 'path';
import csvtojson from 'csvtojson';

// Utilities
import sortBy from '../utilities/sortBy';

function getFilePath(slug, extension = 'csv') {
  return path.join(process.cwd(), 'src/data', `${slug}.${extension}`);
}

export async function get() {
  // [TODO] Alpha sort the types and keep object structure
  const data = await csvtojson().fromFile(getFilePath('tech'));

  const types = [...new Set([...data.map((item) => item.type)])];
  const colors = types.reduce((obj, item, index, arr) => {
    return {
      ...obj,
      [item]: `hsl(${Math.floor((index / arr.length) * 360)}, 100%, 30%)`,
    };
  }, {});

  return {
    data: sortBy(data, 'name'),
    types,
    colors,
  };
}
