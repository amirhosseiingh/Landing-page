import React from 'react'
import './box.css'
export default function Box(props) {
    const {img , text} = props
  return (
    <div className='box-container'>
      <img className='img-box' src={img} alt='img' />
      <p className='text-box'>{text}</p>
    </div>
  )
}
