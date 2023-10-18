import { setFirstName, setLastName, setUserName } from "../reducer/userReducer";

export const userAction = () => async (dispatch) => {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });

    if (response.ok) {
      const data = await response.json() 
      .then (data => {
          dispatch( setFirstName(data.body.firstName));
          dispatch( setLastName(data.body.lastName));
          dispatch( setUserName(data.body.userName));
        })
      return data;
    } else {
        throw new Error("Error user not found !");
      }
    } catch (error) {
      console.error(error);
    }
};