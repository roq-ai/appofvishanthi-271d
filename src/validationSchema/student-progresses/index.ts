import * as yup from 'yup';

export const studentProgressValidationSchema = yup.object().shape({
  progress: yup.number().integer(),
  student_id: yup.string().nullable(),
  course_id: yup.string().nullable(),
});
