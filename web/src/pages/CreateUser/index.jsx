import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../lib/api';

const CreateUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  const handleCreateUser = (event) => {
    event.preventDefault();

    // const formData = new FormData(event.target);

    // const userName = formData.get('name');
    // const userEmail = formData.get('email');
    // const userPassword = formData.get('password');

    // console.log(userName, userEmail, userPassword);

    api
      .post('/users', user)
      .then(() => {
        alert('Usuário cadastrado com sucesso!');
        navigate('/');
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  };

  return (
    <form
      className='bg-purple-200 w-64'
      onChange={handleChange}
      onSubmit={handleCreateUser}
      name='login-form'
    >
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
