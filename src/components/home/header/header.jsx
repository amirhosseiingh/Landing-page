import React from 'react';
import './header.css';
import Logo from '../../../assets/img/logo.webp';
export default function Header() {
  return (
    <div className="container">
      <img className="header-logo" src={Logo} alt="" />
      <div className="header-title">
        <h1 className="header-caption">FIRST CLASS FREE</h1>
        <div className="text-box">
          <p className="header-first-text">
            Join us for a full-body workout that combines low-impact cardio,
            strength training, stretching, and rhythm-based rowing. Whether
            you're new to rowing or an experienced group fitness pro, Row House
            classes are designed to elevate your fitness level on and off the
            rower.
          </p>
          <p className="header-second-text">
            Plus, you'll be welcomed into the Row House Crew – a vibrant
            community of motivating coaches and energetic members who will
            ignite your passion and drive you to crush your goals. Book your
            first class now, and let's #pulltogether!
          </p>
        </div>
      </div>
    </div>
  );
}
