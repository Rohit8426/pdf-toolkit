import React from "react";
import styled from "styled-components";
import { FaCookieBite, FaInfoCircle, FaUserShield } from "react-icons/fa";

const CookiePolicy = () => {
  return (
    <Container>
      <Hero>
        <HeroContent>
          <h1>
            <FaCookieBite /> Cookie Policy
          </h1>
          <p>How and why we use cookies on our platform</p>
        </HeroContent>
      </Hero>

      <Content>
        <Section>
          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device by your browser
            when you visit a website. They help us remember your preferences,
            improve performance, and deliver a better user experience.
          </p>
        </Section>

        <Section>
          <h2>Why We Use Cookies</h2>
          <ul>
            <li>
              <FaInfoCircle /> To remember your preferences and settings
            </li>
            <li>
              <FaInfoCircle /> For website functionality (e.g., login sessions)
            </li>
            <li>
              <FaInfoCircle /> To analyze website traffic and usage
            </li>
            <li>
              <FaInfoCircle /> For marketing and personalized content
            </li>
          </ul>
        </Section>

        <Section>
          <h2>Your Choices</h2>
          <p>
            You can control and manage cookies through your browser settings.
            You can choose to block or delete cookies, but doing so may affect
            the functionality of our services.
          </p>
        </Section>

        <Section>
          <h2>Types of Cookies We Use</h2>
          <PolicyTable>
            <thead>
              <tr>
                <th>Type</th>
                <th>Purpose</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Essential</td>
                <td>
                  Enable core functionality like login and form submission
                </td>
                <td>Session ID, CSRF token</td>
              </tr>
              <tr>
                <td>Analytics</td>
                <td>Understand how visitors interact with the site</td>
                <td>Google Analytics</td>
              </tr>
              <tr>
                <td>Marketing</td>
                <td>
                  Deliver personalized ads and measure campaign performance
                </td>
                <td>Facebook Pixel, LinkedIn Insights</td>
              </tr>
            </tbody>
          </PolicyTable>
        </Section>

        <Section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about our cookie practices, please contact
            our security team at
            <a href="mailto:H8Rb3@pdflive.com"> H8Rb3@pdflive.com</a>.
          </p>
        </Section>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  font-family: "Inter", sans-serif;
  color: #2d3748;
`;

const Hero = styled.div`
  background: linear-gradient(135deg, #2c5282, #2a4365);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 2.75rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
  }

  p {
    font-size: 1.25rem;
    margin-top: 1rem;
  }
`;

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;

  h2 {
    color: #2b6cb0;
    margin-bottom: 0.75rem;
  }

  p {
    color: #4a5568;
    font-size: 1rem;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 1rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0;
      color: #4a5568;
    }
  }

  a {
    color: #3182ce;
    text-decoration: underline;

    &:hover {
      color: #2c5282;
    }
  }
`;

const PolicyTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  font-size: 0.95rem;

  th,
  td {
    border: 1px solid #e2e8f0;
    padding: 0.75rem;
    text-align: left;
  }

  th {
    background: #f7fafc;
    color: #2b6cb0;
  }

  td {
    color: #4a5568;
  }
`;

export default CookiePolicy;
