import { ACTIONS } from "../constants/constants"

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_NAME:
      return {
        ...state, userNameInfo: { ...state.userNameInfo, name: action.payload }
      }
    case ACTIONS.SET_DISPLAY_NAME:
      return {
        ...state, userNameInfo: { ...state.userNameInfo, displayName: action.payload }
      }
    case ACTIONS.SET_WORKSPACE:
      return {
        ...state, workspaceInfo: { ...state.workspaceInfo, name: action.payload }
      }
    case ACTIONS.SET_WORKSPACE_URL:
      return {
        ...state, workspaceInfo: { ...state.workspaceInfo, url: action.payload }
      }
    case ACTIONS.SET_SETUP:
      return {
        ...state, setup: action.payload
      }
    default:
      return state
  }
}