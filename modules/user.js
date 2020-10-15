/* eslint-disable import/extensions */
import { checkType, nonEmptyString, numberInRange } from '../modules/check.js'





export const user = {
    firstName: 'DefaultName',
    age: 770,
    lastName: 'DefaultLastName',
    phone: '6451364646'
  }

// //   ====================================================================
export const userScheme = {
    firstName: [
      {
        validator: {
          rule: checkType,
          params: ["string"],
          message: "First Name not string",          
        } 
      },
      {
        validator: {
          rule: nonEmptyString,
          params: [],
          message: "First Name is empty",          
        } 
      },
    ],
    lastName: [
      {
        validator: {
          rule: checkType,
          params: ["string"],
          message: "Last Name not string",          
        }
      },
      {
        validator: {
          rule: nonEmptyString,
          params: [],
          message: "Last Name is emtpy",          
        }
      },
    ],
    age: [
      {
        validator: {
          rule: checkType,
          params: ["number"],
          message: "Age is not a number",          
        }
      },
      {
        validator: {
          rule: numberInRange,
          params: [10, 56],
          message: "Age is not in range between 10 and 56",          
        }
      },
    ],
    phone: [
      {
        validator: {
          rule: checkType,
          params: ["string"],
          message: "Phone not string",          
        }
      },
    ],
  }
  



// export const result = validateObject(user, userScheme);
//   if (result.length !== 0) {
//     dumpErrors(result, user);
//   } else {
//     console.log(`All is ok`);
//   }
  