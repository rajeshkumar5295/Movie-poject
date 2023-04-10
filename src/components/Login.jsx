import React ,{useContext, useState} from 'react';
import {TailSpin} from "react-loader-spinner";
import { Link, useNavigate } from 'react-router-dom';
import {swal} from "sweetalert";
import {query,getDocs,where} from "firebase/firestore";
import { usersRef } from '../firebase/firebase';
import bcrypt  from 'bcryptjs';

import { Appstate } from '../App';

//bcrypt.compareSync = function(s, hash) {};

const Login = () => {
       
       const navigate=useNavigate();
      const useAppstate=useContext(Appstate);
      const[form,setForm]=useState({ mobile:"", password:"" });
     const[loading ,setLoading]=useState(false);


  const login=async()=>{
    setLoading(true);
    try {
         const quer=query(usersRef,where('mobile','==',form.mobile))
         const querySnapshot= await getDocs(quer);

         querySnapshot.forEach((doc)=>{
          const _data=doc.data();
          // const isUser=bcrypt.compareSync(form.password,_data.password);
          const isUser=bcrypt.compareSync(form.password,_data.password);

          if(isUser){
            useAppstate.setLogin(true);
            useAppstate.setUserName(_data.name)
            navigate('/')
            
         swal({
          title:"Logged In",
          icon:"success",
          buttons:false,
          timer:3000
         })    

          }else{
                   
         swal({
          title:"Invalid Credentials",
          icon:"error",
          buttons:false,
          timer:3000
         })

          }
         })



    } catch (error) {
             swal({
              title:error.message,
              icon:"error",
              buttons:false,
              timer:3000 
             })
    }
      setLoading(false);      
  
  }



  return (
    <div className='w-full flex  flex-col mt-8 items-center'  >
      <h1 className='text-xl font-bold'> Login </h1>
      <div className="p-2 w-full md:w-1/3">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-300">
                    Mobile Number
                  </label>

                  <input 
                  required
                  type="number"
                    id="number"
                    name="number"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10
                       2 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    value={form.mobile}
                    onChange={(e) =>
                      setForm({ ...form, mobile: e.target.value })
                    }
                  />
                </div>
              </div>
               <div className="p-2 w-full md:w-1/3">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-300">
                    Password
                  </label>

                  <input 
                  required
                    type="number"
                    id="imgage"
                    name="image"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10
                       2 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  />
                </div>
              </div>
                     
                 
              <div className="p-2 w-full">
                {/* <Link to="/">  */}
                 <button
                    onClick={login}
                    type="submit"
                    className="flex mx-auto text-white bg-green-700 border-0 py-2 px-8 focus:outline-none hover:bg-green-500 rounded text-lg"
                  >
                   {loading ? (
                      <TailSpin height={25} color="White" /> ) : ("Login" )}
                  </button>
                {/* </Link> */}
              </div>


              <div>
                <p>
                  Do not have account? <Link  to="/signup" ><span className='text-blue-500'> Sign Up </span></Link>
                </p>
              </div>
     

    </div>
  )
}

export default Login