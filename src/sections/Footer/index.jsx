import React from 'react';
import Link from 'next/link';

// Components
import ContentContainer from '../../components/ContentContainer';
import GitHubLogo from './components/GitHubLogo';
import LInkedInLogo from './components/LInkedInLogo';
import TwitterLogo from './components/TwitterLogo';

// Styles
import { FooterContainer, FooterLinks } from './styles';

function Footer() {
  return (
    <FooterContainer>
      <ContentContainer as="footer">
        <FooterLinks>
          <p>Copyright line</p>
          <ul>
            <li>
              <a href="https://github.com/psullivan6" target="_blank">
                <GitHubLogo width="1em" height="1em" />
              </a>
            </li>

            <li>
              <a href="https://twitter.com/psullivan6" target="_blank">
                <TwitterLogo width="1em" height="1em" />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/psullivan6/" target="_blank">
                <LInkedInLogo width="1em" height="1em" />
              </a>
            </li>
          </ul>
        </FooterLinks>
      </ContentContainer>
    </FooterContainer>
  );
}

export default Footer;
