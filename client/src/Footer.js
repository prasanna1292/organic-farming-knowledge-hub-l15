import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const FooterContainer = styled.footer`
  background: #2f5c39;
  color: white;
  padding: 20px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const FooterSection = styled.div`
  margin-bottom: 20px;
`;

const FooterTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin-bottom: 16px;
`;

const FooterDescription = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  margin-bottom: 16px;
`;

const FooterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterInput = styled.input`
  padding: 10px;
  border-radius: 9999px;
  border: none;
  font-family: 'Lato', sans-serif;
`;

const FooterButton = styled.button`
  padding: 10px 20px;
  background: #7cb342;
  color: white;
  border: none;
  border-radius: 9999px;
  font-family: 'Lato', sans-serif;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #8bc34a;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 8px;
`;

const FooterLinkItem = styled.a`
  font-family: 'Lato', sans-serif;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #a5d6a7;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #4c8055;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterSocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const FooterSocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #a5d6a7;
  }
`;

// Footer Component
const Footer = ({
  newsletterTitle = "Stay Connected",
  newsletterDescription = "Subscribe to our newsletter for organic farming tips and community updates.",
  columns = [
    {
      title: "Quick Links",
      links: [
        { text: "Home", href: "#" },
        { text: "About Us", href: "#" },
        { text: "Expert Corner", href: "#" },
        { text: "Success Stories", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Farming Guides", href: "#" },
        { text: "Community Forum", href: "#" },
        { text: "Events Calendar", href: "#" },
        { text: "Knowledge Base", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "Contact Us", href: "#" },
        { text: "FAQs", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Terms of Service", href: "#" },
      ],
    },
  ],
  socialLinks = [
    { icon: "fab fa-facebook", href: "#", label: "Facebook" },
    { icon: "fab fa-twitter", href: "#", label: "Twitter" },
    { icon: "fab fa-instagram", href: "#", label: "Instagram" },
    { icon: "fab fa-youtube", href: "#", label: "YouTube" },
  ],
}) => {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribeStatus("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <div className="flex items-center mb-6">
              <i className="fas fa-leaf text-3xl mr-2"></i>
              <span className="font-playfair text-2xl">
                Organic Farming Hub
              </span>
            </div>
            <FooterTitle>{newsletterTitle}</FooterTitle>
            <FooterDescription>{newsletterDescription}</FooterDescription>
            <FooterForm onSubmit={handleSubmit}>
              <FooterInput
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <FooterButton type="submit">Subscribe</FooterButton>
              {subscribeStatus && (
                <p className="mt-2 font-lato text-[#A5D6A7]">
                  {subscribeStatus}
                </p>
              )}
            </FooterForm>
          </FooterSection>

          {columns.map((column, index) => (
            <FooterSection key={index}>
              <FooterTitle>{column.title}</FooterTitle>
              <FooterLinks>
                {column.links.map((link, linkIndex) => (
                  <FooterLink key={linkIndex}>
                    <FooterLinkItem href={link.href}>
                      {link.text}
                    </FooterLinkItem>
                  </FooterLink>
                ))}
              </FooterLinks>
            </FooterSection>
          ))}
        </FooterGrid>

        <FooterBottom>
          <div className="font-lato text-sm">
            © 2025 Organic Farming Hub. All rights reserved.
          </div>
          <FooterSocialLinks>
            {socialLinks.map((social, index) => (
              <FooterSocialLink
                key={index}
                href={social.href}
                aria-label={social.label}
              >
                <i className={social.icon}></i>
              </FooterSocialLink>
            ))}
          </FooterSocialLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;