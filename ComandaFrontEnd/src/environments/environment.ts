// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // API_URL: 'http://localhost:80/API-COMANDA',
  USERS_DIRECTORY: 'Users/',
  ORDERS_DIRECTORY: 'Pedidos/',
  MENU_DIRECTORY: 'Foods/',
  API_URL: 'https://comanda-php.herokuapp.com',
  firebaseConfig: {
    apiKey: 'AIzaSyCZ63weJ7A3M02Bd_N_W-DYI8kBmrmJJcI',
    authDomain: 'labo-iv.firebaseapp.com',
    databaseURL: 'https://labo-iv.firebaseio.com',
    projectId: 'labo-iv',
    storageBucket: 'labo-iv.appspot.com',
    messagingSenderId: '243523402378',
    appId: '1:243523402378:web:e9697638c653836ad18b73'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
