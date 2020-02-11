import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Link from 'next/link';

import withAnalytics from '../src/hocs/withAnalytics';

const Container = styled.div`
  margin: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #ed254e;
    font-size: 28px;
    font-family: Arial, Helvetica, sans-serif;
  }

  img {
    border-radius: 50%;
    border: 4px solid #ed254e;
  }

  a {
    text-decoration: none;
    color: #2f425a;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 10px;

    &:hover {
      color: #011936;
    }
  }
`;

function Detail({ user }) {
  return (
    <Container>
      <h1>{user.login}</h1>
      <img src={user.avatar_url} alt={user.login} width="200" />

      <Link href="/users">
        <a>Voltar</a>
      </Link>
    </Container>
  );
}

Detail.getInitialProps = async ({ query }) => {
  const response = await axios.get(
    `https://api.github.com/users/${query.user}`
  );

  return { user: response.data };
};

Detail.propTypes = {
  user: PropTypes.object.isRequired,
};

export default withAnalytics()(Detail);
