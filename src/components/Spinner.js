import React, { Component } from 'react'
import loading1 from './loading.gif'

const Spinner = () =>{

    return (
      <div className='text-center'>
        <img src={loading1} alt="loading" />
      </div>
    )
  
}

export default Spinner
