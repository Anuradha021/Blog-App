import { useState } from 'react';
import { databases } from '../config';

const EditProfile = () => {
   const [username, setUsername] = useState('');
   const [bio, setBio] = useState('');

   const userId = "your_logged_in_user_id";  // Get from Appwrite's session.

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         await databases.updateDocument('YOUR_DATABASE_ID', 'user_profiles', userId, {
            username,
            bio
         });
         alert('Profile updated!');
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
         />
         <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Short Bio"
         />
         <button type="submit">Update Profile</button>
      </form>
   );
};

export default EditProfile;
