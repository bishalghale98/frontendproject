/* eslint-disable react/prop-types */
// Profile.jsx

const Profile = ({ id, name, email, roles }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg dark:bg-gray-900">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center dark:text-gray-100 border-b-4 border-indigo-500 pb-2">
        User Profile
      </h2>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4">
          <span className="font-semibold text-lg text-gray-700 dark:text-gray-300">
            ID:
          </span>
          <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2 sm:mt-0">
            {id}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4">
          <span className="font-semibold text-lg text-gray-700 dark:text-gray-300">
            Name:
          </span>
          <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2 sm:mt-0">
            {name}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4">
          <span className="font-semibold text-lg text-gray-700 dark:text-gray-300">
            Email:
          </span>
          <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2 sm:mt-0 break-all">
            {email}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4">
          <span className="font-semibold text-lg text-gray-700 dark:text-gray-300">
            Roles:
          </span>
          <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2 sm:mt-0">
            {roles.join(", ")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
