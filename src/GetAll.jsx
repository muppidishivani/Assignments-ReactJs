import {useEffect,useState} from "react"
import axios from "axios"
const GetDataExp=()=>{
const [arr,setArr]=useState([]);
const getData=async ()=>{
const res=await axios.get("http://localhost:9001/get");
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
  <th>PROJECT NAME</th>
  <th>TASKS</th>
  <th>APPROVAL</th>
  <th>HOURS</th>
  
  
</tr>
</thead>
<tbody>
  {
    arr.map((element,index)=>{
      return(
<tr key={index}>
<td>{element.id}</td>
<td>{element.projectName}</td>
<td>{element.tasks}</td>
<td>{element.approval}</td>
<td>{element.hours}</td>


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
export default GetDataExp;