import ModalAddNewCustomer from "../models/modalAddNewCustomer";
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
  
