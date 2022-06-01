import { useQuery } from 'react-query';
import { authToken } from '../../api/authRequest';
import { FieloService } from '../../api/fieloService';

import { Card } from '../card/Card';

const UsersList = () => {
  let flag;

  if (authToken != undefined) {
    flag = true;
  }

  const { data } = useQuery('users', FieloService.getAllUsers, {
    enabled: flag != undefined,
    retry: Infinity,
  });
  console.log(`Flag: ${flag}`);
  console.dir(`Data: ${data}`);

  return (
    <Card>
      <h1>Users List</h1>
    </Card>
  );
};

export { UsersList };
