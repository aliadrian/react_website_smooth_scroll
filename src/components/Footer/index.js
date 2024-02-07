import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to="/">How it works</FooterLink>
                  <FooterLink to="/">Testimonials</FooterLink>
                  <FooterLink to="/">Careers</FooterLink>
                  <FooterLink to="/">Investors</FooterLink>
                  <FooterLink to="/">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                  <FooterLink to="/">How it works</FooterLink>
                  <FooterLink to="/">Testimonials</FooterLink>
                  <FooterLink to="/">Careers</FooterLink>
                  <FooterLink to="/">Investors</FooterLink>
                  <FooterLink to="/">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                  <FooterLink to="/">How it works</FooterLink>
                  <FooterLink to="/">Testimonials</FooterLink>
                  <FooterLink to="/">Careers</FooterLink>
                  <FooterLink to="/">Investors</FooterLink>
                  <FooterLink to="/">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                  <FooterLink to="/">How it works</FooterLink>
                  <FooterLink to="/">Testimonials</FooterLink>
                  <FooterLink to="/">Careers</FooterLink>
                  <FooterLink to="/">Investors</FooterLink>
                  <FooterLink to="/">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                app
              </SocialLogo>
              <WebsiteRights>app © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="https://github.com/aliadrian" target="_blank" aria-label="Github"><FaGithub /></SocialIconLink>
                <SocialIconLink href="https://www.linkedin.com/in/ali-nasrat-5b04671aa/" target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer
