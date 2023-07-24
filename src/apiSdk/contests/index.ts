import axios from 'axios';
import queryString from 'query-string';
import { ContestInterface, ContestGetQueryInterface } from 'interfaces/contest';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getContests = async (query?: ContestGetQueryInterface): Promise<PaginatedInterface<ContestInterface>> => {
  const response = await axios.get('/api/contests', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createContest = async (contest: ContestInterface) => {
  const response = await axios.post('/api/contests', contest);
  return response.data;
};

export const updateContestById = async (id: string, contest: ContestInterface) => {
  const response = await axios.put(`/api/contests/${id}`, contest);
  return response.data;
};

export const getContestById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/contests/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteContestById = async (id: string) => {
  const response = await axios.delete(`/api/contests/${id}`);
  return response.data;
};
