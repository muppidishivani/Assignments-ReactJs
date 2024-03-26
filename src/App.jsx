import { useRef,useState } from "react";
import axios from "axios";
const App=()=>{
    const[res,setRes]=useState([]);
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
    const ref4=useRef(null);
   
    const Post_data=()=>{
     PostEx();
    }
    const PostEx=async()=>
    {
        const res= await axios.post("http://localhost:9008/save",{"projectName":ref1.current.value,
        "tasks":ref2.current.value,"approval":ref3.current.value,"hours":ref4.current.value});
        const {data}=res;
        setRes(data);
       
    }
   return(
    <>
    <h2 style={{color: "red",background:"aqua"}}>Manager</h2>
  <table border="1">
    <tr style={{color: "green",background:"pink"}}>
  <th>Project Name:</th><td><input type="text" ref={ref1}></input><br></br></td></tr>
  <tr style={{color: "green",background:"pink"}}>
  <th>Tasks:</th><td><input type="text" ref={ref2}></input><br></br></td></tr>
  <tr style={{color: "green",background:"pink"}}>
  <th>Approval:</th><td><input type="text" ref={ref3}></input><br></br></td></tr>
<tr style={{color: "green",background:"pink"}}>
  <th>Hours:</th><td><input type="number" ref={ref4}></input><br></br></td></tr>
    <tr style={{color: "green",background:"pink"}}>
        <button onClick={Post_data}>Post</button></tr> 
     </table>
     <p>{JSON.stringify(res)}</p>
    </>
   )
}
export default App;