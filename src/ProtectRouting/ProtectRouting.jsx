import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const ProtectRouting = ({children}) => {
    const navigate = useNavigate();
    const [auth,setAuth]=useState(false);
    const userAuthentication=()=>{
        const authData=localStorage.getItem("name");
        if(authData){
            setAuth(true);
        }else{
            navigate('/');
        }
    };

    //useEffect
    useEffect(()=>{
        userAuthentication();
    },[]);
  return (
    <>
    {auth && children}
      
    </>
  )
}

export default ProtectRouting;
