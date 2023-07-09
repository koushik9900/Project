import React, { useState } from 'react'

 const Register = ({setForm}) => {
  
  return (
    <div className='fromBackground'>
      <div className='formContainer'>
        <button onClick={()=>setForm(false)}>X</button>
        <div className='formTitle'>
          <h1>Register to SwipTory</h1>
        </div>
        <div className='formDetails'>
          {/* <input  placeholder='Username'>UserName</input> */}
          {/* <input  placeholder='Password'>Password</input> */}
          <button onClick={()=>setForm(false)} >Submit</button>
        </div>
      </div>
    </div>
  )
};
export default Register;