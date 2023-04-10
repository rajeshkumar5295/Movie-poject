
import React ,{useState} from 'react';
import {TailSpin} from "react-loader-spinner";
import { Link, useNavigation } from 'react-router-dom';
import {RecaptchaVerifier,getAuth,signInWithPhoneNumber}from "firebase/auth";
import app from '../firebase/firebase';
import swal from 'sweetalert';
import {useNavigate} from "react-router-dom";
import bcrypt from 'bcryptjs';

import { addDoc, doc } from 'firebase/firestore';
import { usersRef } from '../firebase/firebase';
import { useEffect } from 'react';




const auth=getAuth(app);

const Signup = () => {
    
      const navigate=useNavigate();
      const[form,setForm]=useState({ name:"",  mobile:"",  password:"" });
      const[loading ,setLoading]=useState(false);
      const[otpSent,setOtpSent]=useState(false);
       const[OTP,setOTP]=useState("");
       
     const generateRecaptha=()=>{
      window.recaptchaVerifier=new RecaptchaVerifier('recaptcha-container',{
        // 'size':'invisible',
           'size':'visible',
        'callback':(response)=>{
          //Recaptcha generation .

        }
      },auth);
     }   
     
     //OTP generation ,how to generate otp

        const requestOtp=()=>{
          setLoading(true);
          generateRecaptha();
          let appVerifier=window.recaptchaVerifier;
          signInWithPhoneNumber(auth,  `+91${form.mobile}`,appVerifier)
          .then(confirmationResult=> {
            window.confirmationResult=confirmationResult;
            swal({
              text:"OTP Sent",
              icon:"success",
              buttons:false,
              timer:3000,
            });
            setOtpSent(true);
            setLoading(false);

            }).catch((error)=>{
              console.log(error)
            })
        }
          
     
      //   const uploadData =async()=>{
      //     try{
      //    const salt=bcrypt.genSaltSync(10);
      //    var hash=bcrypt.hashSync(form.password,salt);
       
      //    await addDoc(usersRef,{
      //      name:form.name,
      //      password:hash,
      //      mobile:form.mobile 
      //    });
      //  }catch(err){
      //    console.log(err);
      //  }
      //  }



        const verifyOTP = ()=>{
                    try{
                      setLoading(true);

                      window.confirmationResult.confirm(OTP).then((result)=>{
                            
                           uploadData();
                        swal({
                          text:"Successfully Registered",
                          icon:"success",
                          buttons:false,
                          timer:3000,

                        });
                        navigate('/login');
                        setLoading(false);
                      })

                    
                     }  catch(error){
                        console.log(error);  
                     }
        }


        
        const uploadData =async()=>{
           try{
            console.log("hi,be positive");
          var salt=bcrypt.genSaltSync(10);
          var hash=bcrypt.hashSync(form.password,salt);
          console.log(hash);
          console.log("hi");
          // var hash=bcrypt.hashSync(form.password,10); /

          await addDoc(usersRef,{
            name:form.name,
            password:hash,
            // password:form.password,
            mobile:form.mobile 
          });
        }catch(err){
          console.log(err);
        }
        }



 return (
    <div className='w-full flex  flex-col mt-8 items-center'  >
    <h1 className='text-xl fotn-bold'> Signup  </h1>
          
          {  otpSent?

        <>
               <div className="p-2 w-full md:w-1/3">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-300">
                  OTP
                </label>
                  <input 
                    required
                  id="number"
                  name="number"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10
                     2 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  value={OTP}
                  onChange={(e)=>setOTP(e.target.value)}
                  // onChange={(e) =>
                  //   setForm({ ...form, mobile: e.target.value })
                  // }
                />
              </div>
            </div>
              
            <div className="p-2 w-full">
              
                 <button 
                 
                        onClick={verifyOTP} 
                    type="submit"
                    className="flex mx-auto text-white bg-green-700 border-0 py-2 px-8 focus:outline-none hover:bg-green-500 rounded text-lg"
                  >
                   {loading ? (
                      <TailSpin height={25} color="White" /> ) : ("Confirm OTP" )}
                  </button>
                
              </div>
      </>
       :
        <>
           <div className="p-2 w-full md:w-1/3">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-300">
                   Enter Your Name :
                  </label>
                  
                  <input 
                    required
                    type="string"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10
                       2 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                </div>
              </div>
    

               <div className="p-2 w-full md:w-1/3">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-300">
                    Mobile Number :
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
                    Password :
                  </label>

                  <input 
                  required
                    type={'password'}
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
                
                 <button 
                    onClick={requestOtp}
                    type="submit"
                    className="flex mx-auto text-white bg-green-700 border-0 py-2 px-8 focus:outline-none hover:bg-green-500 rounded text-lg"
                  >
                   {loading ? (
                      <TailSpin height={25} color="White" /> ) : ("Request OTP" )}
                  </button>
              
              </div>

         </>
             }
              <div>
                <p>
                  Already have an account ? <Link  to="/login" ><span className='text-blue-500'> Login </span></Link>
                </p>
              </div>

              <div  id="recaptcha-container"  >

              </div>
     

    </div>
  );
};

export default Signup;