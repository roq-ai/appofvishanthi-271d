interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Student'],
  tenantRoles: ['Owner', 'Administrator', 'Course Instructor', 'Job Trainer'],
  tenantName: 'Organization',
  applicationName: 'appofvishanthi',
  addOns: ['notifications', 'chat', 'file'],
};
