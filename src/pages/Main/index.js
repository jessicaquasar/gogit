import React from 'react';

import logo from '../../assets/logo.png';

import { Wrapper, Form } from './styles';

import CompareList from '../../components/CompareList';

const Main = () => (
  <Wrapper>
    <img src={logo} alt="Go Git!" />

    <Form>
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit">OK</button>
    </Form>
    <CompareList />
  </Wrapper>
);

export default Main;
