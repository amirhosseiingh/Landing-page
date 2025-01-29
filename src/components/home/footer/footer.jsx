import React from 'react';
import './footer.css';
import Services from '../services/services';
import Company from '../company/company';
import Support from '../../support/support';
import Address from '../address/address';
export default function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-items-container">
        <Services />
        <Company />
        <Support />
        <Address />
      </div>
      <p className='footer-text'>&copy; 2025 My ROW HOUSE Company. All rights reserved.</p>

    </div>
  );
}
