import {useEffect,useState} from "react"
import axios from "axios"
const GetAdmin=()=>{
const [arr,setArr]=useState([]);
const getData=async ()=>{
const res=await axios.get("http://localhost:9008/getAll");
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
  <th>PROJECTS</th>
  <th>CLIENTS</th>
  <th>TASKS</th>
 
  
</tr>
</thead>
<tbody>
  {
    arr.map((element,index)=>{
      return(
<tr key={index}>
<td>{element.id}</td>
<td>{element.projects}</td>
<td>{element.clients}</td>
<td>{element.tasks}</td>



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
export default GetAdmin;