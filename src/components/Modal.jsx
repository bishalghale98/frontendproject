/* eslint-disable react/prop-types */
const ConfirmDeleteModal = ({ isOpen, onClose, onDelete, name }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-sm w-full">
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Confirm Delete
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Are you sure you want to delete <strong>{name}</strong>?
          </p>
        </div>
        <div className="px-6 py-4 bg-gray-100 dark:bg-gray-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors mr-2"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export { ConfirmDeleteModal };
