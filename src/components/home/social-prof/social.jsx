import React from 'react';
import './social.css';
import Box from '../../base/social-box/box';
import Cardio from '../../../assets/img/cardio.webp';
import FullBody from '../../../assets/img/full_body.webp';
import LowImpact from '../../../assets/img/low_impact.webp';
import AllLevels from '../../../assets/img/all_levels.webp';
export default function Social() {
  return (
    <>
      <h1 className='social-text'>
        SAY GOODBYE TO BORING WORKOUTS AND HELLO TO ROWING INSPIRED FITNESS
      </h1>
      <div className="social-container">
        <Box img={Cardio} text="CARDIO WORKOUT" />
        <Box img={FullBody} text="FULL BODY" />
        <Box img={LowImpact} text="LOW-IMPACT" />
        <Box img={AllLevels} text="ALL LEVELS" />
      </div>
    </>
  );
}

