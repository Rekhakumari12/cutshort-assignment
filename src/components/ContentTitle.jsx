import React from 'react';

const ContentTitle = ({ ContentTitles, currentStep, name, maxSteps, workspaceName }) => {
  console.log(name)
  return (
    <div className="contentTitle">
      <h2>{ContentTitles[currentStep - 1].text}{", " + (currentStep === maxSteps && name) + "!"}</h2>
      <span>{ContentTitles[currentStep - 1].subtitle}{" the " + (currentStep === maxSteps && workspaceName) + "!"}</span>
    </div>
  );
}

export default ContentTitle;
