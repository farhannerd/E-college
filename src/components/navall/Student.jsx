import React, { useState } from 'react'

const Student = () => {
  const [test,setTest]=useState(true)
  const formok=(e)=>{
    e.preventDefault()
  }
  const formad=(e)=>{
    e.preventDefault()
  }
  return (
    <div>
      {/* <div className=' flex justify-center items-center px-0 sm:px-3 mb-2'>
    <div className=' container mt-2 mx-3 ' >
        <div className=' overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center '>
            <div className=' container pb-8 sm:pb-0'>
              
            {test?<form action="" onSubmit={formok}>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="email" autoComplete='off'/>
              </div>

              <div>
                <label htmlFor="password">password</label>
                <input type="text" id="password" name="password" placeholder="password" autoComplete='off'/>
              </div>

              <button className=' cursor-pointer bg-orange-400'>submit</button>
              <button className=' cursor-pointer bg-red-500' onClick={()=>setTest(false)}>new register</button>
            </form>:
            <form action="" onSubmit={formad}>
            <div>
              <label htmlFor="name">name</label>
              <input type="text" id="name" name="name" placeholder="name" autoComplete='off' />
            </div>

            <div>
              <label htmlFor="password">roll</label>
              <input type="number" id="roll" name="roll" placeholder="roll" autoComplete='off'/>
            </div>

            <button className=' cursor-pointer bg-orange-400' onClick={()=>setTest(true)}>submit</button>
            
          </form>
            }
            </div> 
        </div>
    </div>
    </div> */}
    Student LogIn
    </div>
  )
}

export default Student