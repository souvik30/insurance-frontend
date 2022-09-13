// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const hour=new Date().getHours().toString()
const minute=new Date().getMinutes().toString()
const day=new Date().getDate().toString()
export const environment = {
  production: false,
  AuthURL:"http://localhost:8084/api/auth/",
  MemberURL:"http://localhost:1918/master/",
  PaymentURL:"http://localhost:1919/payment/",
  version:day+"."+hour+minute
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
