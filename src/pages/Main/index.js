import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Wrapper, Form } from './styles';
import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: 'facebook/react',
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    const { repositoryInput, repositories } = this.state;

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      const repos = [...repositories, repository];

      localStorage.setItem('repos', JSON.stringify(repos));

      this.setState({
        repositoryInput: '',
        repositories: repos,
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleDeleteRepository = (id) => {
    const { repositories } = this.state;
    const newRepos = repositories.filter(item => item.id !== id);

    this.setState({
      repositories: newRepos,
    });

    localStorage.setItem('repos', JSON.stringify(newRepos));
  };

  handleRefreshRepository = async (path, id) => {
    try {
      const newRepo = await api.get(`/repos/${path}`);
      const { repositories } = this.state;

      const newRepos = repositories.filter(item => item.id !== id);
      newRepo.data.lastCommit = moment(newRepos.pushed_at).fromNow();

      this.setState({
        repositories: [...newRepos, newRepo.data],
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const {
      loading,
      repositoryInput,
      repositories,
      repositoryError,
    } = this.state;
    return (
      <Wrapper>
        <img src={logo} alt="Go Git!" />

        <Form
          withError={repositoryError}
          onSubmit={e => this.handleAddRepository(e)}
        >
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
          </button>
        </Form>
        <CompareList
          repositories={repositories}
          handleDeleteRepository={id => this.handleDeleteRepository(id)}
          handleRefreshRepository={(path, id) => this.handleRefreshRepository(path, id)
          }
        />
      </Wrapper>
    );
  }
}
