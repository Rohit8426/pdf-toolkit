import React from 'react';
import styled from 'styled-components';
import { FaShieldAlt, FaLock, FaServer, FaUserShield, FaCode, FaEyeSlash } from 'react-icons/fa';
import { SiHackerone, SiOwasp } from 'react-icons/si';

const Security = () => {
  return (
    <SecurityContainer>
      <HeroSection>
        <HeroContent>
          <h1>Security First</h1>
          <p>Protecting your data is our top priority</p>
        </HeroContent>
      </HeroSection>

      <ContentWrapper>
        <IntroSection>
          <p>
            At <strong>PDFLIKE</strong>, we implement industry-leading security measures to safeguard 
            your information. Our security program is designed to meet the highest standards of data protection.
          </p>
        </IntroSection>

        <SecurityFeatures>
          <FeatureCard>
            <FeatureIcon>
              <FaShieldAlt />
            </FeatureIcon>
            <h3>Data Encryption</h3>
            <p>
              All data is encrypted in transit with TLS 1.2+ and at rest using AES-256 encryption. 
              We implement perfect forward secrecy to maximize protection.
            </p>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <FaLock />
            </FeatureIcon>
            <h3>Authentication</h3>
            <p>
              Multi-factor authentication (MFA) enforcement for all employees. 
              Password policies require complexity and regular rotation.
            </p>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <FaServer />
            </FeatureIcon>
            <h3>Infrastructure</h3>
            <p>
              Enterprise-grade cloud infrastructure with regular patching. 
              Isolated network environments and strict access controls.
            </p>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <FaUserShield />
            </FeatureIcon>
            <h3>Access Control</h3>
            <p>
              Role-based access control (RBAC) with principle of least privilege. 
              All access is logged and monitored for anomalies.
            </p>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <FaCode />
            </FeatureIcon>
            <h3>Secure Development</h3>
            <p>
              Security-focused SDLC with mandatory code reviews. 
              Static and dynamic application security testing (SAST/DAST).
            </p>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <FaEyeSlash />
            </FeatureIcon>
            <h3>Privacy Protection</h3>
            <p>
              Data minimization principles. Strict controls on PII with regular audits. 
              Compliance with global privacy regulations.
            </p>
          </FeatureCard>
        </SecurityFeatures>

        <ComplianceSection>
          <h2>Compliance & Certifications</h2>
          <ComplianceGrid>
            <ComplianceCard>
              <h3>ISO 27001</h3>
              <p>Certified information security management system</p>
            </ComplianceCard>
            <ComplianceCard>
              <h3>SOC 2 Type II</h3>
              <p>Audited security controls and processes</p>
            </ComplianceCard>
            <ComplianceCard>
              <h3>GDPR</h3>
              <p>Compliant with EU data protection regulations</p>
            </ComplianceCard>
            <ComplianceCard>
              <h3>CCPA</h3>
              <p>Compliant with California consumer privacy act</p>
            </ComplianceCard>
          </ComplianceGrid>
        </ComplianceSection>

        <SecurityPractices>
          <h2>Our Security Practices</h2>
          <PracticeList>
            <PracticeItem>
              <h3>Vulnerability Management</h3>
              <p>
                Regular vulnerability scanning and penetration testing conducted by internal teams 
                and third-party security firms. We partner with <SiHackerone /> HackerOne for 
                our bug bounty program.
              </p>
            </PracticeItem>
            <PracticeItem>
              <h3>Incident Response</h3>
              <p>
                Formal incident response plan with defined roles and responsibilities. 
                24/7 security operations center monitoring for potential threats.
              </p>
            </PracticeItem>
            <PracticeItem>
              <h3>Security Training</h3>
              <p>
                Mandatory security awareness training for all employees. 
                Phishing simulations and secure coding training for developers.
              </p>
            </PracticeItem>
            <PracticeItem>
              <h3>OWASP Standards</h3>
              <p>
                Adherence to <SiOwasp /> OWASP Top 10 guidelines for web application security. 
                Regular security reviews of all application components.
              </p>
            </PracticeItem>
          </PracticeList>
        </SecurityPractices>

        <ReportSection>
          <h2>Report a Security Concern</h2>
          <ReportBox>
            <p>
              If you've discovered a security vulnerability in our service, we appreciate your help 
              in disclosing it to us responsibly.
            </p>
            <SecurityButton href="mailto:security@yourcompany.com">
              <FaShieldAlt /> Contact Security Team
            </SecurityButton>
            <p className="disclosure">
              <small>
                We commit to responding to verified vulnerabilities within 48 hours and resolving 
                critical issues within 30 days.
              </small>
            </p>
          </ReportBox>
        </ReportSection>
      </ContentWrapper>
    </SecurityContainer>
  );
};

// Styled Components
const SecurityContainer = styled.div`
  color: #333;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #1a365d, #2a4365);
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
    background: url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') center/cover;
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
    font-size: 1.5rem;
    opacity: 0.9;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const IntroSection = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;

  p {
    font-size: 1.2rem;
    color: #2d3748;
  }
`;

const SecurityFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e2e8f0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: #2b6cb0;
    margin: 1.5rem 0 1rem;
  }

  p {
    color: #4a5568;
    line-height: 1.7;
  }
`;

const FeatureIcon = styled.div`
  background: #ebf8ff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3182ce;
  font-size: 1.5rem;
`;

const ComplianceSection = styled.section`
  margin-bottom: 4rem;
`;

const ComplianceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ComplianceCard = styled.div`
  background: #f7fafc;
  border-radius: 8px;
  padding: 1.5rem;
  border-left: 4px solid #3182ce;

  h3 {
    color: #2b6cb0;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  p {
    color: #4a5568;
    margin: 0;
    font-size: 0.9rem;
  }
`;

const SecurityPractices = styled.section`
  margin-bottom: 4rem;
`;

const PracticeList = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
`;

const PracticeItem = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;

  h3 {
    color: #2b6cb0;
    margin-top: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    color: #4a5568;
    margin-bottom: 0;
  }

  svg {
    color: #3182ce;
  }
`;

const ReportSection = styled.section`
  margin-bottom: 2rem;
`;

const ReportBox = styled.div`
  background: #f7fafc;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin-top: 1.5rem;
  border: 1px solid #e2e8f0;

  p {
    color: #4a5568;
    max-width: 700px;
    margin: 0 auto 1.5rem;
  }

  .disclosure {
    margin-top: 1.5rem;
    color: #718096;
  }
`;

const SecurityButton = styled.a`
  background: #3182ce;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  margin: 0.5rem 0;

  &:hover {
    background: #2c5282;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default Security;