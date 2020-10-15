/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable valid-typeof */
/* eslint-disable no-console */


import { validateObject, dumpErrors} from './modules/validate.js'
import { user, userScheme } from './modules/user.js'


  
  user.firstName = 'Mickael';
  user.age = 30;
  user.lastName = 'Meers';
  user.phone = '4452566';

  const result = validateObject(user, userScheme);
  if (result.length !== 0) {
    dumpErrors(result, user);
  } else {
    console.log(`All is ok`);
  }
  