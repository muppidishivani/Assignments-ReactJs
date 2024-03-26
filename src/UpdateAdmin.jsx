import { useRef,useState } from "react";
import axios from "axios";
const UpdateEx=()=>{
    const[res,setRes]=useState([]);
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
    
    const Post_data=()=>{
     PostEx();
    }
    const PostEx=async()=>
    {
        const res= await axios.put("http://localhost:9003/updatedata/3",{"projects":ref1.current.value,
        "clients":ref2.current.value,"tasks":ref3.current.value});
        const {data}=res;
        setRes(data);
    }
   return(
    <>
    Projects:<input type="text" ref={ref1}></input><br></br>
    Clients:<input type="text" ref={ref2}></input><br></br>
     Tasks:<input type="text" ref={ref3}></input><br></br>
     <button onClick={Post_data}>Post</button>
     <p>{JSON.stringify(res)}</p>
    </>
   )
}
export default UpdateEx;