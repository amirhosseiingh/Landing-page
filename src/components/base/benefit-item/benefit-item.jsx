import React from 'react'
import './BenefitItem.css'
export default function BenefitItem(props) {
  const {text , image , title} = props
  return (
    <div className='benefit-item-container'>
      <img src={image} alt="image-benefit" />
      <h2 className='benefit-item-text'>{text}</h2>
      <p className='benefit-item-title'>{title}</p>
    </div>
  )
}
