import * as yup from 'yup';

export const jobTrainingValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  trainer_id: yup.string().nullable(),
});
