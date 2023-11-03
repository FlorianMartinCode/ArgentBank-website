export const userService = () => async () => {
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
        return data;
      } else {
        throw new Error('Erreur utilisateur non trouvé!');
      }
    } catch (error) {
      console.error(error);
    }
};

export const editUserService = async (editedUserName, token) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName: editedUserName }),
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Erreur lors de la mise à jour du nom d\'utilisateur');
    }
  } catch (error) {
    console.error(error);
  }
};
