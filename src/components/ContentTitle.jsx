import React from 'react';

const ContentTitle = ({ ContentTitles, currentStep }) => {
  return (
    <div className="contentTitle">
      <h2>{ContentTitles[currentStep - 1].text}</h2>
      <span>{ContentTitles[currentStep - 1].subtitle}</span>
    </div>
  );
}

export default ContentTitle;
