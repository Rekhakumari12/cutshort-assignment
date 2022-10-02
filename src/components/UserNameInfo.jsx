import React from 'react';
import { ACTIONS } from '../constants/constants';


const UserNameInfo = ({ handleChange, data }) => {
  return (
    <div>
      <div>
        <label>Full Name</label>
        <input type="text" placeholder="steve jobs" onChange={handleChange} defaultValue={data.name} name={ACTIONS.SET_NAME} /><br />
        <label>Display Name</label>
        <input type="text" placeholder="steve" onChange={handleChange} defaultValue={data.displayName} name={ACTIONS.SET_DISPLAY_NAME} />
      </div>
    </div>
  );
}

export default UserNameInfo;
