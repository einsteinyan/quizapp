import React, {useState} from 'react';
import MainContent from 'components/layout/mainContent';
import Sidebar from 'components/layout/sidebar';

import LogoLight from 'assets/original/logo-light.svg';
import ImageContainer from 'components/common/imgContainer';
import InputContainer from 'components/common/inputContainer';
import CheckboxContainer from 'components/common/checkboxContainer';
import InlineButton from 'components/common/inlineButton';
import firebase from 'services/firebase';
import REGEX from 'shared/constants';
import { setToken } from 'shared/helpers';
import ViewWrapper from 'components/layout/viewWrapper';
import { getAccessToken } from 'shared/api';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateField = (value, fieldType) => {
        if (fieldType == 'email') {
            let emailErrorTxt = '';
            const validateEmail = REGEX.EMAIL_REGEX;
            if (value != '' && !validateEmail.test(value)) emailErrorTxt = 'Enter a valid email address';
            else emailErrorTxt = '';
            setEmailError(emailErrorTxt);
        }
    }

    const doLogin = (e) => {
        e.preventDefault();
        // firebase
        // .auth()
        // .signInWithEmailAndPassword(user.email, user.password)
        // .then((data) => {
        //     return data.user.getIdToken();
        // })
        // .then((token) => {
        //     return response.json({ token });
        // })
        // .catch((error) => {
        //     console.error(error);
        //     return response.status(403).json({ general: 'wrong credentials, please try again'});
        // })
        // firebase.auth().signInWithEmailAndPassword(email, password)
        //     .then((response) => {
        //         // Signed in
        //         return response.user.getIdToken();
        //     })
        //     .then((token) => { 
        //         createCookie('access_token', token, 365);
        //         return props.history.push('/dashboard');
        //         // ...
        //     })
        //     .catch((error) => {
        //         var errorCode = error.code;
        //         var errorMessage = error.message;
        //         console.log(errorMessage);
        //     });
        const loginData = {
            email: email,
            password: password 
        };

        getAccessToken(loginData)
            .then((response) => {
                setToken(response.token);
                return props.history.push('/dashboard');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <ViewWrapper>
            <Sidebar name='login' size='large'>
                <ImageContainer src={LogoLight} className='w-44 mx-auto mt-28'/>
                <h3 className='text-center mx-auto mt-56'>Log In to <span className='text-primary'>quizapp</span></h3>
                <form className='w-1/2 mx-auto mt-10' autoComplete='new-password' onSubmit={(e) => doLogin(e)}>
                    <InputContainer 
                        value={email}
                        name='email-field'
                        errorTxt={emailError}
                        label='Email'
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => validateField(email, 'email')}
                    />
                    <InputContainer 
                        containerClass='mt-4'
                        value={password}
                        name='password-field'
                        errorTxt={passwordError}
                        label='Password'
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="mt-4 flex flex-row flex-nowrap justify-between align-middle text-xs">
                        <CheckboxContainer
                            name='remember-me'
                            label='Remember me'
                        />
                        <InlineButton link='/signup'>Forgot Password?</InlineButton>
                        {/* <p onClick={() => props.history.push('/signup')}><span>Forgot Password?</span></p> */}
                    </div>
                    <button
                        type='submit'
                        className='btn-primary mt-6'
                    >
                        Log In
                    </button>
                </form>
                <div className='text-xs mt-96 text-center'>Don't have an account yet? &ensp;<InlineButton link='/signup'>Sign Up</InlineButton></div>
            </Sidebar>
            <MainContent 
                size='small'
                className='bg-light'
                auth={true}
            />
        </ViewWrapper>
    );
}

export default Login;