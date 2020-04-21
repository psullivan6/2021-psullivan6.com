import fs from 'fs';
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
    tech:
      project.tech.length > 1 ? project.tech.split('\n').sort() : project.tech,
    links:
      project.links.length > 1
        ? project.links.split('\n').map((link) => link.split(' | '))
        : project.links,
  }));
}

export async function getProjectImages(slug) {
  const data = await csvtojson().fromFile(getFilePath('images'));

  const directoryPath = path.join(
    process.cwd(),
    'public/images/projects',
    slug
  );

  let publicImages;
  try {
    publicImages = fs.readdirSync(directoryPath);
  } catch (error) {
    publicImages = [];
  }

  const cmsImages = data
    .filter((item) => item.project === slug)
    .map((image) => ({
      ...image,
      src: `/images/projects/${slug}/${image.src}`,
    }));

  if (publicImages.length !== cmsImages.length) {
    console.warn(
      'ERROR: The images are out of sync, check the Google Sheet and/or public/ directory\n\n publicImages.length, cmsImages.length',
      publicImages.length,
      cmsImages.length
    );
  }

  return cmsImages;
}
