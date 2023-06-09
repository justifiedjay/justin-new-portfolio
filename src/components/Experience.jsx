import React from 'react'

import html from "../assets/html.png"
import css from "../assets/css.png"
import reactimage from "../assets/portfolio/reactimage.png"
import javascript from "../assets/javascript.png"
import tailwind from "../assets/tailwind.png"
import jquery1 from "../assets/portfolio/jquery1.png"
import github from "../assets/github.png"
import nextjs from "../assets/nextjs.png"

const Experience = () => {

    const techs = [
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src: reactimage,
            title: 'REACT',
            style: 'shadow-blue-600'
        },
        
        {
            id:6,
            src: jquery1,
            title: 'JQuery',
            style: 'shadow-blue-400'
        },
        {
            id:7,
            src: github,
            title: 'GITHUB',
            style: 'shadow-gray-500'
        },
       
    ]


  return (
 
        <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>

            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-items-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are the Application Softwares I have worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-col-3 gap-8 text-center py-8 px-12 sm:px-8'>

                    
                    {techs.map(({ id, src, title, style }) => (      
                        <div 
                            key={id} className={'shadow-md hover:scale-105 duration-300 py-2 rounded-lg $"style"'}>
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>

                        ))
                    }

                    
                </div>
            </div>

        </div>
     );
};

export default Experience