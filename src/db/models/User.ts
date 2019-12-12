import { Model, STRING } from 'sequelize'
import sequelize from '../config/_db'

export class User extends Model {
    // public static define = () => {
    //     sequelize.define('testy', {
    //         title: {
    //             type: STRING
    //         },
    //         description: {
    //             type: STRING
    //         }
    //     })
    // }
}

// export class UserModel {
//   id: string
//   label: string
//   name: string
//   createdAt: Date
//   updatedAt: Date
// }

// User.init(
//   {
//     label: STRING(255),
//     name: STRING(50)
//   },
//   { sequelize, modelName: 'user' }
// )





// class Project extends Model {}
// Project.init({
//   title: Sequelize.STRING,
//   description: Sequelize.TEXT
// }, { sequelize, modelName: 'project' });
