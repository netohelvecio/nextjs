import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

const UsersList = styled.ul`
  list-style: none;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;

  li {
    background: #ed254e;
    border-radius: 4px;
    padding: 20px;

    span {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 18px;
      color: #f4fffd;
    }

    a {
      margin-left: 7px;
    }
  }
`;

const Container = styled.div`
  padding: 20px;

  a {
    text-decoration: none;
    color: #2f425a;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;

    &:hover {
      color: #011936;
    }
  }
`;

function User({ users }) {
  return (
    <Container>
      <Head>
        <title>Usuários</title>
      </Head>
      <UsersList>
        {users.map(user => (
          <li key={user.id}>
            <span>{user.login}</span>
            <Link href={`/users/${user.login}`}>
              <a>Acessar perfil</a>
            </Link>
          </li>
        ))}
      </UsersList>

      <Link href="/home">
        <a>Voltar</a>
      </Link>
    </Container>
  );
}

User.getInitialProps = async () => {
  const response = await axios.get(
    'https://api.github.com/orgs/rocketseat/members'
  );

  return { users: response.data };
};

User.propTypes = {
  users: PropTypes.array.isRequired,
};

export default withAnalytics()(User);
