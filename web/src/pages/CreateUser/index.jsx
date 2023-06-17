import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  return (
    <form className='bg-purple-200 w-64'>
      <div className='field flex'>
        <label className='flex flex-col'>
          Name: <input type='text' name='name' value={user.name} />
        </label>
      </div>
      <div className='field flex'>
        <label className='flex flex-col'>
          Email: <input type='email' name='email' value={user.email} />
        </label>
      </div>
      <div className='field flex'>
        <label className='flex flex-col'>
          Password:{' '}
          <input type='password' name='password' value={user.password} />
        </label>
      </div>
      <button className='button is-link is-rounded' type='submit'>
        Cadastrar
      </button>
      <button
        type='button'
        className='button is-danger is-rounded'
        onClick={() => navigate('/')}
      >
        Cancelar
      </button>
    </form>
  );
};

export default CreateUser;
