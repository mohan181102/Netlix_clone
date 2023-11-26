import React from "react";
import "./Header.css"
import { useState } from "react";
import { useEffect } from "react";

function Nav(){
    const [value,setvalue] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setvalue(true)
            } else setvalue(false)            
        })
        
        
    },[])

    return(
        <div className={`nav ${value? "nav_change" : ""}`}>
            <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix logo" />
            <img
            className="nav_avatar"
            alt="avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
        </div>
    )

}

export default Nav