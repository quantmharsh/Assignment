import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'
import LogIn from './LogIn'

const Welcome = () => {
  return (
    <>
      {/* <div className="flex justify-center items-center bg-slate-800"> */}
        {/* <SignUp /> */}
        <LogIn/>
      {/* </div> */}
    </>
  )
}

export default Welcome