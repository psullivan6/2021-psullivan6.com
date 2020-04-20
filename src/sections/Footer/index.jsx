import React from 'react';

// Components
import ContentContainer from '../../components/ContentContainer';
import Text from '../../components/Text';
import GitHubLogo from './components/GitHubLogo';
import LInkedInLogo from './components/LInkedInLogo';
import TwitterLogo from './components/TwitterLogo';

// Styles
import {
  FooterContainer,
  FooterList,
  FooterListItem,
  FooterLinks,
  FooterLink,
} from './styles';

function Footer() {
  return (
    <FooterContainer>
      <ContentContainer>
        <FooterLinks>
          <Text fontSize="0.75em" marginRight={3}>
            &copy; 2020 Patrick Sullivan. All Rights Reserved.
          </Text>
          <FooterList>
            <FooterListItem>
              <FooterLink href="https://github.com/psullivan6" target="_blank">
                <GitHubLogo width="1em" height="1em" />
              </FooterLink>
            </FooterListItem>

            <FooterListItem>
              <FooterLink
                href="https://www.linkedin.com/in/psullivan6/"
                target="_blank"
              >
                <LInkedInLogo width="1em" height="1em" />
              </FooterLink>
            </FooterListItem>

            <FooterListItem>
              <FooterLink href="https://twitter.com/psullivan6" target="_blank">
                <TwitterLogo width="1em" height="1em" />
              </FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterLinks>
      </ContentContainer>
    </FooterContainer>
  );
}

export default Footer;
