import axios from 'axios';
import queryString from 'query-string';
import { ExaminationInterface, ExaminationGetQueryInterface } from 'interfaces/examination';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getExaminations = async (
  query?: ExaminationGetQueryInterface,
): Promise<PaginatedInterface<ExaminationInterface>> => {
  const response = await axios.get('/api/examinations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createExamination = async (examination: ExaminationInterface) => {
  const response = await axios.post('/api/examinations', examination);
  return response.data;
};

export const updateExaminationById = async (id: string, examination: ExaminationInterface) => {
  const response = await axios.put(`/api/examinations/${id}`, examination);
  return response.data;
};

export const getExaminationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/examinations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteExaminationById = async (id: string) => {
  const response = await axios.delete(`/api/examinations/${id}`);
  return response.data;
};
