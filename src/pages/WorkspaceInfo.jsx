import React from 'react';
import { ACTIONS } from '../constants/constants';
import Input from '../components/Input';
import { InputWrapper } from '../container/App.style';
const WorkspaceInfo = ({ handleChange, data }) => {
  return (
    <InputWrapper>
      <Input name={ACTIONS.SET_WORKSPACE} handleChange={handleChange} value={data.name} label={`Workspace Name`} placeholder={'Eden'} type="text" />
      <Input name={ACTIONS.SET_WORKSPACE_URL} handleChange={handleChange} value={data.url} label={`Workspace URL`} type="text" withUrl={true} placeholder={'Eden'} />
    </InputWrapper>
  );
}

export default WorkspaceInfo;
