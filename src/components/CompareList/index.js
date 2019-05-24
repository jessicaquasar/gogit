import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './styles';

const CompareList = ({
  repositories,
  handleDeleteRepository,
  handleRefreshRepository,
}) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>

        <ul>
          <li>
            {repository.stargazers_count} <small>starts</small>
          </li>
          <li>
            {repository.forks_count} <small>forks</small>
          </li>
          <li>
            {repository.open_issues_count} <small>issues</small>
          </li>
          <li>
            {repository.lastCommit} <small>last commit</small>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => handleDeleteRepository(repository.id)}
        >
          {' '}
          X{/* <i className="fa fa-refresh" /> */}
        </button>
        <button
          type="button"
          onClick={() => handleRefreshRepository(repository.full_name, repository.id)
          }
        >
          {' '}
          @{/* <i className="fa fa-trash" /> */}
        </button>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  handleDeleteRepository: PropTypes.func.isRequired,
  handleRefreshRepository: PropTypes.func.isRequired,
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
    }),
  ).isRequired,
};

export default CompareList;
