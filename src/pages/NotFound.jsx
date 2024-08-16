const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto p-8 text-center flex flex-col items-center justify-center">
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg"
          alt="404 Not Found"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto mb-8"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-600 dark:text-slate-300 mb-4">
          404 Not Found
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold dark:text-white">
          Whoops! That page doesn’t exist.
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
