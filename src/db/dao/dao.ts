import sequelize from '../config/_db'
import { User } from '../models/User'
import { STRING } from 'sequelize'
export function create(user: any): Promise<any> {

  // User.define();

  User.init(
    {
      title: STRING,
      description: STRING
    },
    { sequelize, modelName: 'User' }
  )

  User.create(user)
  User.sync()
  return user;

}

export function findAll(): Promise<any> {
  return User
    .findAll()
}
