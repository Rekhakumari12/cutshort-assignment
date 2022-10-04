import { AppWrapper } from "./App.style";
import { useReducer, useState, useMemo } from "react";
import UserNameInfo from "../pages/UserNameInfo";
import WorkspaceInfo from "../pages/WorkspaceInfo";
import SetupInfo from "../pages/SetupInfo";
import CompleteOnboard from "../pages/CompleteOnboard";
import { reducer } from "../reducer/reducer";
import InitialState from "../InitialState";
import { ContentTitles } from "../constants/constants";
import debounce from "../utils/debounce";
import Header from "../components/Logo";
import generateSteps from "../utils/generateSteps";
import StepProgress from "../components/StepProgress";
import Button from "../components/Button";
import ContentTitle from "../components/ContentTitle";
function App() {
  const [currentStep, currentSetStep] = useState(1);
  const [data, dispatch] = useReducer(reducer, InitialState);
  const maxSteps = 4;
  const steps = useMemo(() => generateSteps(maxSteps), []);
  const handleNext = () => {
    if (currentStep < maxSteps) currentSetStep((prev) => prev + 1);
  };

  const handleChange = (e) => {
    let { name, value, dataset } = e.target;
    if (dataset.setup) value = dataset.setup;
    dispatch({ type: name, payload: value });
  };

  const debounceFunction = debounce(handleChange, 300);

  const displayContent = () => {
    const { userNameInfo, workspaceInfo, setup } = data;
    switch (currentStep) {
      case 1:
        return (
          <UserNameInfo handleChange={debounceFunction} data={userNameInfo} />
        );
      case 2:
        return (
          <WorkspaceInfo handleChange={debounceFunction} data={workspaceInfo} />
        );
      case 3:
        return <SetupInfo handleChange={handleChange} data={setup} />;
      case 4:
        return (
          <CompleteOnboard
            userName={userNameInfo.name}
            currentStep={currentStep}
            workplaceName={workspaceInfo.name}
          />
        );
      default:
        return (
          <UserNameInfo handleChange={debounceFunction} data={userNameInfo} />
        );
    }
  };
  const handleSubmit = () => {
    alert("Form submitted, to see data check console");
    console.log(data);
  };

  return (
    <AppWrapper>
      <Header />
      <StepProgress currentStep={currentStep} steps={steps} />
      {currentStep === maxSteps && displayContent()}
      <ContentTitle ContentTitles={ContentTitles} currentStep={currentStep} />
      {currentStep !== maxSteps && displayContent()}
      <br />
      <Button
        currentStep={currentStep}
        ContentTitles={ContentTitles}
        handleNext={handleNext}
        handleSubmit={handleSubmit}
        data={data}
      />
    </AppWrapper>
  );
}

export default App;
