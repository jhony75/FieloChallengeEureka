import axios from 'axios';
import { useQuery } from 'react-query';

import { auth } from '../../api/authRequest';

const Authenticator = () => {
  const { data } = useQuery('authQuery', auth, { enabled: true, retry: 2 });

  return null;
};

export { Authenticator };
