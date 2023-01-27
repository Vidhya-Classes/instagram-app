import { POST_LIST } from '../../services/http/http.config';
import { getRequest } from '../../services/http/http.service';

export const loadPostAPI = async (userId, limit: number, page: number) => {
  const getPostURL = `${POST_LIST}/?userId=${userId}&page=${page}&limit=${limit}`;
  const results = await getRequest(getPostURL);
  return results || {};
};
