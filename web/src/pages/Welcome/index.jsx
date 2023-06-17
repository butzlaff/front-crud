import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/Table';

const Welcome = () => {
  const navigate = useNavigate();
  const [showUser, setShowUser] = useState(false);

  const toogleUsers = () => {
    setShowUser(!showUser);
  };

  return (
    <div>
      <h1>{`Welcome ${name}`}</h1>
      {isAdmin && <button className='button is-primary'>Exibir Users</button>}
      <button className='button is-danger'>Sair</button>
      {showUser && <Table />}
    </div>
  );
};

export default Welcome;
