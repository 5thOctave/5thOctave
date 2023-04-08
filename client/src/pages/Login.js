import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="p-8 stylish">
      <div className="flex justify-center">
        <div className="">
          <h4 className="text-3xl font-bold text-center">Sign In</h4>
          <div className="">
            {data ? (
              <p>
                Success! You may now head <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col w-40">
                <input className="p-1 rounded-lg border-2 border-[#669BBC]" placeholder="Email" name="email" type="email" value={formState.email} onChange={handleChange} />
                <input className="p-1 rounded-lg border-2 border-[#669BBC]" placeholder="Password" name="password" type="password" value={formState.password} onChange={handleChange} />
                <button className="p-1 border-4 border-[#669BBC] rounded-lg bg-[#C1121F] text-[#FDF0D5]" style={{ cursor: "pointer" }} type="submit">
                  Submit
                </button>
              </form>
            )}

            {error && <div className="my-3 p-3">{error.message}</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
