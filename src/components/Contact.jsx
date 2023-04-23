import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>

        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to contact me.</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/5df3c156-2ad3-4548-887b-3d5343fec181" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name"placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <input type="text" name="email"placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <textarea name="message" placeholder='Enter your message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from bg-cyan-600 to-blue-600 rounded-md hover:scale-110 duration-500'>Lets Chat</button>
                </form>
            </div>

        </div>



    </div>
  )
}

export default Contact