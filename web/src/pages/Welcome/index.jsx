import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/Table';
import { useDispatch, useSelector } from 'react-redux';
import { resetData } from '../../redux/slicer/slice';

const Welcome = () => {
  const navigate = useNavigate();
  const [showUser, setShowUser] = useState(false);

  const name = useSelector((state) => state.user.name.toUpperCase());
  const isAdmin = useSelector((state) => state.user.idAdmin);

  const dispatch = useDispatch();

  const toogleUsers = () => {
    setShowUser(!showUser);
  };

  useEffect(() => {
    if (!name) {
      navigate('/');
    }
  }, [name]);

  const fakeLogout = () => {
    dispatch(resetData());
  };

  return (
    <div>
      <h1>{`Welcome ${name}`}</h1>
      {isAdmin && (
        <button className='button is-primary' onClick={toogleUsers}>
          Exibir Users
        </button>
      )}
      <button className='button is-danger' onClick={fakeLogout}>
        Sair
      </button>
      {showUser && <Table />}
    </div>
  );
};

export default Welcome;
