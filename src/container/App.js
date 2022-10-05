import { AppWrapper } from "./App.style";
import { useReducer, useState, useMemo } from "react";
import UserNameInfo from "../pages/UserNameInfo";
import WorkspaceInfo from "../pages/WorkspaceInfo";
import SetupInfo from "../pages/SetupInfo";
import { CheckWrapper } from "./App.style";
import { ReactComponent as CheckIcon } from "../assets/check.svg";
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
    dispatch({ type: name, payload: value.charAt(0).toUpperCase() + value.slice(1) });
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
          <CheckWrapper>
            <CheckIcon />
          </CheckWrapper>
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
      <div
        style={{
          display: "grid",
          placeContent: "center",
        }}
      >
        {currentStep === maxSteps && displayContent()}
      </div>
      <ContentTitle
        ContentTitles={ContentTitles}
        currentStep={currentStep}
        name={data.userNameInfo.displayName}
        maxSteps={maxSteps}
        workspaceName={data.workspaceInfo.name}
      />
      <div
        style={{
          display: `${currentStep !== maxSteps ? `grid` : ``}`,
          placeContent: "center",
        }}
      >
        {currentStep !== maxSteps && displayContent()}
        <br />
        <Button
          currentStep={currentStep}
          ContentTitles={ContentTitles}
          handleNext={handleNext}
          handleSubmit={handleSubmit}
          data={data}
        />
      </div>
    </AppWrapper>
  );
}

export default App;
