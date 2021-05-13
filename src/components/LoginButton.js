import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const LoginButton = () => {
  console.log("this is login button");
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  console.log(loginWithRedirect, isAuthenticated);
  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>
        Log In
      </button>

    )
  )
}

export default LoginButton
// ,
//       <a href="https://dev-s3o1avy9.us.auth0.com/authorize?
//     response_type=code&
//     client_id=Tp3dVHDLkHO4ta8HYrapeHGoadllUYuX&
//     redirect_uri=http://localhost:3000&  
//     scope=appointments%20contacts&
//     audience=appointments:api&
//     state=xyzABC123">
//         Sign In
//   </a>