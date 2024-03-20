import {Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../amplifyconfiguration.json';

import Services from './Services';
import Rides from './Rides';
Amplify.configure(config);

function Login({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.name}</h1>
      <button onClick={signOut}>Sign out</button>
      <Services/>
    </>
  );
}

export default withAuthenticator(Login);
