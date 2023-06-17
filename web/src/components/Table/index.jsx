import React, { useEffect, useState } from 'react';
import { api } from '../../lib/api';

const Table = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    api.get('/users').then((response) => {
      setUsers(response.data);
    });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <table className='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Admin</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <input type='checkbox' checked={user.isAdmin} />
              </td>
              <td>
                <button className='button is-warning'>Editar</button>
              </td>
              <td>
                <button className='button is-danger'>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
