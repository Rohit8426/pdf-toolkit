import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const API_URL = 'https://your-api-endpoint.com/auth'; // Replace with your API URL

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    
    if (!isLogin && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Valid email is required';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const endpoint = isLogin ? '/login' : '/register';
      const payload = isLogin 
        ? { email: formData.email, password: formData.password }
        : formData;

      const response = await axios.post(`${API_URL}${endpoint}`, payload);
      
      setMessage({ 
        text: isLogin ? 'Login successful!' : 'Registration successful!', 
        type: 'success' 
      });
      
      // Handle successful auth (store token, redirect, etc.)
      console.log('Auth success:', response.data);
      
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'An error occurred';
      setMessage({ text: errorMsg, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContainer>
      <AuthOverlay />
      <AuthCard>
        <Logo>{isLogin ? 'Sign In' : 'Sign Up'}</Logo>
        <ToggleContainer>
          <ToggleButton 
            active={isLogin} 
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </ToggleButton>
          <ToggleButton 
            active={!isLogin} 
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </ToggleButton>
        </ToggleContainer>

        {message.text && (
          <Message type={message.type}>
            {message.text}
          </Message>
        )}

        <Form onSubmit={handleSubmit}>
          {!isLogin && (
            <FormGroup>
              <Label>Full Name</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                hasError={!!errors.name}
              />
              {errors.name && <Error>{errors.name}</Error>}
            </FormGroup>
          )}

          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              hasError={!!errors.email}
            />
            {errors.email && <Error>{errors.email}</Error>}
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              hasError={!!errors.password}
            />
            {errors.password && <Error>{errors.password}</Error>}
          </FormGroup>

          {!isLogin && (
            <FormGroup>
              <Label>Confirm Password</Label>
              <Input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                hasError={!!errors.confirmPassword}
              />
              {errors.confirmPassword && <Error>{errors.confirmPassword}</Error>}
            </FormGroup>
          )}

          <SubmitButton type="submit" disabled={loading}>
            {loading ? (
              <Loader />
            ) : isLogin ? (
              'Sign In'
            ) : (
              'Create Account'
            )}
          </SubmitButton>
        </Form>

        <Footer>
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <LinkButton onClick={() => setIsLogin(false)}>
                Sign up
              </LinkButton>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <LinkButton onClick={() => setIsLogin(true)}>
                Sign in
              </LinkButton>
            </>
          )}
        </Footer>
      </AuthCard>
    </AuthContainer>
  );
};

// Styled Components
const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background-image: url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  position: relative;
`;

const AuthOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
`;

const AuthCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 450px;
  padding: 2.5rem;
  position: relative;
  z-index: 1;
  transform: translateY(0);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const Logo = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #4f46e5;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
`;

const ToggleContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
`;

const ToggleButton = styled.button`
  flex: 1;
  padding: 1rem;
  border: none;
  background: none;
  font-weight: 600;
  font-size: 1rem;
  color: ${props => props.active ? '#4f46e5' : '#64748b'};
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.active ? '#4f46e5' : 'transparent'};
    transition: background 0.3s ease;
    border-radius: 3px 3px 0 0;
  }

  &:hover {
    color: ${props => props.active ? '#4f46e5' : '#4b5563'};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid ${props => props.hasError ? '#ef4444' : '#e2e8f0'};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f9fafb;

  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#ef4444' : '#4f46e5'};
    box-shadow: 0 0 0 3px ${props => props.hasError ? 'rgba(239, 68, 68, 0.2)' : 'rgba(79, 70, 229, 0.2)'};
    background-color: white;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const Error = styled.span`
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

const Message = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  background: ${props => props.type === 'error' ? '#fee2e2' : '#d1fae5'};
  color: ${props => props.type === 'error' ? '#b91c1c' : '#065f46'};
  font-size: 0.875rem;
  text-align: center;
  border: 1px solid ${props => props.type === 'error' ? '#fecaca' : '#a7f3d0'};
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  margin-top: 0.5rem;

  &:hover {
    background: #4338ca;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #a5b4fc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const Loader = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 3px solid white;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: center;
  color: #64748b;
  font-size: 0.875rem;
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  color: #4f46e5;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  transition: color 0.2s;

  &:hover {
    color: #4338ca;
  }
`;

export default Auth;