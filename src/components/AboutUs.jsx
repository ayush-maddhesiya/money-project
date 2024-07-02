import React from 'react';
import './AboutUs.css'; // Make sure to create this CSS file

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <h2>Who We Are & What We Do...?</h2>
        <h1>Symbol Of Wealth</h1>
        <p>Moneyplant Investment Advisor is an organization of young, certified, equipped and dynamic professionals who have mastered the financial market and redefined trading patterns with their innovative approach.</p>
        <p>Our dedicated research team carries out intensive technical research in the domestic financial market which is blended with the possible impact of global and domestic fundamentals.</p>
        <p>
          <span role="img" aria-label="dedicated team">👍</span> Dedicated Team | 
          <span role="img" aria-label="best advisors">👍</span> Best Advisors | 
          <span role="img" aria-label="24/7 supports">👍</span> 24/7 Supports
        </p>
      </div>
      <div className="about-us-image">
        <img src="https://images.unsplash.com/photo-1590650046871-92c887180603?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMG1lZXRpbmd8ZW58MHx8MHx8fDA%3D" alt="Team Meeting" />
      </div>
    </div>
  );
};

export default AboutUs;
