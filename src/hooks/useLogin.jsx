import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export const UseLogin = () => {
const [errMessage,setErrorMessage]=useState('');
const navigate=useNavigate();


 const handleLogin=async (username,password)=>{
    try{    
      const res= await axios.post('http://localhost:3000/api/v1/user/signin/',{
     username,password
      },  { headers: { 'Content-Type': 'application/json' },withCredentials:true });
  console.log(res);
  
      navigate('/feed')
      // setErrorMessage('');
    }catch(err){
      console.log(err);
      setErrorMessage(err?.response?.data?.message)
    }
  }
  return { handleLogin, errMessage };
}