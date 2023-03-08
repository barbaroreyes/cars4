import React from 'react';

import { withAuthenticator } from '@aws-amplify/ui-react';
import {Amplify} from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from "../aws-exports";
import Header from '../compo/Header';
Amplify.configure(awsExports);

const Login = () => {
  return (
    <Authenticator style={{background:"red"}}>
    {({ signOut, user }) => (
      <main>
      
        <h1>Hello {user.email}</h1>
        <button onClick={signOut}>Sign out</button>
        <Header/>
      </main>
    )}
  </Authenticator>
  );
}

export default Login;
