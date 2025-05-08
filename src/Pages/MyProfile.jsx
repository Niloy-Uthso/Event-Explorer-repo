import React, { useContext, useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { valueContext } from '../Rootlayout';

const MyProfile = () => {
  const { currentUser,forceSetCurrentUser } = useContext(valueContext);

  // Controlled input state
  const [name, setName] = useState(currentUser?.displayName || '');
  const [photoURL, setPhotoURL] = useState(currentUser?.photoURL || '');
  const [success, setSuccess] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL
      });
      forceSetCurrentUser(auth.currentUser);
      // Optional: force re-render by updating state or navigating
      setSuccess('Profile updated successfully!');
    } catch (err) {
      console.error('Update failed:', err);
      setSuccess('Failed to update profile.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow bg-base-100">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      {success && <p className="mb-4 text-green-500">{success}</p>}

      <div className="mb-4">
        <img
          src={currentUser?.photoURL || 'https://via.placeholder.com/100'}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-2"
        />
        <p><strong>Name:</strong> {currentUser?.displayName}</p>
      </div>

      <form onSubmit={handleUpdate}>
        <label className="label">Name</label>
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="label">Photo URL</label>
        <input
          type="url"
          className="input input-bordered w-full mb-4"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />

        <button type="submit" className="btn btn-primary w-full">Save Changes</button>
      </form>
    </div>
  );
};

export default MyProfile;
