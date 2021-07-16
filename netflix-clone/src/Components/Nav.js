import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import "../Components/Nav.css";
import Logo from '../images/netflix.png'

function Nav() {

    const [show,setShow]=useState(false);
    const history=useHistory();
    const transitionNavBar =()=>{
        if(window.scrollY>100){
            setShow(true);
        }
        else
        {
            setShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar)
        return()=>window.removeEventListener('scroll',transitionNavBar)
       
    }, [])


    return (
        <div className={`nav ${show && "nav_black"}`}>

            <div className="nav_contents">

            <img 
            onClick={()=>history.push("/")}
            className="nav_logo" src={Logo} alt="Netflix"/>

        <img 
        onClick={()=>history.push("/profile")}
        className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar"/>
            </div>
           
        </div>
    )
}

export default Nav
