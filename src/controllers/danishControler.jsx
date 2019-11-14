import homeModal from "../views/modal/homeModal";
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
