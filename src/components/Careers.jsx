import React from 'react';
import styled from 'styled-components';
import { FaBriefcase, FaRegPaperPlane, FaRegSadTear } from 'react-icons/fa';

const Careers = () => {
  return (
    <CareersContainer>
      <HeroSection>
        <HeroContent>
          <h1>Join Our Team</h1>
          <p>Help us build the future while growing your career</p>
        </HeroContent>
      </HeroSection>

      <ContentWrapper>
        <NoOpeningsSection>
          <SadIcon>
            <FaRegSadTear />
          </SadIcon>
          <h2>No Current Openings</h2>
          <p>
            We don't have any open positions at the moment, but we're always looking for talented individuals. 
            Feel free to submit your resume, and we'll contact you when opportunities matching your skills become available.
          </p>
          
          <ResumeForm>
            <FormGroup>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Your full name" />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="your@email.com" />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="resume">Upload Resume</label>
              <FileInput>
                <input type="file" id="resume" accept=".pdf,.doc,.docx" />
                <span>Choose file</span>
              </FileInput>
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">Cover Letter (Optional)</label>
              <textarea id="message" placeholder="Tell us why you'd like to join our team..." rows="4"></textarea>
            </FormGroup>
            
            <SubmitButton type="submit">
              <FaRegPaperPlane /> Submit for Future Opportunities
            </SubmitButton>
          </ResumeForm>
        </NoOpeningsSection>

        <WhyJoinSection>
          <h2>Why Consider Joining Us?</h2>
          <BenefitsGrid>
            <BenefitCard>
              <BenefitIcon>💼</BenefitIcon>
              <h3>Meaningful Work</h3>
              <p>Work on projects that make a real difference in people's lives</p>
            </BenefitCard>
            
            <BenefitCard>
              <BenefitIcon>📈</BenefitIcon>
              <h3>Career Growth</h3>
              <p>Continuous learning opportunities and clear advancement paths</p>
            </BenefitCard>
            
            <BenefitCard>
              <BenefitIcon>⚖️</BenefitIcon>
              <h3>Work-Life Balance</h3>
              <p>Flexible schedules and remote work options</p>
            </BenefitCard>
            
            <BenefitCard>
              <BenefitIcon>👥</BenefitIcon>
              <h3>Great Team</h3>
              <p>Collaborate with talented, supportive colleagues</p>
            </BenefitCard>
          </BenefitsGrid>
        </WhyJoinSection>

        <KeepInTouchSection>
          <h2>Keep in Touch</h2>
          <p>
            Follow us on social media or check back here for future job postings. 
            We're growing fast and new opportunities open regularly!
          </p>
          <SocialLinks>
            <SocialLink href="#" target="_blank">LinkedIn</SocialLink>
            <SocialLink href="#" target="_blank">Twitter</SocialLink>
            <SocialLink href="#" target="_blank">Facebook</SocialLink>
          </SocialLinks>
        </KeepInTouchSection>
      </ContentWrapper>
    </CareersContainer>
  );
};

// Styled Components
const CareersContainer = styled.div`
  color: #333;
  font-family: 'Inter', sans-serif;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
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
    background: url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') center/cover;
    opacity: 0.15;
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
  padding: 4rem 2rem;
`;

const NoOpeningsSection = styled.section`
  text-align: center;
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin-bottom: 4rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;

  h2 {
    font-size: 2rem;
    color: #2d3748;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  p {
    color: #4a5568;
    max-width: 600px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }
`;

const SadIcon = styled.div`
  font-size: 3rem;
  color: #4f46e5;
  margin-bottom: 1.5rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const ResumeForm = styled.form`
  max-width: 600px;
  margin: 2rem auto 0;
  text-align: left;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #2d3748;
  }

  input, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-size: 1rem;
    transition: all 0.2s;

    &:focus {
      outline: none;
      border-color: #4f46e5;
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
    }
  }

  textarea {
    resize: vertical;
  }
`;

const FileInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input[type="file"] {
    position: absolute;
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    z-index: -1;
  }

  span {
    display: inline-block;
    padding: 0.75rem 1rem;
    background: #edf2f7;
    border: 1px dashed #cbd5e0;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #e2e8f0;
    }
  }

  &::after {
    content: 'No file chosen';
    margin-left: 1rem;
    color: #718096;
  }

  input:focus + span {
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
    border-color: #4f46e5;
  }
`;

const SubmitButton = styled.button`
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;

  &:hover {
    background: #4338ca;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const WhyJoinSection = styled.section`
  margin-bottom: 4rem;

  h2 {
    text-align: center;
    font-size: 2rem;
    color: #2d3748;
    margin-bottom: 2rem;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const BenefitCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #edf2f7;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin: 1rem 0 0.5rem;
    color: #2d3748;
  }

  p {
    color: #718096;
    line-height: 1.6;
  }
`;

const BenefitIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const KeepInTouchSection = styled.section`
  text-align: center;
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;

  h2 {
    font-size: 2rem;
    color: #2d3748;
    margin-bottom: 1rem;
  }

  p {
    color: #4a5568;
    max-width: 600px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  color: #4f46e5;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    color: #4338ca;
    text-decoration: underline;
  }
`;

export default Careers;