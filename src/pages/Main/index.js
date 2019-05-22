import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Wrapper, Form } from './styles';
import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();
    const { repositoryInput, repositories } = this.state;
    try {
      const response = await api.get(`/repos/${repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, response.data],
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { repositoryInput, repositories } = this.state;
    return (
      <Wrapper>
        <img src={logo} alt="Go Git!" />

        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">OK</button>
        </Form>
        <CompareList repositories={repositories} />
      </Wrapper>
    );
  }
}
