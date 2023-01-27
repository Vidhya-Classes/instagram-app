import { USERS_PROFILES } from '../../services/http/http.config';
import { getRequest } from '../../services/http/http.service';

export const getUsers = async () => {
  const users = await getRequest(USERS_PROFILES);
  if (!users) return [];
  return users;
};
