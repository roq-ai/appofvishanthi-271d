import * as yup from 'yup';

export const contestValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
});
