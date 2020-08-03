import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import coachIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import './styles.css';

const Landing = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="CoachList" />
          <h2>The right place to find your coach</h2>
        </div>
        <img src={landingImg} alt="Coach List" className="hero-image" />
        <div className="buttons-container">
          <a href="#" className="study">
            <img src={studyIcon} alt="Get Help" />
            Get Help
          </a>
          <a href="#" className="give-classes">
            <img src={coachIcon} alt="I'm a Coach" />
            I'm a coach
          </a>
        </div>
        <span className="total-connections">
          200 connections already made <img src={purpleHeartIcon} alt="connections" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
