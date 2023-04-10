import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { ThreeDots} from "react-loader-spinner";
import { getDocs } from "firebase/firestore";
import { moviesRef } from "../firebase/firebase";
import { Link } from "react-router-dom";
import Footer from "./Footer";

 
const Card = () => {

  const[loading,setLoading]=useState(false);
  const [data, setData] = useState([
    // {
    //   name: "PATHAN",
    //   Rating: 3,
    //   Year: 2023,
    //   img: "https://getwelljankari.com/wp-content/uploads/2022/11/Twitter.jpg",
    // },
    // {
    //   name: "AVATAR",
    //   Rating: 4.5,
    //   Year: 2009,
    //   img: "https://preview.redd.it/fan-art-movie-poster-by-v0-ui4nnnq2f6ba1.jpg?auto=webp&s=7abc7901f37c33b840d57df877a65a17d99b5d86",
    // },
    // {
    //   name: "NIGHT MANAGER",
    //   Rating: 4,
    //   Year: 2023,
    //   // img: "https://www.telugubulletin.com/wp-content/uploads/2020/05/KGF-2.jpg",
    //   img:"https://upload.wikimedia.org/wikipedia/en/4/4c/The_Night_Manager_%28Indian_TV_series%29.jpg",

    // },
    // {
    //   name: "RRR",
    //   Rating: 5,
    //   Year: 2022,
    //   img: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    // },
    // {
    //   name: "WRONG TURN 3",
    //   Rating: 3.5,
    //   Year: 2011,
    //   img: "https://m.media-amazon.com/images/M/MV5BMGEzNGFlYjUtYjRhYy00ZWI5LWI0N2ItMGY3ZThhZTAwZjY2L2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    // },
  ]);


  useEffect(()=>{
               async function getData(){
                setLoading(true);
                const _data=await getDocs(moviesRef);
                console.log(_data);
                _data.forEach((doc)=>{
                  setData((prv)=>[...prv,{...(doc.data()),id:doc.id }])
                })
                       
                setLoading(false);
                         
               }
               getData(); 

          },[])



  return (
    <>
    <div className="flex flex-wrap justify-between px-2 mt-1 ">
      {
             loading?<div className="w-full flex justify-center items-center min-h-screen "  > <ThreeDots height={40} color="white"/> </div> :
        data.map((e, i) => {
        return (
          < Link  to={`/detail/${e.id}`}    >
            <div key={i} className="card  shadow-lg p-1 hover:-translate-z hover:translate-y-2  cursor-pointer          mt-1        transition-all duration-500">
            <img   
              className="h-96 w-80 md:h-72" 
              src={e.image}
              alt="milkha"
            />
            <h1 className="text-xl  ml-3">
             {e.title}
            </h1>
            <h1 className="text-xl  ml-3 flex items-center  ">
              <span className="text-gray-500">Rating:</span> 
              <ReactStars 
                   size={20}
                   half={true}
                   value={e.rating/e.rated}
                   edit={false}
              />
            </h1>
            <h1 className="text-xl  ml-3">
              <span className="text-gray-500">Release Year:</span> {e.year}
            </h1>
          </div>
          </Link>
        );
      })
    }
    </div>
     <Footer/> 
    </>
  );
};

export default Card;

//  <div  className='card  shadow-lg p-1 hover:-translate-z   hover:translate-y-2  cursor-pointer'  >
//    <img  className='h-96 w-80'  src='https://preview.redd.it/fan-art-movie-poster-by-v0-ui4nnnq2f6ba1.jpg?auto=webp&s=7abc7901f37c33b840d57df877a65a17d99b5d86'    />
//   <h1 className='text-xl  ml-3'> <span className='text-gray-500'>Name:</span> Bhaag Milkha Bhaag</h1>
//   < h1 className='text-xl  ml-3'><span className='text-gray-500'>Rating:</span> 5</h1>
//   <h1 className='text-xl  ml-3'><span className='text-gray-500' >Release Year:</span> 2013 </h1>
//  </div>

//  <div  className='card  shadow-lg p-1 hover:-translate-z   hover:translate-y-2  cursor-pointer'  >
//    <img  className='h-96 w-80'src='https://www.telugubulletin.com/wp-content/uploads/2020/05/KGF-2.jpg' alt='milkha'    />
//   <h1 className='text-xl  ml-3'> <span className='text-gray-500'>Name:</span> Bhaag Milkha Bhaag</h1>
//   < h1 className='text-xl  ml-3'><span className='text-gray-500'>Rating:</span> 5</h1>
//   <h1 className='text-xl  ml-3'><span className='text-gray-500' >Release Year:</span> 2013 </h1>
//  </div>

//  <div  className='card  shadow-lg p-1 hover:-translate-z   hover:translate-y-2  cursor-pointer'  >
//    <img  className='h-96 w-80' src='https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg' alt='milkha'    />
//   <h1 className='text-xl  ml-3'> <span className='text-gray-500'>Name:</span> Bhaag Milkha Bhaag</h1>
//   < h1 className='text-xl  ml-3'><span className='text-gray-500'>Rating:</span> 5</h1>
//   <h1 className='text-xl  ml-3'><span className='text-gray-500' >Release Year:</span> 2013 </h1>
//  </div>

//  <div  className='card  shadow-lg p-1 hover:-translate-z   hover:translate-y-2  cursor-pointer'  >
//    <img  className='h-96 w-80' src='https://m.media-amazon.com/images/M/MV5BMGEzNGFlYjUtYjRhYy00ZWI5LWI0N2ItMGY3ZThhZTAwZjY2L2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg' alt='milkha'    />
//   <h1 className='text-xl  ml-3'> <span className='text-gray-500'>Name:</span> Bhaag Milkha Bhaag</h1>
//   < h1 className='text-xl  ml-3'><span className='text-gray-500'>Rating:</span> 5</h1>
//   <h1 className='text-xl  ml-3'><span className='text-gray-500' >Release Year:</span> 2013 </h1>
//  </div>
