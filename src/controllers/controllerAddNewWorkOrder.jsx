import ModalAddNewWorkOrder from "../models/modalAddNewWorkOrder";
const ControllerAddNewWorkOrder = props => {
  const msg=ModalAddNewWorkOrder(props)
    return props.children({
      obj: {
        msg: msg
      }
    });
  };
  export default ControllerAddNewWorkOrder;
  