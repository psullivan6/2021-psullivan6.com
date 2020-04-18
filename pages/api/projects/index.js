import projects from '../../../src/data/projects';

export default (req, res) => {
  res.status(200).json(projects);
};
