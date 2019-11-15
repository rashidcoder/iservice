var msg ,  name ,fatherName;
var returnObj;

function homeModal(props){
  

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
                returnObj = {msg} 
                break
    }
    
  
    return returnObj

}
  
export default homeModal