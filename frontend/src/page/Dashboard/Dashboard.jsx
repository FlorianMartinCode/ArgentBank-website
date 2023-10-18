import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFirstName, setLastName, setUserName } from '../../redux/reducer/userReducer';
import EditForm from '../../components/editForm/editForm';

function Dashboard() {
  const userName = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveName = (editedValues) => {
    dispatch(setUserName(editedValues.userName));
    dispatch(setFirstName(editedValues.firstName));
    dispatch(setLastName(editedValues.lastName));
    

    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{userName.userName}</h1>
        {!isEditing ? (
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        ) : null
        }
      </div>
      {isEditing && (
        <EditForm initialValues={userName} onSave={handleSaveName} onCancel={handleCancelEdit} />
      )}
      <section className='account-content'>
        <section className="account">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </section>
        <section className="account">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </section>
        <section className="account">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </section>
      </section>
    </main>
  );
}

export default Dashboard;