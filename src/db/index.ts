
import { UsersDao } from './imports/imports' 

export function create() {
   
    return UsersDao.create({ title: 'hello ', description: 'world' })
    // .then(user => console.log( user ))
    // .catch(error => console.log(JSON.stringify(error)))
}



create()