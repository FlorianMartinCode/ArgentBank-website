export const editUserAction = async (editedUserName, token) => {
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
  