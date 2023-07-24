const mapping: Record<string, string> = {
  assignments: 'assignment',
  contests: 'contest',
  courses: 'course',
  examinations: 'examination',
  'job-trainings': 'job_training',
  organizations: 'organization',
  'student-progresses': 'student_progress',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
