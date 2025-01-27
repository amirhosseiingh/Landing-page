import React from 'react'
import '../main/main.css'
import Image from '../../../assets/img/cart2-img.jpg'
export default function Cart() {
    
  return (
    <div className='cart-container'>
      <div>
        <img className='img-cart' src={Image} alt="" />
      </div>
      <ul  className='benefits-offer'>
        <li className='title-benefit'><h3>Membership Discounts:</h3> Special membership plans with exclusive discounts for long-term commitments.</li>
        <li className='title-benefit'><h3>Free Trial Session:</h3> First workout session free with a professional trainer.</li>
        <li className='title-benefit'><h3>Free Workshops:</h3> Access to free educational workshops on nutrition and wellness.</li>
        <li className='title-benefit'><h3>Special Training Programs:</h3> Discounted or free training programs for new members.</li>
        <li className='title-benefit'><h3>Improved Health:</h3> Increased energy levels, better mood, and reduced stress.</li>
      </ul>
    </div>
  )
}
