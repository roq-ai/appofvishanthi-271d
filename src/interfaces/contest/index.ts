import { GetQueryInterface } from 'interfaces';

export interface ContestInterface {
  id?: string;
  name: string;
  description?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ContestGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
