import React from 'react'
import Header from './header/header'
import Main from './main/main'
import Social from './social-prof/social'
import Benefit from './workOut/benefit'
import Offer from './offer/offer'
import Footer from './footer/footer'
export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Social />
      <Benefit />
      <Offer />
      <Footer />
    </div>
  )
}
