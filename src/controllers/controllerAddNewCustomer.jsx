import ModalAddNewCustomer from "../models/modalAddNewCustomer";
<<<<<<< HEAD
import UsersDao from "../db/dao/dao"; 
 

const ControllerAddNewCustomer = props => {
   
  const msg = ModalAddNewCustomer(props)  
var userDao = new UsersDao()
  userDao.createWebSql()
  return props.children({
    obj: {
      msg: msg
    }
  });
};
export default ControllerAddNewCustomer;
=======
import { UsersDao, CustomerDao } from "../db/imports/imports";

const ControllerAddNewCustomer = props => {
  const msg=ModalAddNewCustomer(props)


  UsersDao.create({ title: 'hello ', description: 'world' });

 CustomerDao.create(props.formData)

    return props.children({
      obj: {
        msg: msg
      }
    });


    


  };
  export default ControllerAddNewCustomer;
  
>>>>>>> 6965b795a84f5220297f0543200251253bbb8938
