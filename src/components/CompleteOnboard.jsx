import React from 'react';
import { FormTitles } from '../constants/constants';

const CompleteOnboard = ({ userName, currentStep, workplaceName }) => {
  return (
    <div>
      <h2>{`${FormTitles[currentStep - 1].text}, ${userName}!`}</h2>
      <span>{`${FormTitles[currentStep - 1].subtitle} ${workplaceName}!`}</span>
    </div>
  );
}

export default CompleteOnboard;
