import { useRef,useState } from "react";
import axios from "axios";
const AppStaff=()=>{
    const[res,setRes]=useState([]);
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
    const ref4=useRef(null);
    const ref5=useRef(null);
   
   
    const Post_data=()=>{
     PostEx();
    }
    const PostEx=async()=>
    {
        const res= await axios.post("http://localhost:9008/saverecord",{"fullName":ref1.current.value,
        "projectName":ref2.current.value,"tasks":ref3.current.value,"date":ref4.current.value,"hours":ref5.current.value});
        const {data}=res;
        setRes(data);
       
    }
   return(
    <>
 
  Full Name:<input type="text" ref={ref1}></input><br></br>      
  Project Name:<input type="text" ref={ref2}></input><br></br>
  Tasks:<input type="text" ref={ref3}></input><br></br>
  Date:<input type="date" ref={ref4}></input><br></br>
  Hours:<input type="number" ref={ref5}></input><br></br>
 
     <button onClick={Post_data}>Post</button>
     <p>{JSON.stringify(res)}</p>
    </>
   )
}
export default AppStaff;