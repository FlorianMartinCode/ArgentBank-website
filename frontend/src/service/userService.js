import { setUser } from "../redux/reducer/userReducer";

export const userService = () => async (dispatch) => {
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
        const data = await response.json();
        dispatch(setUser(data.body));
        return data;
      } else {
        throw new Error('Error user not found!');
      }
    } catch (error) {
      console.error(error);
    }
  };

export const editUserService = async (editedUserName, token) => {
    try {
      await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName: editedUserName }),
      });
    } catch (error) {
      console.error('Erreur lors de la mise à jour du userName', error);
      throw error;
    }
};