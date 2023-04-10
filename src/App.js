import React, { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import {Routes,Route} from 'react-router-dom';
import AddMovie from "./components/AddMovie";


import Home from "./components/Home";
import About from "./components/About";
import DownloadMovie from "./components/DownloadMovie";
import Detail from "./components/Detail";
// import Footer from "./components/Footer";

import {createContext} from "react";
import { useEffect } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";


 export  const Appstate=createContext();




// <Header />
//       <Card></Card>

function App() {  

      const[login,setLogin]=useState(false);
      const[userName,setUserName]=useState("");

        // useEffect(()=>{
                   

        // },[])


  return (
    <Appstate.Provider value={{login,setLogin,userName,setUserName}}  > 
    <div className="App relative ">
            <Header/>
       
        <Routes>
        
        <Route path='/' element={<Card/>}  />   
        <Route path="/addmovie" element={<AddMovie/>}   />
         <Route path="/home" element={<Home/>}   />
        <Route path="/about" element={<About/>} />  
        <Route path="/download movie" element={<DownloadMovie/>}/>
        <Route  path="/detail/:id" element={<Detail/>}  />
         <Route  path="/login" element={<Login/>}  />
         <Route path="/signup" element={<Signup/>}    />

       </Routes> 
       {/* <Footer/>    */}
     
        
      
    </div>
    </Appstate.Provider>
  );
}

export default App;
