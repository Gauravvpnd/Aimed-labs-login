// LoginForm.js
import React  from 'react';
import styled from 'styled-components';


const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  input {
    margin-right: 10px;
  }

  label {
    font-size: 14px;
    color: #555;
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const SignUpLink = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #000;

  a {
    color: #3494e6;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

  const LoginForm = () => {
    return (
      
        <FormContainer>
          <Form>
            <Input type="text" placeholder="Username" name="username" required />
            <Input type="password" placeholder="Password" name="password" required />
  
            <CheckboxContainer>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </CheckboxContainer>
  
            <CheckboxContainer>
              <input type="checkbox" id="agreeTerms" required />
              <label htmlFor="agreeTerms">I agree to the Terms and Conditions</label>
            </CheckboxContainer>
  
            <Button type="submit">Log In</Button>
          </Form>
  
          <SignUpLink>
            Don't have an account? <a href="#">Create one</a>
          </SignUpLink>
        </FormContainer>
      
    );
  };

export default LoginForm;






