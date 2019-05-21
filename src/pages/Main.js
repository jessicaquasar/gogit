import React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.png';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

const Form = styled.form`
  display: flex;
  margin-top: 20px;
  max-width: 400px;
  width: 100%;

  input {
    background-color: #fff;
    border: 0;
    border-radius: 4px;
    color: #444;
    flex: 1;
    font-size: 18px;
    height: 56px;
    padding: 0 20px;
  }

  button {
    background-color: #63f5b0;
    border: 0;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    height: 56px;
    margin-left: 10px;
    padding: 0 20px;

    &:hover {
      background-color: #52d89f;
    }
  }
`;

const Main = () => (
  <Wrapper>
    <img src={logo} alt="Go Git!" />

    <Form>
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit">OK</button>
    </Form>
  </Wrapper>
);

export default Main;
