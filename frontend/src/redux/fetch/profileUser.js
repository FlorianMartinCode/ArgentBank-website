import { receiveProfile } from "../reducer/actions/userAction";

export const fetchProfileUser = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("loginToken")}`,
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(receiveProfile(data.body))
      return data
    } else {
      throw new Error("Error user not found !");
    }
  } catch (error) {
    console.error(error);
  }
};