import React from 'react';
import { ACTIONS } from '../constants/constants';
import { SetupWrapper } from '../container/App.style';
import { ReactComponent as UserIcon } from '../assets/user.svg';
import { ReactComponent as TeamIcon } from '../assets/team.svg';
const SetupInfo = ({ handleChange, data }) => {
  console.log(data)
  return (
    <SetupWrapper>
      <label className={`card ${data === 'forMe' && 'active'}`}>
        <UserIcon />
        <h3>For myself</h3>
        <p>Write better. Think more clearly. Stay orgnized.</p>
        <input type='radio' onChange={handleChange} name={ACTIONS.SET_SETUP} data-setup={'forMe'} />
      </label>
      <label className={`card ${data === 'forTeam' && `active`}`}>
        <TeamIcon />
        <h3>With my team</h3>
        <p>Wikis, docs, tasks & projects, all in one place.</p>
        <input type='radio' onChange={handleChange} name={ACTIONS.SET_SETUP} data-setup={'forTeam'} />
      </label>
    </SetupWrapper>
  );
}

export default SetupInfo;
