import React from 'react';
import { ProgressBar, Bullet, StepProgressWrapper } from '../container/App.style';

const StepProgress = ({ currentStep, steps }) => {
  const width = (100 / steps.length) * currentStep;
  return (
    <StepProgressWrapper>
      <ProgressBar className="border-solid border border-t-0 w-9/12 m-auto">
        <div
          style={{ width: `${width}%` }}
          className="border-solid border border-t-0"
        ></div>
      </ProgressBar>
      <ul className="flex justify-evenly py-14">
        {steps.map((step) => {
          return (
            <Bullet
              key={step}
              className={`border-solid border-2 rounded-full p-3 ${currentStep >= step ? `active` : ""
                }`}
            >
              <span>{step}</span>
            </Bullet>
          );
        })}
      </ul>
    </StepProgressWrapper>
  );
}

export default StepProgress;
