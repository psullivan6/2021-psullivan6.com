import React from 'react';
import Link from 'next/link';

// Components
import ContentContainer from '../../components/ContentContainer';
import Text from '../../components/Text';
import GitHubLogo from './components/GitHubLogo';
import LInkedInLogo from './components/LInkedInLogo';
import TwitterLogo from './components/TwitterLogo';

// Styles
import { FooterContainer, FooterLinks, FooterLink } from './styles';

function Footer() {
  return (
    <FooterContainer>
      <ContentContainer>
        <FooterLinks>
          <Text fontSize="0.75em">
            &copy; 2020 Patrick Sullivan. All Rights Reserved.
          </Text>
          <ul>
            <li>
              <FooterLink href="https://github.com/psullivan6" target="_blank">
                <GitHubLogo width="1em" height="1em" />
              </FooterLink>
            </li>

            <li>
              <FooterLink
                href="https://www.linkedin.com/in/psullivan6/"
                target="_blank"
              >
                <LInkedInLogo width="1em" height="1em" />
              </FooterLink>
            </li>

            <li>
              <FooterLink href="https://twitter.com/psullivan6" target="_blank">
                <TwitterLogo width="1em" height="1em" />
              </FooterLink>
            </li>
          </ul>
        </FooterLinks>
      </ContentContainer>
    </FooterContainer>
  );
}

export default Footer;
