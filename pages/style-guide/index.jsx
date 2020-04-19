import React from 'react';

// Components
import Box from '../../src/components/Box';
import Page from '../../src/components/Page';
import Text from '../../src/components/Text';

function StyleGuidePage() {
  return (
    <Page title="Style Guide">
      <Box as="section">
        <Text as="h1" variant="h3">
          Typography
        </Text>

        <hr />

        <Text as="h1">01. Headline</Text>
        <Text as="h2">02. Headline</Text>
        <Text as="h3">03. Headline</Text>
        <Text as="h4">04. Headline</Text>
        <Text as="h5">05. Headline</Text>
        <Text as="h6">06. Headline</Text>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          eaque cumque sequi tempore assumenda. Cum incidunt nemo, repellat
          consectetur laudantium quae molestiae, perferendis adipisci temporibus
          error laborum nulla quia sed!
        </Text>
      </Box>
    </Page>
  );
}

export default StyleGuidePage;
