import Link from 'next/link';

// Components
import Box from '../Box';
import Text from '../Text';

// Styles
import { LinkBox, ListItem } from './styles';

const ProjectListItem = ({ excerpt, slug, title }) => (
  <ListItem as="li" key={slug} mb={6}>
    <Link href={`/projects/${slug}`}>
      <LinkBox as="a" display="block">
        <Text as="b" fontWeight={600} m={0}>
          {title}
        </Text>

        {excerpt && (
          <Text as="p" m={0} fontSize={1}>
            {excerpt}
          </Text>
        )}
      </LinkBox>
    </Link>
  </ListItem>
);

export default ProjectListItem;
