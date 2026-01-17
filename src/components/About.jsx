import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaTwitter, FaGlobe } from "react-icons/fa";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 10+ years of experience in tech innovation.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "CTO",
      bio: "Tech enthusiast specializing in scalable architecture and system design.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      social: {
        linkedin: "#",
        github: "#",
        website: "#",
      },
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Lead Developer",
      bio: "Full-stack developer passionate about creating elegant solutions.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
      },
    },
    {
      id: 4,
      name: "Emma Davis",
      role: "UX Designer",
      bio: "User experience expert focused on creating intuitive interfaces.",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      social: {
        linkedin: "#",
        website: "#",
      },
    },
  ];

  return (
    <AboutContainer>
      <HeroSection>
        <HeroContent>
          <h1>About Our Company</h1>
          <p>We're building the future of digital experiences</p>
        </HeroContent>
      </HeroSection>

      <ContentWrapper>
        <Section>
          <SectionTitle>Our Story</SectionTitle>
          <SectionText>
            Founded in 2020, we started as a small team with big dreams. Today,
            we've grown into a thriving company serving clients worldwide. Our
            journey has been marked by innovation, dedication, and a relentless
            focus on delivering exceptional value to our customers.
          </SectionText>
          <SectionText>
            From our humble beginnings in a home office to our current
            state-of-the-art facilities, we've remained committed to our core
            values of integrity, creativity, and excellence.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>Our Mission</SectionTitle>
          <MissionCard>
            <MissionIcon>✨</MissionIcon>
            <MissionText>
              To empower businesses and individuals through cutting-edge
              technology solutions that simplify complexity, enhance
              productivity, and drive growth.
            </MissionText>
          </MissionCard>
        </Section>

        <Section>
          <SectionTitle>Our Values</SectionTitle>
          <ValuesGrid>
            <ValueCard>
              <ValueIcon>👥</ValueIcon>
              <h3>Collaboration</h3>
              <p>We believe in the power of teamwork and shared success.</p>
            </ValueCard>
            <ValueCard>
              <ValueIcon>💡</ValueIcon>
              <h3>Innovation</h3>
              <p>We constantly push boundaries to create better solutions.</p>
            </ValueCard>
            <ValueCard>
              <ValueIcon>❤️</ValueIcon>
              <h3>Integrity</h3>
              <p>We do what's right, even when no one is watching.</p>
            </ValueCard>
            <ValueCard>
              <ValueIcon>🌎</ValueIcon>
              <h3>Impact</h3>
              <p>We measure success by the value we create for others.</p>
            </ValueCard>
          </ValuesGrid>
        </Section>

        <Section>
          <SectionTitle>Meet Our Team</SectionTitle>
          <TeamGrid>
            {teamMembers.map((member) => (
              <TeamCard key={member.id}>
                <TeamImage src={member.image} alt={member.name} />
                <TeamInfo>
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="bio">{member.bio}</p>
                  <SocialLinks>
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <FaLinkedin />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        aria-label={`${member.name} GitHub`}
                      >
                        <FaGithub />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        aria-label={`${member.name} Twitter`}
                      >
                        <FaTwitter />
                      </a>
                    )}
                    {member.social.website && (
                      <a
                        href={member.social.website}
                        aria-label={`${member.name} Website`}
                      >
                        <FaGlobe />
                      </a>
                    )}
                  </SocialLinks>
                </TeamInfo>
              </TeamCard>
            ))}
          </TeamGrid>
        </Section>

        <CTASection>
          <h2>Want to join our team?</h2>
          <p>
            We're always looking for talented individuals to join our growing
            company.
          </p>
          <CTAButton>View Open Positions <a href="/careers">here</a>.</CTAButton>
        </CTASection>
      </ContentWrapper>
    </AboutContainer>
  );
};

// Styled Components
const AboutContainer = styled.div`
  color: #333;
  font-family: "Inter", sans-serif;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")
      center/cover;
    opacity: 0.2;
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

const Section = styled.section`
  margin-bottom: 5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #2d3748;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background: #6e8efb;
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 1.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const MissionCard = styled.div`
  background: #f7fafc;
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MissionIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const MissionText = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  color: #2d3748;
  font-weight: 500;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ValueCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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

const ValueIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TeamCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  border: 1px solid #edf2f7;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

const TeamImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-bottom: 1px solid #edf2f7;
`;

const TeamInfo = styled.div`
  padding: 1.5rem;

  h3 {
    margin: 0 0 0.25rem;
    color: #2d3748;
    font-size: 1.3rem;
  }

  .role {
    color: #6e8efb;
    font-weight: 600;
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }

  .bio {
    color: #718096;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #718096;
    font-size: 1.2rem;
    transition: color 0.2s ease;

    &:hover {
      color: #6e8efb;
    }
  }
`;

const CTASection = styled.div`
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 12px;
  margin-top: 4rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto 2rem;
    opacity: 0.9;
  }
`;

const CTAButton = styled.button`
  background: white;
  color: #6e8efb;
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export default About;
