import React from 'react';
import heroimage from '../assets/heroimage.jpg';
import {MdKeyboardArrowRight} from 'react-icons/md';
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-500'>

      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl md:text-4xl lg:text-5xl font-bold text-white'>
            I'm a Frontend Web Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
          I am a Front-end Web Developer with 3 years of experience developing and designing websites and webpages. I can provide clean code and pixel perfect design using HTML, CSS, React.js, TailwindCSS, Jquery and JavaScript.
          </p>

          <div>
            <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-500 to-pink-400 cursor-pointer'>
              Portfolio 
              <span className='group-hover:rotate-90 duration-500'>
                <MdKeyboardArrowRight size={35} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={heroimage} alt="my profile" className='rounded-2xl mx-auto w-2/5 md:w-small' />
        </div>
      </div>

    </div>
  );
  
};

export default Home;