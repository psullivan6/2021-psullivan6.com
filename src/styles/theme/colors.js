const grays = Array(24)
  .fill('')
  .map((_, index, arr) => {
    return `hsl(0, 0%, ${(100 / arr.length) * index}%)`;
  });

export const colorDefaults = {
  grays,
};

export const colorSchemes = {
  light: {
    background: '#fff',
    primary: '#039',
    primaryText: '#fff',
    accent: '#3fc',
    highlight: 'hsl(210, 18%, 90%)',
    highlightText: '#333',
    text: '#333',
  },
  dark: {
    background: '#000',
    primary: 'hsl(0, 0%, 15%)',
    primaryText: '#cc9',
    accent: '#36f',
    highlight: '#ccc',
    highlightText: '#333',
    text: grays[22],
  },
  paper: {
    background: '#f7eed2',
    primary: '#000',
    primaryText: '#fff',
    accent: '#f7eed2',
    highlight: '#000',
    highlightText: '#f7eed2',
    text: '#000',
  },
  party: {
    background: '#9fc',
    primary: '#30f',
    primaryText: '#ff9',
    accent: '#ff0',
    highlight: '#f0f',
    highlightText: '#fff',
    text: '#60c',
  },
};
