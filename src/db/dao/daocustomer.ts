
import sequelize from '../config/_db'
import { Customer } from '../models/Customer'
import { STRING, INTEGER, BOOLEAN, JSON } from 'sequelize'
export function create(FormData: any) {
    Customer.init({
        name: {
            type: STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$", 'i']
            }
        },
        company: {
            type: STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$", 'i']
            }
        },
        type: {
            type: BOOLEAN,
            defaultValue: true,

        },
        city: {
            type: STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$", 'i']
            }
        },
        province: {
            type: STRING, allowNull: false,
            validate: {
                is: ["^[a-z]+$", 'i']
            }
        },
        address: {
            type: STRING, allowNull: false,
        },

        zip: {
            type: INTEGER, allowNull: false,
            validate: {
                isNumeric: true,
                max: 15,

            }
        },
        country: {
            type: STRING, allowNull: false,
            validate: {
                is: ["^[a-z]+$", 'i']
            }
        },
        email: {
            type: STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },
        telephone1: {
            type: INTEGER, allowNull: false,
            validate: {
                isNumeric: true,
                max: 15,
            }
        },
        fax: {
            type: INTEGER, allowNull: false,
            validate: {
                isNumeric: true,
                max: 15,

            }
        },
        tollFree: {
            type: INTEGER, allowNull: false,
            validate: {
                isNumeric: true,
                max: 15,

            }
        },
        telephone2: {
            type: INTEGER, allowNull: false,
            validate: {
                isNumeric: true,
                max: 15,

            }
        },
        extension: {
            type: INTEGER, allowNull: false,
            validate: {
                isNumeric: true,
                max: 15,

            }
        },

        //Billing

        credit_limit: {
            type: INTEGER, allowNull: false,
            validate: {
                isNumeric: true,
            }
        },
        labor_price: {
            type: JSON, allowNull: false,
        },
        parts_discount: {
            type: JSON, allowNull: false,
        },
        labor_discount: {
            type: JSON, allowNull: false,
        },
        //Add More Contact
        add_more_contact: {
            type: JSON, allowNull: false
        },
        //comments
        comments: {
            type: STRING(1234), allowNull: false,

        },
    },
        { sequelize, modelName: 'Customer' }
    )
    Customer.create(FormData);
    Customer.sync();

}






// AddMoreContacts:{
//     AdditionalName: {
//         type: STRING, allowNull: false,
//       },
//       AdditionalEmail: {
//         type: STRING, allowNull: false,
//       },
//       AdditionalTelephone1: {
//         type: STRING, allowNull: false,
//       },
//       AdditionalFax: {
//         type: STRING, allowNull: false,
//       },
//       AdditionalTollFree: {
//         type: STRING, allowNull: false,
//       },
//       AdditionalTelephone2: {
//         type: STRING, allowNull: false,
//       },
//       AdditionalExtension: {
//         type: STRING, allowNull: false,
//       },
// }

















