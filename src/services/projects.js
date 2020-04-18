import path from 'path';
import csvtojson from 'csvtojson';

function getFilePath(slug, extension = 'csv') {
  return path.join(process.cwd(), 'src/data', `${slug}.${extension}`);
}

export async function get() {
  const data = await csvtojson().fromFile(getFilePath('projects'));

  return data.map((project) => ({
    ...project,
    featured: project.featured === 'TRUE' ? true : false,
    'tech-stack':
      project['tech-stack'].length > 1
        ? project['tech-stack'].split('\n')
        : project['tech-stack'],
  }));
}
