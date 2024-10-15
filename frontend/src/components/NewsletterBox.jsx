import React from 'react'

const NewsletterBox = () => {

  const onSubmitHandler = (event) =>{
    event.preventDefault();
  }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates eveniet provident.</p>
      <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto border my-6 pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' />
        <button type='submit' className='bg-black text-white text-xs py-2'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox