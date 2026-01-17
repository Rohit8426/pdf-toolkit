import React from 'react';
import styled from 'styled-components';
import { FaGavel, FaFileContract, FaBalanceScale, FaExclamationTriangle } from 'react-icons/fa';

const TermsOfService = () => {
  return (
    <TermsContainer>
      <HeroSection>
        <HeroContent>
          <h1>Terms of Service</h1>
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
        </HeroContent>
      </HeroSection>

      <ContentWrapper>
        <IntroSection>
          <p>
            Welcome to <strong>PDFLIKE</strong>. These Terms of Service ("Terms") govern your access to and use of our 
            website, services, and applications (collectively, the "Service"). Please read these Terms carefully.
          </p>
          <WarningBox>
            <FaExclamationTriangle />
            <p>
              <strong>Important:</strong> By accessing or using the Service, you agree to be bound by these Terms. 
              If you do not agree, you may not use the Service.
            </p>
          </WarningBox>
        </IntroSection>

        <TermsSection>
          <SectionTitle>
            <FaGavel />
            <h2>1. Acceptance of Terms</h2>
          </SectionTitle>
          <SectionContent>
            <p>
              By accessing or using the Service, you confirm that you have read, understood, and agree to be bound 
              by these Terms. If you are using the Service on behalf of an organization, you are agreeing to these 
              Terms for that organization.
            </p>
          </SectionContent>
        </TermsSection>

        <TermsSection>
          <SectionTitle>
            <FaFileContract />
            <h2>2. Service Description</h2>
          </SectionTitle>
          <SectionContent>
            <p>
              Our Service provides [brief description of your service]. We reserve the right to modify or 
              discontinue the Service (or any part of it) with or without notice at any time.
            </p>
          </SectionContent>
        </TermsSection>

        <TermsSection>
          <SectionTitle>
            <h2>3. User Responsibilities</h2>
          </SectionTitle>
          <SectionContent>
            <p>When using our Service, you agree not to:</p>
            <ul>
              <li>Violate any laws or regulations</li>
              <li>Infringe on any intellectual property rights</li>
              <li>Upload or transmit viruses or malicious code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Harass, abuse, or harm others</li>
            </ul>
          </SectionContent>
        </TermsSection>

        <TermsSection>
          <SectionTitle>
            <h2>4. Account Terms</h2>
          </SectionTitle>
          <SectionContent>
            <ul>
              <li>You must be at least 13 years old to use our Service</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You are responsible for all activity that occurs under your account</li>
              <li>You must provide accurate and complete information when creating an account</li>
            </ul>
          </SectionContent>
        </TermsSection>

        <TermsSection>
          <SectionTitle>
            <h2>5. Payments and Billing</h2>
          </SectionTitle>
          <SectionContent>
            <p>[Include payment terms if applicable]</p>
            <ul>
              <li>All fees are stated in [currency] and are exclusive of taxes</li>
              <li>Payment obligations are non-cancelable and fees paid are non-refundable</li>
              <li>We may change our fees at any time by posting updated pricing</li>
            </ul>
          </SectionContent>
        </TermsSection>

        <TermsSection>
          <SectionTitle>
            <FaBalanceScale />
            <h2>6. Intellectual Property</h2>
          </SectionTitle>
          <SectionContent>
            <p>
              The Service and its original content, features, and functionality are owned by YourCompanyName 
              and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </SectionContent>
        </TermsSection>

        <TermsSection>
          <h2>7. Termination</h2>
          <SectionContent>
            <p>
              We may terminate or suspend your account and access to the Service immediately, without prior 
              notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
            </p>
          </SectionContent>
        </TermsSection>

        <TermsSection>
          <h2>8. Disclaimers</h2>
          <SectionContent>
            <p>
              THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. 
              YOURCOMPANYNAME DISCLAIMS ALL WARRANTIES INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES 
              OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </SectionContent>
        </TermsSection>

        <TermsSection>
          <h2>9. Limitation of Liability</h2>
          <SectionContent>
            <p>
              IN NO EVENT SHALL YOURCOMPANYNAME BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
              CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
            </p>
          </SectionContent>
        </TermsSection>

        <TermsSection>
          <h2>10. Governing Law</h2>
          <SectionContent>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], 
              without regard to its conflict of law provisions.
            </p>
          </SectionContent>
        </TermsSection>

        <TermsSection>
          <h2>11. Changes to Terms</h2>
          <SectionContent>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of any changes 
              by posting the updated Terms on this page and updating the "Last Updated" date.
            </p>
          </SectionContent>
        </TermsSection>

        <TermsSection>
          <h2>12. Contact Information</h2>
          <SectionContent>
            <p>
              For questions about these Terms, please contact us at:
            </p>
            <ContactInfo>
              <p><strong>Email:</strong> H8Rb3@pdflive.com</p>
              <p><strong>Address:</strong> 457 Privacy Lane, Data City S1 Melburn, UK, LCA 457</p>
            </ContactInfo>
          </SectionContent>
        </TermsSection>
      </ContentWrapper>
    </TermsContainer>
  );
};

// Styled Components
const TermsContainer = styled.div`
  color: #333;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #111827, #374151);
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
    background: url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') center/cover;
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
  margin-bottom: 3rem;

  p {
    font-size: 1.1rem;
    color: #1e293b;
  }
`;

const WarningBox = styled.div`
  background: #fef3c7;
  border-left: 4px solid #d97706;
  padding: 1rem;
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  svg {
    color: #d97706;
    font-size: 1.5rem;
    flex-shrink: 0;
    margin-top: 0.2rem;
  }

  p {
    margin: 0;
    color: #92400e;
  }
`;

const TermsSection = styled.section`
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
  color: #111827;

  h2 {
    font-size: 1.5rem;
    margin: 0;
  }

  svg {
    font-size: 1.3rem;
    color: #4b5563;
  }
`;

const SectionContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  p {
    margin-bottom: 1rem;
    color: #374151;
  }

  ul {
    padding-left: 1.5rem;
    margin: 1rem 0;

    li {
      margin-bottom: 0.75rem;
    }
  }
`;

const ContactInfo = styled.div`
  background: #f9fafb;
  border-radius: 6px;
  padding: 1.5rem;
  margin-top: 1rem;

  p {
    margin: 0.5rem 0;
  }

  strong {
    color: #111827;
  }
`;

export default TermsOfService;