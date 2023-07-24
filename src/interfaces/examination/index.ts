import { CourseInterface } from 'interfaces/course';
import { GetQueryInterface } from 'interfaces';

export interface ExaminationInterface {
  id?: string;
  name: string;
  description?: string;
  course_id?: string;
  created_at?: any;
  updated_at?: any;

  course?: CourseInterface;
  _count?: {};
}

export interface ExaminationGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  course_id?: string;
}
