import React from 'react'
import './benefit.css'
import SlideOne from '../../../assets/img/benefit-image1.jpg'
import SlideTwo from '../../../assets/img/benefit-iamge2.jpg'
import SlideThree from '../../../assets/img/benefit-image3.jpg'
import BenefitLogo from '../../../assets/img/logo-benefit.png'
import BenefitItem from '../../base/benefit-item/benefit-item'

export default function Benefit() {
  return (
    <div className='benefit-container'>
      <img className='benefit-logo' src={BenefitLogo} alt="benefit-logo" />
      <h1 className='benefit-text-container'>JOIN OUR CREW & ENJOY THE BENEFITS</h1>
      <div className='benefit-boxs'>
        <BenefitItem image={SlideOne} text={'FIRST MOVER  ADVANTAGE'} title={"With a proven concept in some of the most competitive markets, Row House is a leading boutique fitness brand in an underserved market where there is a need for effective & efficient low-impact workouts - pioneer the community-based workout in your desired markets!"} />
        <BenefitItem image={SlideTwo} text={'SMART   INVESTMENT'} title={"Not only does Row House attract a broad range of members to market to, but you can also enjoy a low-cost entry, a recurring revenue model, strong EBITDA margins, and the confidence in our team that has decades of experience in fitness franchising. We know how to grow household name brands."} />
        <BenefitItem image={SlideThree} text={'EXECUTIVE MODEL'} title={"Our franchise model provides a completely scalable business, allowing you to determine your own success. Leverage development costs and national vendor relationships to launch your studio successfully."} />
      </div>
    </div>
  )
}

