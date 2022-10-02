import React from 'react';
import { ACTIONS } from '../constants/constants';

const SetupInfo = ({ handleChange }) => {
  return (
    <div>
      <div>
        <label>
          <p>For myself</p>
          <span>Write better. Think more clearly. Stay orgnized.</span>
          <input type='radio' onChange={handleChange} name={ACTIONS.SET_SETUP} data-setup={'forMe'} />
        </label>
      </div>
      <div>
        <label>
          <p>With my team</p>
          <span>Wikis, docs, tasks & projects, all in one place.</span>
          <input type='radio' onChange={handleChange} name={ACTIONS.SET_SETUP} data-setup={'forTeam'} />
        </label>
      </div>
    </div>
  );
}

export default SetupInfo;
