import React from 'react';

const SocialIcons = ({Icons}) => {
  return (
    <div   >
         
            {/* // Icons.map(icon=>(
            //     <span  key={icon.name}  className='p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300 ' >
            //        {icon.name} 
            //     </span>
            // )) */}

           < ul className="   p-2 cursor-pointer inline-flex items-center  text-xl hover:text-gray-100  duration-300   ">
            <a   href="https://www.facebook.com/people/Rajesh-Kumar-Kumar/100087345057063/" className='mr-2' ><i class="fa-brands fa-facebook " ></i></a>

            <a href="https://www.linkedin.com/in/rajesh-kumar-72a573254/" className='mr-2' ><i class="fa-brands fa-linkedin"></i></a>

            <a href="https://www.instagram.com/rajesh_98146/" className='mr-2' ><i class="fa-brands fa-instagram"></i></a>
            {/* <a href="#"><i class="fa-brands fa-github"></i></a> */}
            <a href="https://www.youtube.com/" className='mr-2' ><i class="fa-brands fa-youtube"></i></a>

        </ul>

         
    </div>
  )
}

export default SocialIcons;