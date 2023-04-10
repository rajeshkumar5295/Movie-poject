//https://tailblocks.cc/   using this for code

import React, { useContext, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import { moviesRef } from "../firebase/firebase";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import { Appstate } from "../App";

const AddMovie = () => {
     
       const navigate=useNavigate();
      const useAppstate=useContext(Appstate);

     const [form, setForm] = useState({
                                    title: " ",
                                     year: " ",
                                     description: " ",
                                      image: "",
                                      rated:0,
                                      radting:0,
                                 });

  const [loading, setLoading] = useState(false);

  const addMovie = async () => {
      
     setLoading(true);
    try {
            if(useAppstate.login){
      await addDoc(moviesRef, form);
      swal({
        title: "Successfully Added",
        icon: "success",
        buttons: "false",
        timer: 3000,
      });
      setForm({
        title:"",
        year:"",
        descriotion:"",
        image:""
      })
       } else{
              navigate('/login');
       }
    } catch (err) {
      swal({
        title: err,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
    setLoading(false);
  };




  return (
    <div> 
      {/* <form action=""> */}
      <section className="text-gray-600 body-font relative mt-1"> 
        <div className="container px-5 py-24 mx-auto">
          
         
          <div className="flex flex-col text-center w-full mb-6">
            <h1 className="sm:text-3xl text-xl font-medium title-font mb-0 text-white">
              Add Movie
            </h1>
          </div>
          
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">

    


              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-300">
                    Titlle
                  </label>
                  <input
                     required
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    // onChange={changeHandler}
                  />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-300">
                    Release Year
                  </label>
                  <input
                  required
                    type="number"
                    id="year"
                    name="year"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                  />
                </div>
              </div>


              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-300">
                    Image Link
                  </label>

                  <input 
                  required
                    type="url"
                    id="imgage"
                    name="image"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10
                       2 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    value={form.image}
                    onChange={(e) =>
                      setForm({ ...form, image: e.target.value })
                    }
                  />
                </div>
              </div>
              

              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-300">
                    Description
                  </label>

                  <textarea 
                  required
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                  ></textarea>
                </div>
              </div>

              <div className="p-2 w-full">
                <Link to="/">
                  
                  <button
                    onClick={addMovie}
                    type="submit"
                    className="flex mx-auto text-white bg-green-700 border-0 py-2 px-8 focus:outline-none hover:bg-green-500 rounded text-lg"
                  >
                    
                    {loading ? (
                      <TailSpin height={25} color="White" />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </Link>
              </div>


           

              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                
              </div>
            </div>
          </div>
        </div>
        
      </section>
      {/* </form> */}
    </div>
  );
};

export default AddMovie;
