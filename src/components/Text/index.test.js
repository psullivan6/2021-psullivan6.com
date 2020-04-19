import React from 'react';
import { render } from '@testing-library/react';

import Text, { variants } from './index';

// [TODO] Group this into "Typography" tests

const getTagName = container => container.firstChild.tagName.toLowerCase();

test('default tag - default styles', () => {
  const { container } = render(<Text>p tag with no props</Text>);

  expect(getTagName(container)).toBe('p');
  expect(container.firstChild).toHaveStyle(variants.p);
});

test('h1 tag - default styles', () => {
  const { container } = render(<Text as="h1">h1 tag - default styles</Text>);

  expect(getTagName(container)).toBe('h1');
});

test('default tag - h3 styles', () => {
  const { container } = render(
    <Text variant="h3">default tag - h3 styles</Text>
  );

  expect(getTagName(container)).toBe('p');
  expect(container.firstChild).toHaveStyle(variants.h3);
});

test('h1 tag - h3 styles', () => {
  const { container } = render(
    <Text as="h1" variant="h3">
      h1 tag - h3 styles
    </Text>
  );

  expect(getTagName(container)).toBe('h1');
  expect(container.firstChild).toHaveStyle(variants.h3);
});

test('small tag - small styles', () => {
  const { container } = render(
    <Text as="small" variant="small">
      small tag - small styles
    </Text>
  );

  expect(getTagName(container)).toBe('small');
  expect(container.firstChild).toHaveStyle(variants.small);
});
