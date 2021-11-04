import React from 'react';

// Components
import Page from '../../src/components/Page';
import Text from '../../src/components/Text';

function UsesPage() {
  return (
    <Page title="Uses">
      <Text as="h1">Uses Content Here</Text>

      <section>
        <h1>Development</h1>
      </section>

      <section>
        <h1>Apps</h1>
      </section>

      <section>
        <h1>Physical</h1>
      </section>
    </Page>
  );
}

export default UsesPage;
