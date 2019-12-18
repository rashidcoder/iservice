import ModalAddNewCustomer from "../models/modalAddNewCustomer";
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
