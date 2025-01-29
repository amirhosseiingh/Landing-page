import React from 'react'
import './address.css'
import AppIcon from '../../base/app-icon/appIcon'
import Ig from '../../../assets/icons/instagram-svgrepo-com.svg'
import Tl from '../../../assets/icons/telegram-fill-svgrepo-com.svg'
import Fb from '../../../assets/icons/facebook-square-svgrepo-com.svg'
import Tw from '../../../assets/icons/twitter-svgrepo-com.svg'
export default function Address() {
  return (
    <div className='address-container'>
      <h2 className='address-text'>Address</h2>
      <div className='address-box'>
        <p  className='address-title'>433 Florentine Dr.</p>
        <p  className='address-title'>Longmont</p>
        <p  className='address-title'>CO 850346 </p>
      </div>
      <div className='address-logo'>
        <AppIcon href={"#"} src={Ig}/>
        <AppIcon href={"#"} src={Tl}/>
        <AppIcon href={"#"} src={Fb}/>
        <AppIcon href={"#"} src={Tw}/>
      </div>
    </div>
  )
}
