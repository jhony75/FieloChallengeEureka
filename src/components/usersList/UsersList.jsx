import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { FieloService } from '../../api/fieloService';

import { Card } from '../card/Card';

const UsersList = () => {
  const [image, setImage] = useState('');
  const [names, setNames] = useState([]);

  useEffect(() => {
    FieloService.getUserByID('a3276e5b-d846-435c-8a86-feb6189374b3').then(
      (response) => {
        setImage(response);
      }
    );
  }, []);

  useEffect(() => {
    FieloService.getAllUsers().then((response) => {
      setNames(Object.keys(response));
    });
  }, []);

  return (
    <Card>
      <img src={image} alt={names} />
      {names.map((name) => (
        <p>{name}</p>
      ))}
    </Card>
  );
};

export { UsersList };
