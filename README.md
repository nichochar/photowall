![screenshot](public/screenshot.png)
A very simple interactive single page application.

## Running
```
npm run start
```
You will need to connect to a firebase database. Create one and copy the config in `src/database/config.js`:
```
import firebase from 'firebase/app'
import 'firebase/database'

 var config = {
    apiKey: "this is pretty secret, get your own",
    authDomain: "this is pretty secret, get your own",
    databaseURL: "this is pretty secret, get your own",
    projectId: "pizzafest-secret",
    storageBucket: "pizzafest-secret.appspot.com",
    messagingSenderId: "123456789"
}

firebase.initializeApp(config)

const database = firebase.database()

export {database}
```

## Notes

* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), the most recent guide is [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
* Uses webpack for building
* Uses prettier for linting
