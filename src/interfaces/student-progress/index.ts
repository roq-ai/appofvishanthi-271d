import { UserInterface } from 'interfaces/user';
import { CourseInterface } from 'interfaces/course';
import { GetQueryInterface } from 'interfaces';

export interface StudentProgressInterface {
  id?: string;
  student_id?: string;
  course_id?: string;
  progress?: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  course?: CourseInterface;
  _count?: {};
}

export interface StudentProgressGetQueryInterface extends GetQueryInterface {
  id?: string;
  student_id?: string;
  course_id?: string;
}
