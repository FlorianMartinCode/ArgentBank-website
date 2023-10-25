import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/reducer/userReducer';
import EditForm from '../../components/editForm/editForm';

function Dashboard() {
  const { userName, firstName, lastName } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveName = (editedValues) => {
    const { userName } = editedValues;
    dispatch(setUser({ userName, firstName, lastName }));
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
      <h1>Welcome back<br />{userName}</h1>
        {!isEditing ? (
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        ) : null
        }
      </div>
      {isEditing && (
        <EditForm initialValues={{userName, firstName, lastName}} onSave={handleSaveName} onCancel={handleCancelEdit} />
      )}
      <section className='account-content'>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Dashboard;