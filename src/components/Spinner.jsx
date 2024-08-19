const LoginSpinner = () => {
  return (
    <div className="size-7 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
  );
};

const ProductListSpinner = () => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute animate-spin rounded-full size-72 border-t-4 border-b-4 border-purple-500"></div>
      <img
        src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
        className="rounded-full size-72"
      />
    </div>
  );
};

export { LoginSpinner, ProductListSpinner };
