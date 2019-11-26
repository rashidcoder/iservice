import ModalAddNewCustomer from "../models/modalAddNewCustomer";

const ControllerAddNewCustomer = props => {
  const msg=ModalAddNewCustomer(props)
    return props.children({
      obj: {
        msg: msg
      }
    });
  };
  export default ControllerAddNewCustomer;
  