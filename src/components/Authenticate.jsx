import React from "react";
import {useEffect, useState} from "react";
export default function Authenticate({token, setToken}) {
  
  const [isAuthen, setIsAuthen]=useState(null);
  useEffect(()=>{
    console.log(token)
  },[isAuthen]);  
  const startAuth = async()=> {
      try { const response= await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
          "authorization":`Bearer ${token}`,

        }
      })
      const result =await response.json()
      setIsAuthen(result.success);
        
      } catch (error) {
        console.log (error);
      }
    }

  return (
    <>
    
<h2>Authenticate!</h2>

<button onClick={startAuth}>Authenticate</button>
{
  isAuthen ? <h2>Authentication Success!</h2>: null
}
</>
  ) ;
  }
  
 
  
 
