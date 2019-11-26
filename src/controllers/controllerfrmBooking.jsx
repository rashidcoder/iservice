import ModalfrmBooking from "../models/modalfrmBooking";
const ControllerfrmBooking = props => {
  const msg=ModalfrmBooking (props)
    return props.children({
      obj: {
        msg: msg
      }
    });
  };
  export default ControllerfrmBooking;
  