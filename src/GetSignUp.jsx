import {useEffect,useState} from "react"
import axios from "axios"
const GetSignUp=()=>{
const [arr,setArr]=useState([]);
const getData=async ()=>{
const res=await axios.get("http://localhost:9008/getdata");
const {data}=res;
setArr(data);

}
useEffect(()=>{
  getData();
},[]);
return(
  <>
<div className="container mt-5">
<table className="table table-success table-bordered table-striped table-hover">
<thead>
<tr>
  <th>Id</th>
  <th>USER NAME</th>
  <th>PASSWORD</th>
  <th>ROLE</th>
  
  
  
</tr>
</thead>
<tbody>
  {
    arr.map((element,index)=>{
      return(
<tr key={index}>
<td>{element.id}</td>
<td>{element.usertName}</td>
<td>{element.password}</td>
<td>{element.role}</td>


</tr>


      )
    })
  }
</tbody>
<tfoot></tfoot>
</table>
</div>
  </>
)
}
export default GetSignUp;