import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface JobTrainingInterface {
  id?: string;
  name: string;
  description?: string;
  trainer_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface JobTrainingGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  trainer_id?: string;
}
