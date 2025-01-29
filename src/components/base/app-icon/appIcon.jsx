import React from 'react';
import './appIcon.css';

const AppIcon = ({ href, src, alt }) => {
  return (
    <a href={href}>
      <img className="app-icon" src={src} alt={alt} />
    </a>
  );
};

export default AppIcon;
