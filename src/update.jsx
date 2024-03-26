import { useRef,useState } from "react";
import axios from "axios";
const UpdateExp=()=>{
    const[res,setRes]=useState([]);
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
    
    const Post_data=()=>{
     PostEx();
    }
    const PostEx=async()=>
    {
        const res= await axios.put("http://localhost:9007/update/2",{"tasks":ref1.current.value,"approval":ref2.current.value,"hours":ref3.current.value});
        const {data}=res;
        setRes(data);
    }
   return(
    <>
    Tasks:<input type="text" ref={ref1}></input><br></br>
    Approval:<input type="text" ref={ref2}></input><br></br>
     Hours:<input type="text" ref={ref3}></input><br></br>
     <button onClick={Post_data}>Post</button>
     <p>{JSON.stringify(res)}</p>
    </>
   )
}
export default UpdateExp;