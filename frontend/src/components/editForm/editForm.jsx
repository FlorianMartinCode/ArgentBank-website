import React, { useState } from 'react';
import { editUserService } from '../../service/userService';

function EditForm({ initialValues, onSave, onCancel }) {
  const [editedUserName, setEditedUserName] = useState(initialValues.userName || '');
  const token = localStorage.getItem('token');

  const handleSaveClick = async () => {
    if (!token) {
      console.error('Token is missing. Please log in to edit the user.');
      return;
    }

    try {
      const response = await editUserService(editedUserName, token);

      if (response.status === 200) {
        onSave({
          userName: editedUserName,
          firstName: initialValues.firstName,
          lastName: initialValues.lastName,
        });
      } else {
        console.error('Erreur lors de la mise à jour du userName', response);
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du userName', error);
    }
  };

  const handleCancelClick = () => {
    onCancel();
  };

  return (
    <div className="edit-form">
      <div className="form-group">
        <label>User Name:</label>
        <input
          type="text"
          placeholder="User Name"
          value={editedUserName}
          onChange={(e) => setEditedUserName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>First Name:</label>
        <input
          className='input-not-allowed'
          type="text"
          placeholder="First Name"
          value={initialValues.firstName || ''}
          readOnly
        />
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input
          className='input-not-allowed'
          type="text"
          placeholder="Last Name"
          value={initialValues.lastName || ''}
          readOnly
        />
      </div>
      <div className='form-btn'>
        <button className='form-btn-save' onClick={handleSaveClick}>Save</button>
        <button className='form-btn-cancel' onClick={handleCancelClick}>Cancel</button>
      </div>
    </div>
  );
}

export default EditForm;