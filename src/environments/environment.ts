// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDXlYAWdE3juqvcsYkmXjDt6obivcss5EQ",
    authDomain: "visausapro-web.firebaseapp.com",
    databaseURL: "https://visausapro-web.firebaseio.com",
    projectId: "visausapro-web",
    storageBucket: "visausapro-web.appspot.com",
    messagingSenderId: "717554810112",
    appId: "1:717554810112:web:4653d68e2408ab52de87e5",
    measurementId: "G-GB4XS4YS8F"
  },
  chargeCreditUrl:"https://us-central1-visausapro-web.cloudfunctions.net/chargeCreditCard",
  confirmationEmailEndpointUrl:"https://us-central1-visausapro-web.cloudfunctions.net/httpEmail",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
