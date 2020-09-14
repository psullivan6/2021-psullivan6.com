import React from 'react';

// Components
import Page from '../../src/components/Page';
import Text from '../../src/components/Text';

function BlankPage(props) {
  return (
    <Page title="About">
      <Text as="h1" variant="h2">
        Blank Page
      </Text>

      <pre>{JSON.stringify(props, null, 2)}</pre>
    </Page>
  );
}

export default BlankPage;
