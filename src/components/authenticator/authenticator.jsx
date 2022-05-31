import { useQuery } from 'react-query';

import { auth } from '../../api/authRequest';

const Authenticator = () => {
  const { data } = useQuery('authQuery', auth);

  return null;
};

export { Authenticator };
