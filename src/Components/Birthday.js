import React, { useState } from 'react'
import data from './data'

const Birthday = () => {
    // let [d,setd] = useState(data);
    

  return (
    <div style={{border:"none",outline:"none",background:"white",margin:"20px",padding:"20px",borderRadius:"3px",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",width:"80%"}}>
        

        {/* card start from here  */}
        {data.map((items,index)=>{
        return <div style={{fontFamily:"sans-serif",display: "flex", alignItems:"center", backgroundColor:"white",padding:"15px",marginBottom:"20px",justifyContent:"space-between", width:"auto",borderRadius:"5px",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
        <img style={{ height:"60px", width:"60px",borderRadius:"50%"}} src={items.image} alt="" />
        <div style={{display:"flex",flexDirection:"column"}}>
        <p style={{color:"black", fontSize:"25px", fontWeight:"500"}}>{items.name}</p>
        <span style={{fontSize:"16px",marginBottom:"10px" }}>{items.dob}</span>
        </div>
        <button style={{color:"white",backgroundColor:"orangered", borderRadius:"3px",fontSize:"20px"}}>Delete</button>
        </div>
})}

        



    </div>

  )
}

export default Birthday