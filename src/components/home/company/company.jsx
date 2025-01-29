import React from 'react';
import './company.css'
export default function Company() {
  return (
    <div className="company-container">
      <h2 className="company-text">Company</h2>
      <div className="company-box">
        <a href="#" className="services-title">
          About
        </a>
        <a href="#" className="company-title">
          Blog
        </a>
        <a href="#" className="company-title">
         Terms & Conditions
        </a>
        <a href="#" className="company-title">
         Privacy Policy
        </a>
      </div>
    </div>
  );
}
