import React from 'react';
import { ACTIONS } from '../constants/constants';

const WorkspaceInfo = ({ handleChange, data }) => {
  return (
    <div>
      <label>Workspace Name</label>
      <input type="text" onChange={handleChange} defaultValue={data.name} name={ACTIONS.SET_WORKSPACE} /><br />
      <label>Workspace URL</label>
      <input type="text" onChange={handleChange} defaultValue={data.url} name={ACTIONS.SET_WORKSPACE_URL} />
    </div>
  );
}

export default WorkspaceInfo;
