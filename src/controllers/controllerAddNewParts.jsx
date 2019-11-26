import ModalAddNewParts from "../models/modalAddNewParts";

const ControllerAddNewParts = props => {
  const msg=ModalAddNewParts (props)
    return props.children({
      obj: {
        msg: msg
      }
    });
  };
  export default ControllerAddNewParts;
  