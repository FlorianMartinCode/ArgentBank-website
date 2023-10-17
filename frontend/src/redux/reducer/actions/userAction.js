import { RECEIVE_PROFILE, UPDATE_USERNAME } from "../../reducer/profileUser";

export const receiveProfile = (profileData) => ({
  type: RECEIVE_PROFILE,
  payload: profileData,
});

export const updateUsername = (newUsername) => ({
  type: UPDATE_USERNAME,
  payload: newUsername,
});