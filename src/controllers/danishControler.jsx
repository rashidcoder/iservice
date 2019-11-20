import homeModal from "../models/homeModal";
 const HomeController = props => {

  
  const customerName= homeModal(props)
  return props.children({
    obj: {
      customerName: customerName

    }
  });
  
};
export default HomeController;


{/*
  this.props.name

import homeModal from "../models/homeModal";
 const HomeController = props => {

  const { name, fatherName, msg } = homeModal(props.data);
  console.log(name+fatherName+msg)
  return props.children({
    obj: {
      Name: name,
      FatherName: fatherName,
      msg:msg
    }
  });
};
export default HomeController;








myChangeHandler = (event) => {
  let nam = event.target.name;
  let val = event.target.value;
  this.setState({[nam]: val});
}
*/}