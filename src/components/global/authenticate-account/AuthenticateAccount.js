import React from 'react'
import {GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'

const AuthenticateAccount = ({open,setAuthenticateUser}) => {
  
    // googleAuthSuccess
    const googleAuthSuccess = (res) => {
        console.log('login response', res);
    }

    // googleAuthFailed
    const googleAuthFailed = (err) => {
        console.log('login failed', err);
    }
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}>
    <div className={`${open ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-full z-[1000] flex justify-center items-center bg-black bg-opacity-[0.5]`}>
        <div className="w-[400px] h-[400px] bg-white shadow-sm">
            <div id="signInButton">
                <GoogleLogin onSuccess={googleAuthSuccess} onError={googleAuthFailed} />
            </div>
        </div>
    </div>
    </GoogleOAuthProvider>
  )
}

export default AuthenticateAccount