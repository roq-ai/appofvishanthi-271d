import { AssignmentInterface } from 'interfaces/assignment';
import { ExaminationInterface } from 'interfaces/examination';
import { StudentProgressInterface } from 'interfaces/student-progress';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  name: string;
  description?: string;
  instructor_id?: string;
  created_at?: any;
  updated_at?: any;
  assignment?: AssignmentInterface[];
  examination?: ExaminationInterface[];
  student_progress?: StudentProgressInterface[];
  user?: UserInterface;
  _count?: {
    assignment?: number;
    examination?: number;
    student_progress?: number;
  };
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  instructor_id?: string;
}
