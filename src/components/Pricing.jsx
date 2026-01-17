import React, { useState } from 'react';
import styled from 'styled-components';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Basic',
      monthlyPrice: 9,
      annualPrice: 90,
      description: 'Perfect for individuals getting started',
      features: [
        '10 projects',
        '5GB storage',
        'Basic analytics',
        'Email support'
      ],
      accentColor: '#6366f1'
    },
    {
      name: 'Professional',
      monthlyPrice: 29,
      annualPrice: 290,
      description: 'For growing teams and businesses',
      features: [
        'Unlimited projects',
        '50GB storage',
        'Advanced analytics',
        'Priority email support',
        'API access'
      ],
      accentColor: '#10b981',
      popular: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: 99,
      annualPrice: 990,
      description: 'For large scale applications',
      features: [
        'Unlimited projects',
        'Unlimited storage',
        'Advanced analytics',
        '24/7 phone support',
        'API access',
        'Dedicated account manager'
      ],
      accentColor: '#f59e0b'
    }
  ];

  return (
    <PricingSection>
      <Header>
        <h2>Transparent Pricing</h2>
        <p>Choose a plan that works best for your needs</p>
        <ToggleWrapper>
          <span className={!isAnnual ? 'active' : ''}>Monthly</span>
          <ToggleSwitch>
            <input
              type="checkbox"
              checked={isAnnual}
              onChange={() => setIsAnnual(!isAnnual)}
            />
            <span className="slider" />
          </ToggleSwitch>
          <span className={isAnnual ? 'active' : ''}>Annual (20% off)</span>
        </ToggleWrapper>
      </Header>

      <PlansContainer>
        {plans.map((plan) => (
          <PlanCard key={plan.name} accent={plan.accentColor} isPopular={plan.popular}>
            {plan.popular && <PopularBadge>Most Popular</PopularBadge>}
            <h3>{plan.name}</h3>
            <Price>
              ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
              <span>/{isAnnual ? 'year' : 'month'}</span>
            </Price>
            <p className="description">{plan.description}</p>
            <FeaturesList>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  {feature}
                </li>
              ))}
            </FeaturesList>
            <SelectButton accent={plan.accentColor}>
              Get Started
            </SelectButton>
          </PlanCard>
        ))}
      </PlansContainer>
    </PricingSection>
  );
};

// Styled Components
const PricingSection = styled.section`
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2rem;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }

  p {
    color: #64748b;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  span {
    color: #64748b;
    font-weight: 500;

    &.active {
      color: #1e293b;
    }
  }
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 56px;
  height: 28px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider {
      background-color: #4f46e5;
    }

    &:checked + .slider:before {
      transform: translateX(28px);
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #cbd5e1;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }
  }
`;

const PlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const PlanCard = styled.div`
  position: relative;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e2e8f0;
  border-top: 4px solid ${props => props.accent};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.5rem;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }

  .description {
    color: #64748b;
    margin-bottom: 1.5rem;
  }

  ${props => props.isPopular && `
    transform: scale(1.05);
    
    &:hover {
      transform: scale(1.05) translateY(-5px);
    }
  `}
`;

const PopularBadge = styled.span`
  position: absolute;
  top: -12px;
  right: 20px;
  background-color: #4f46e5;
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const Price = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 1rem 0;

  span {
    font-size: 1rem;
    color: #64748b;
    font-weight: 400;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  text-align: left;
  margin: 2rem 0;
  padding: 0;

  li {
    margin-bottom: 0.75rem;
    color: #475569;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    color: #10b981;
  }
`;

const SelectButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  border: none;
  background-color: ${props => props.accent};
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => darken(0.1, props.accent)};
  }
`;

// Helper function for color manipulation
function darken(amount, color) {
  // Simple darken function - in a real project, use a library like polished
  return color; // Replace with actual darkening logic
}

export default Pricing;