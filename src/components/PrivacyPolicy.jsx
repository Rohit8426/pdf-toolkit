import React from 'react';
import styled from 'styled-components';
import { FaLock, FaShieldAlt, FaUserShield } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <PrivacyContainer>
      <HeroSection>
        <HeroContent>
          <h1>Privacy Policy</h1>
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
        </HeroContent>
      </HeroSection>

      <ContentWrapper>
        <IntroSection>
          <p>
            At <strong>PDFLIKE</strong>, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you use our services.
          </p>
        </IntroSection>

        <PolicySection>
          <SectionTitle>
            <FaLock />
            <h2>Information We Collect</h2>
          </SectionTitle>
          <SectionContent>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, and other contact details when 
                you register or communicate with us.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with our services, including IP addresses, 
                browser type, pages visited, and time spent on pages.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance your experience and analyze 
                service usage.
              </li>
              <li>
                <strong>Device Information:</strong> Device type, operating system, and unique device identifiers.
              </li>
            </ul>
          </SectionContent>
        </PolicySection>

        <PolicySection>
          <SectionTitle>
            <FaShieldAlt />
            <h2>How We Use Your Information</h2>
          </SectionTitle>
          <SectionContent>
            <p>We use the collected information for various purposes:</p>
            <ul>
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent, and address technical issues</li>
            </ul>
          </SectionContent>
        </PolicySection>

        <PolicySection>
          <SectionTitle>
            <FaUserShield />
            <h2>Data Sharing and Disclosure</h2>
          </SectionTitle>
          <SectionContent>
            <p>We may share your information in the following situations:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> With third-party vendors who perform services on our behalf.
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with any merger or sale of company assets.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to respond to legal process.
              </li>
              <li>
                <strong>Protection of Rights:</strong> To protect the rights and property of our company and others.
              </li>
            </ul>
          </SectionContent>
        </PolicySection>

        <PolicySection>
          <h2>Data Security</h2>
          <SectionContent>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data. 
              However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </SectionContent>
        </PolicySection>

        <PolicySection>
          <h2>Your Data Protection Rights</h2>
          <SectionContent>
            <p>Depending on your location, you may have the following rights:</p>
            <RightsGrid>
              <RightCard>
                <h3>Access</h3>
                <p>Request copies of your personal data</p>
              </RightCard>
              <RightCard>
                <h3>Rectification</h3>
                <p>Request correction of inaccurate data</p>
              </RightCard>
              <RightCard>
                <h3>Erasure</h3>
                <p>Request deletion of your personal data</p>
              </RightCard>
              <RightCard>
                <h3>Restriction</h3>
                <p>Request restriction of processing</p>
              </RightCard>
              <RightCard>
                <h3>Objection</h3>
                <p>Object to our processing of your data</p>
              </RightCard>
              <RightCard>
                <h3>Portability</h3>
                <p>Request transfer of your data</p>
              </RightCard>
            </RightsGrid>
            <p>
              To exercise these rights, please contact us using the information below.
            </p>
          </SectionContent>
        </PolicySection>

        <PolicySection>
          <h2>Children's Privacy</h2>
          <SectionContent>
            <p>
              Our services are not directed to children under 13. We do not knowingly collect personal 
              information from children under 13. If we discover such data, we will delete it immediately.
            </p>
          </SectionContent>
        </PolicySection>

        <PolicySection>
          <h2>Changes to This Policy</h2>
          <SectionContent>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by 
              posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </SectionContent>
        </PolicySection>

        <ContactSection>
          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <ContactInfo>
            <p><strong>Email:</strong> H8Rb3@pdflive.com</p>
            <p><strong>Address:</strong> 457 Privacy Lane, Data City S1 Melburn, UK, LCA 457</p>
          </ContactInfo>
        </ContactSection>
      </ContentWrapper>
    </PrivacyContainer>
  );
};

// Styled Components
const PrivacyContainer = styled.div`
  color: #333;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') center/cover;
    opacity: 0.1;
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 800;
  }

  p {
    font-size: 1.25rem;
    opacity: 0.9;
  }
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const IntroSection = styled.div`
  background: #f8fafc;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 3rem;
  border-left: 4px solid #3b82f6;

  p {
    font-size: 1.1rem;
    color: #1e293b;
  }
`;

const PolicySection = styled.section`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: #1e3a8a;

  h2 {
    font-size: 1.75rem;
    margin: 0;
  }

  svg {
    font-size: 1.5rem;
    color: #3b82f6;
  }
`;

const SectionContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  p {
    margin-bottom: 1rem;
    color: #334155;
  }

  ul {
    padding-left: 1.5rem;
    margin: 1rem 0;

    li {
      margin-bottom: 0.75rem;
    }
  }
`;

const RightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const RightCard = styled.div`
  background: #f8fafc;
  border-radius: 8px;
  padding: 1.5rem;
  border-left: 3px solid #3b82f6;

  h3 {
    color: #1e3a8a;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    color: #64748b;
    font-size: 0.9rem;
  }
`;

const ContactSection = styled.div`
  background: #f8fafc;
  border-radius: 8px;
  padding: 2rem;
  margin-top: 3rem;

  h2 {
    color: #1e3a8a;
    margin-top: 0;
  }
`;

const ContactInfo = styled.div`
  background: white;
  border-radius: 6px;
  padding: 1.5rem;
  margin-top: 1rem;

  p {
    margin: 0.5rem 0;
  }

  strong {
    color: #1e3a8a;
  }
`;

export default PrivacyPolicy;