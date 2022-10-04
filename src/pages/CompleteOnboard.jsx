import React from 'react';
import { ReactComponent as CheckIcon } from '../assets/check.svg'
import { CheckWrapper } from '../container/App.style';
const CompleteOnboard = ({ userName, currentStep, workplaceName }) => {
  return (
    <CheckWrapper>
      <CheckIcon />
    </CheckWrapper>
  );
}

export default CompleteOnboard;
