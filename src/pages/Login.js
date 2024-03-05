import React from 'react';


import {Amplify} from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from "../aws-exports";

Amplify.configure(awsExports);

const Login = () => {
  return (
    <div className='login-container'>
    <Authenticator >
    {({ signOut, user }) => (
      <main>
      
        <h1>Hello {user.name}</h1>
        <button onClick={signOut}>Sign out</button>
        
        
      </main>
    )}
  </Authenticator>
  
  </div>
  );
}

export default Login;
