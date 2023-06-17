import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './Login.css';
import { api } from '../../lib/api';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = login;
    setIsLoading(true);
    api.get(`/users/${email}/${password}`).then((response) => {
      const { data } = response;
      
      setIsLoading(false);
    });
    setError(null);
  };

  return (
    <form className='bg-purple-200 w-64' onSubmit={handleSubmit}>
      <div className='field'>
        <p className='control has-icons-left'>
          <input
            className='input'
            type='email'
            data-testid='email-input'
            name='email'
            value={login.email}
            onChange={handleChange}
          />
          <span className='icon is-small is-left'>
            <i className='fas fa-envelope' />
          </span>
        </p>
      </div>
      <div className='field'>
        <p className='control has-icons-left'>
          <input
            className='input'
            type='password'
            data-testid='password-input'
            name='password'
            value={login.password}
            onChange={handleChange}
          />
          <span className='icon is-small is-left'>
            <i className='fas fa-lock' />
          </span>
        </p>
      </div>
      <button
        className={
          isLoading
            ? 'button is-link is-loading is-responsive is-rounded'
            : 'button is-link is-rounded'
        }
        type='submit'
        data-testid='btn-play'
        // disabled={ }
      >
        Entrar
      </button>
      <button
        className='button is-link is-rounded'
        type='button'
        data-testid='btn-play'
        // disabled={ }
      >
        Criar cadastro
      </button>
      {error && <p className='text-red-600 bold text-lg m-0'>{error}</p>}
    </form>
  );
}
