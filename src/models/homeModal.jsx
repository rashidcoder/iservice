var customerName1;
var returnObj;

function homeModal(props) {
        customerName1 = props.customerName
        console.log('modal data' + JSON.stringify(props))
        //console.log("The customer name is ______" +customerName1)
        //console.log("email and password values in modal is  ______" +props.data.email+props.data.phone)
        returnObj = customerName1

        return returnObj

}
export default homeModal

{/*
var msg ,  name ,fatherName, customerName1;
var returnObj;

function homeModal(props){
        customerName1=props.customerName  
        console.log("The customer name is ______" +props.customerName)
        returnObj = {customerName1} 
    console.log("value of data is " )

    switch(props) {
        case 1:
                name =   "Danish "
                fatherName ="Abdur Rehman" 
                msg="Your Data has Fetched "
                returnObj = { name, fatherName , msg} 
                break
        case 2:
                name = "Rashid Iqbal" 
                fatherName ="Muhammad Iqbal" 
                msg="Your Data has Fetched "
                returnObj = { name, fatherName , msg} 
                break
        default:
                msg = "Data Not Found"
                returnObj = {customerName1} 
                break
    }
    return returnObj
}
  
export default homeModal
*/}