import React from 'react';
import { ACTIONS } from '../constants/constants';
import Input from '../components/Input';
import { InputWrapper } from '../container/App.style';

const UserNameInfo = ({ handleChange, data }) => {
  return (
    <InputWrapper>
      <Input name={ACTIONS.SET_NAME} handleChange={handleChange} value={data.name} label={`Full Name`} placeholder={'Steve Jobs'} />
      <Input name={ACTIONS.SET_DISPLAY_NAME} handleChange={handleChange} value={data.displayName} label={`Display Name`} placeholder={'Steve'} />
    </InputWrapper>
  );
}

export default UserNameInfo;
