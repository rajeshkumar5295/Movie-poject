import React ,{useContext} from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'; 
import  {Appstate} from "../App";

const Header = () => {

           const useAppstate=useContext(Appstate);
           
      
  return (
    // <div >
      <div className=' sticky top-0 z-10 header text-2xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500  flex-col md:flex-row  '>

       <Link to="/"><span> Filmy<span className='text-white md:mb-5 '>Duniya</span></span></Link>
           
       

       <div>
              <ul className='flex flex-col md:flex-row mt-3 md:mt-0 '>
               <Link to="/home"> <li className='ml-5 font-medium  text-center  rounded-md px-2  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-stone-700    mb-3 md:mt-0  '>Home</li></Link>

               <Link to="/about" > <li className='ml-5 font-medium text-center  rounded-md px-2   bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-stone-700  mb-3 md:mt-0  '>About</li></Link>

               <Link to="/download movie" > <li className='ml-5 text-center font-medium  rounded-md px-2  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-stone-700 mb-3 md:mt-0 '>Download Movie</li></Link>
              </ul>
       </div>



        {
          useAppstate.login?

           <Link to="/addmovie">
         <h1 className='text-lg  text-white flex items-center  cursor-pointer' > 
           <Button><AddIcon className="mr-2" color='secondary' /><span className='text-white'>Add New</span> </Button> 
         </h1>
         </Link>
         :
         <Link to="/login">
         <h1 className='  text-white flex items-center  cursor-pointer' > 
           <Button><span className='text-white  font-medium capitalize bg-green-400 px-3 rounded-md '>Login</span> </Button> 
         </h1>
         </Link>

          }

      </div>

        

    // </div>
  )
}

export default Header;