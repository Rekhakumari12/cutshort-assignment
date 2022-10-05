import React from 'react';
import { ACTIONS } from '../constants/constants';
import { SetupWrapper } from '../container/App.style';
import { ReactComponent as UserIcon } from '../assets/user.svg';
import { ReactComponent as TeamIcon } from '../assets/team.svg';
const SetupInfo = ({ handleChange, data }) => {
  return (
    <SetupWrapper>
      <label className={`card ${data === 'ForMe' && 'active'}`}>
        <UserIcon />
        <h3>For myself</h3>
        <p>Write better. Think more clearly. Stay orgnized.</p>
        <input type='radio' onChange={handleChange} name={ACTIONS.SET_SETUP} data-setup={'ForMe'} />
      </label>
      <label className={`card ${data === 'ForTeam' && `active`}`}>
        <TeamIcon />
        <h3>With my team</h3>
        <p>Wikis, docs, tasks & projects, all in one place.</p>
        <input type='radio' onChange={handleChange} name={ACTIONS.SET_SETUP} data-setup={'ForTeam'} />
      </label>
    </SetupWrapper>
  );
}

export default SetupInfo;
