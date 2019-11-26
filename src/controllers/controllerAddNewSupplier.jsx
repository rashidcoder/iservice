import ModalAddNewSupplier from "../models/modalAdsNewSupplier";

const ControllerAddNewSupplier = props => {
  const msg=ModalAddNewSupplier (props)
    return props.children({
      obj: {
        msg: msg
      }
    });
  };
  export default ControllerAddNewSupplier;
  