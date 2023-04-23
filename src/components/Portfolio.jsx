import React from 'react'

import todo from '../assets/portfolio/todo.jpg'
import weather from '../assets/portfolio/weather.jpg'
import port from '../assets/portfolio/port.jpg'
import calculator from '../assets/portfolio/calculator.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'




const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: calculator 
        },
        {
            id: 2,
            src: weather
        },
        {
            id: 3,
            src: reactParallax 
        },
        {
            id: 4,
            src: todo 
        },
        {
            id: 5,
            src: port 
        },
        {
            id: 6,
            src: reactWeather 
        },
    
    ]



  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-500 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work here.</p>
            </div>

    
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8'> 
            {
                portfolios.map(({id, src}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-300 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </div>

                    </div>
                ))
            }

            </div>
                    
                
            

                
        </div>
    </div>
  )
}

export default Portfolio;