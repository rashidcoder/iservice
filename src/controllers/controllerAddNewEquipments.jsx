import ModalAddNewEquipments from "../models/modalAddNewEquipments";

const ControllerAddNewEqipments = props => {
  const msg=ModalAddNewEquipments(props)
    return props.children({
      obj: {
        msg: msg
      }
    });
  };
  export default ControllerAddNewEqipments;
  