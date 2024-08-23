/* eslint-disable react/prop-types */
// Profile.jsx

const Profile = ({ id, name, email, roles }) => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
        User Profile
      </h2>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-700">ID:</span>
          <span className="text-gray-600">{id}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-700">Name:</span>
          <span className="text-gray-600">{name}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-700">Email:</span>
          <span className="text-gray-600">{email}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-700">Roles:</span>
          <span className="text-gray-600">{roles}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
