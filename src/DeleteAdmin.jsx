import axios from "axios";
import { useEffect, useRef, useState } from "react";
const DeleteAdmin=()=>{
    const [num,setNum]=useState(null);
    const ref1=useRef(null);
    const deleteData=async ()=>{
        const res=await axios.delete("http://localhost:9003/deletedata/1");
        const {status}=res;
        setNum(status);
    }
    const delete_data=()=>{
        deleteData();
    }
    return(
        <>
        <input type="text" ref={ref1}></input> <br></br><br></br>
          <button onClick={delete_data}>DeleteRecord</button>
                   <h1>{num}</h1>
               </>
           )
       }
       export default DeleteAdmin; 