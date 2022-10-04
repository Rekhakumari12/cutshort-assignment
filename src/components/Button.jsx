import React from 'react';

const Button = ({ currentStep, ContentTitles, handleNext, handleSubmit, data }) => {
  return (
    <button
      type="submit"
      onClick={currentStep !== ContentTitles.length ? handleNext : handleSubmit}
      className="border p-3 rounded text-white"
      style={{ backgroundColor: `var(--purple)` }}
    >
      {currentStep !== ContentTitles.length
        ? `Create Workplace`
        : `Launch ${data.workspaceInfo.name}`}
    </button>
  );
}

export default Button;
