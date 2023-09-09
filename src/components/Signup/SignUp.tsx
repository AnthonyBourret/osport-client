/* eslint-disable max-len */
import React, { useState, useContext, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import axiosInstance from '../../services/axiosInstance';
import AuthContext from '../../context/AuthContext';
import useValidation from '../hooks/useValidation'; // Import the custom hook
// import { usernameCreation, passwordCreation, emailCreation } from '../../utils/regex';

const SignUp: React.FC = () => {
  const { logUser } = useContext(AuthContext);

  const regexes = {
    username: /^[a-zA-Z0-9_]{2,}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d`!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]{8,}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  };

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [cguChecked, setCguChecked] = useState(false);
  const [newsletterChecked, setNewsletterChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isUsernameValid, validateUsername] = useValidation(true, regexes);
  const [isPasswordValid, validatePassword] = useValidation(true, regexes);
  const [isEmailValid, validateEmail] = useValidation(true, regexes);
  const [isCguChecked, setIsCguChecked] = useState(true);
  const [isServerValid, setIsServerValid] = useState(true);

  const resetValidationStates = () => {
    setErrorMessage('');
    setIsServerValid(true);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    resetValidationStates();

    const isValidUsername = validateUsername(username, 'username');
    const isValidPassword = validatePassword(password, 'password');
    const isValidEmail = validateEmail(email, 'email');

    setIsCguChecked(cguChecked);

    if (isValidUsername && isValidPassword && isValidEmail && cguChecked && (password === confirmPassword)) {
      const cleanUsername = DOMPurify.sanitize(username);
      const cleanEmail = DOMPurify.sanitize(email);

      try {
        const response = await axiosInstance.post('/signup', {
          username: cleanUsername,
          email: cleanEmail,
          password,
        });

        if (response.status === 201) {
          const loginResult = await logUser(cleanUsername, password);
          if (loginResult) {
            setErrorMessage(loginResult);
            setIsServerValid(false);
          }
        }
      } catch (error) {
        setErrorMessage('Unexpected error occured, please try again later');
        setIsServerValid(false);
      }
    }
    setPassword('');
    setConfirmPassword('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e as unknown as FormEvent); // Casting nécessaire pour satisfaire les types
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 py-6 px-4 mb-10">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-6xl">O'sport</h1>
        <div className="text-xl">Welcome on O'Sport</div>
      </div>

      <form className="flex flex-col w-full min-[820px]:w-1/2 items-center p-6 gap-4 bg-neutral-focus shadow-sm border border-gray-500 rounded-xl">
        <div className="form-control w-full">
          <label className="label" htmlFor="username">
            <span className="label-text text-lg">Username : </span>
          </label>
          <input
            id="username"
            type="text"
            placeholder="Type here"
            className="input input-bordered text-sm"
            value={username}
            onChange={(e?) => {
              setUsername(e.target.value);
              // console.log(typeof usernameCreation);
              validateUsername(e.target.value, 'username');
            }}
            onKeyDown={handleKeyDown}
          />
          <span className="flex gap-2 m-1.5 text-neutral-content text-xs">
            Only letters, numbers and underscores.
          </span>
          {(!isUsernameValid && username !== '') && (
            <span className="text-error flex gap-2 text-xs mt-1 ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-4 w-4" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              Minimum length of 2 and only letters, numbers and underscores.
            </span>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label" htmlFor="email">
            <span className="label-text text-lg">Email : </span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Type here"
            className="input input-bordered text-sm"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value, 'email');
            }}
            onKeyDown={handleKeyDown}
          />
          {(!isEmailValid && email !== '') ? (
            <span className="text-error flex gap-2 text-xs mt-1 ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-4 w-4" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              This doesn't appear to be a valid email address.
            </span>
          ) : null}
        </div>

        <div className="form-control w-full">
          <label className="label" htmlFor="password">
            <span className="label-text text-lg">Password : </span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Type here"
            className="input input-bordered text-sm"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorMessage('');
              validatePassword(e.target.value, 'password');
            }}
            onKeyDown={handleKeyDown}
          />
          <span className="flex gap-2 m-1.5 text-neutral-content text-xs">
            Password must contains at least 8 characters
          </span>
          {(!isPasswordValid && password !== '') && (
            <span className="text-error flex gap-2 text-xs mt-1 ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-4 w-4" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              Minimum length of 8, at least one letter, one number and a special character
            </span>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label" htmlFor="confirmPassword">
            <span className="label-text text-lg">Password Confirmation: </span>
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Type here"
            className="input input-bordered text-sm"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setErrorMessage('');
              // validatePassword(e.target.value, 'password');
            }}
            onKeyDown={handleKeyDown}
          />
          <span className="flex gap-2 m-1.5 text-neutral-content text-xs">
            Reenter your password and ensure that it matches the one above.
          </span>
          {password !== confirmPassword && confirmPassword !== '' && (
            <span className="text-error flex gap-2 text-xs mt-1 ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-4 w-4" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              'Password Confirmation' and 'Password' do not match.
            </span>
          )}
        </div>

        <div className="flex flex-col w-full">
          <div className="form-control">
            <label className="label cursor-pointer flex justify-start">
              <input
                onChange={(e) => {
                setCguChecked(e.target.checked);
                setIsCguChecked(true);
              }}
                type="checkbox"
                checked={cguChecked}
                name="cgu"
                className="checkbox checkbox-sm me-2"
              />
              <span className="label-text text-xs sm:text-sm">
                Accept
                <Link to="/legal_mentions" className="link link-info m-1">
                  Terms of use
                </Link>
              </span>
            </label>
            {!isCguChecked && (
              <span className="flex gap-2 m-1.5 text-error text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-4 w-4" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                You must accept the Terms of Use
              </span>
            )}
          </div>

          <div className="form-control">
            <label className="label cursor-pointer flex justify-start">
              <input
                onChange={(e) => setNewsletterChecked(e.target.checked)}
                type="checkbox"
                checked={newsletterChecked}
                className="checkbox checkbox-sm me-2"
                name="newsletter"
              />
              <span className="label-text text-xs sm:text-sm">
                Accept to receive mail from O'sport
              </span>
            </label>
          </div>
        </div>

        {!isServerValid && (
          <span className="text-error text-xs text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-4 w-4" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            {errorMessage}
          </span>
        )}

        <button type="submit" className="btn btn-ghost btn-wide border-2 border-gray-500 sm:btn-md" onClick={handleSubmit}>
          Sign up
        </button>
      </form>

      <div className="text-center text-sm sm:text-md shadow-sm w-full min-[820px]:w-1/2 bg-neutral-focus p-4 border border-gray-500 rounded-lg">
        {' '}
        Already have an account ? &nbsp;
        <Link to="/login" className="link link-info font-bold">
          Sign In
        </Link>
      </div>

      <div className="text-xs mb-4">
        More about
        {' '}
        <Link
          to="/legal_mentions"
          onClick={() => window.scrollTo(0, 0)}
          className="link link-info"
        >
          Terms of Use
        </Link>
        {' '}
        and the
        <Link
          to="/privacy_policy"
          onClick={() => window.scrollTo(0, 0)}
          className="link link-info"
        >
          Privacy Policy
        </Link>
      </div>

    </div>
  );
};

export default SignUp;
