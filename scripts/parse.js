const fs = require('fs');
const path = require('path');
const csvtojson = require('csvtojson');

function getFilePath(slug, extension = 'csv') {
  return path.join(__dirname, '../src/data', `${slug}.${extension}`);
}

async function parse(slug) {
  const data = await csvtojson().fromFile(getFilePath(slug));

  return data.map((project) => ({
    ...project,
    featured: project.featured === 'TRUE' ? true : false,
    'tech-stack':
      project['tech-stack'].length > 1
        ? project['tech-stack'].split('\n')
        : project['tech-stack'],
  }));
}

async function writeFiles() {
  const fileData = `export default ${JSON.stringify(
    await parse('projects'),
    null,
    2
  )}`;
  fs.writeFileSync(getFilePath('projects', 'js'), fileData);
  fs.writeFileSync(
    getFilePath('projects', 'json'),
    JSON.stringify(await parse('projects'))
  );
}

writeFiles();
