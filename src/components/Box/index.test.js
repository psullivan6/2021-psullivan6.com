import React from 'react';
import { render } from '@testing-library/react';

// Components
import Box from './index';
import Link from '../Link';

// [TODO] Group this into "Typography" tests

const getTagName = container => container.firstChild.tagName.toLowerCase();

test('default tag - basic styles', () => {
  const { container } = render(
    <Box backgroundColor="red">Box with background color</Box>
  );

  expect(getTagName(container)).toBe('div');
  expect(container.firstChild).toHaveStyle({ backgroundColor: 'red' });
});

test('section tag - several styles', () => {
  const boxStyles = {
    backgroundColor: '#333',
    padding: 40, // [TODO] Check this against theme values
    margin: 30,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  const { container } = render(
    <Box as="section" {...boxStyles}>
      Box with several styles
    </Box>
  );

  expect(getTagName(container)).toBe('section');
  expect(container.firstChild).toHaveStyle(boxStyles);
});

test('a tag - several styles', () => {
  const boxStyles = {
    backgroundColor: '#333',
    padding: 40, // [TODO] Check this against theme values
    margin: 30,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  const { container } = render(
    <Box as={Link} {...boxStyles}>
      Box with several styles
    </Box>
  );

  expect(getTagName(container)).toBe('a');
  expect(container.firstChild).toHaveStyle(boxStyles);
});
