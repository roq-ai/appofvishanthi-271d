import axios from 'axios';
import queryString from 'query-string';
import { JobTrainingInterface, JobTrainingGetQueryInterface } from 'interfaces/job-training';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getJobTrainings = async (
  query?: JobTrainingGetQueryInterface,
): Promise<PaginatedInterface<JobTrainingInterface>> => {
  const response = await axios.get('/api/job-trainings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createJobTraining = async (jobTraining: JobTrainingInterface) => {
  const response = await axios.post('/api/job-trainings', jobTraining);
  return response.data;
};

export const updateJobTrainingById = async (id: string, jobTraining: JobTrainingInterface) => {
  const response = await axios.put(`/api/job-trainings/${id}`, jobTraining);
  return response.data;
};

export const getJobTrainingById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/job-trainings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteJobTrainingById = async (id: string) => {
  const response = await axios.delete(`/api/job-trainings/${id}`);
  return response.data;
};
