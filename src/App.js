// App.js
import React from 'react';
import styled from 'styled-components';
import Login from './Login';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #3494e6, #ec6ead);
  color: #fff;
  font-family: 'Arial', sans-serif;
`;

const AppTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 30px;
  text-align: center;
  color: #fff;
`;

const App = () => {
  return (
    <AppContainer>
      <AppTitle>Aimed labs</AppTitle>
      <Login />
    </AppContainer>
  );
};

export default App;
