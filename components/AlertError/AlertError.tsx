import React, {useCallback} from 'react';
import {HTTP_CODE_STATUSES} from '../../config/HTTP_CODE_STATUS';
import RocketDevSvg from '../SVG/LogoSvg';

interface AlertErrorProps {
  message?: string;
  httpStatusCode?: number;
}

const AlertError: React.FC<AlertErrorProps> = ({message, httpStatusCode}) => {
  const refreshPage = useCallback(() => {
    window.location.reload();
  }, []);

  const httpError = HTTP_CODE_STATUSES.find(
    (status) => status.code == (httpStatusCode || '')
  );

  return (
    <div className="min-h-full pt-16 pb-12 flex flex-col">
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex justify-center">
          <RocketDevSvg className="w-32 h-w-32" />
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
              {httpError?.code} error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-800 dark:text-gray-200 tracking-tight sm:text-5xl">
              {httpError?.phrase}
            </h1>
            <p className="mt-2 text-base text-gray-500">{message}</p>
            <div className="mt-6">
              <button
                onClick={refreshPage}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Refresh the page
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>

    // <div className=" min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
    //   <div className="max-w-max mx-auto">
    //     <main className="sm:flex">
    //       <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
    //         {httpError?.code}
    //       </p>
    //       <div className="sm:ml-6">
    //         <div className="sm:border-l sm:border-gray-200 sm:pl-6">
    //           <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200 tracking-tight sm:text-5xl">
    //             {httpError?.phrase}
    //           </h1>
    //           <p className="mt-1 text-base text-gray-500">{error}</p>
    //           {/* Please check the URL in the address bar and try again. */}
    //         </div>
    //         <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
    //           <button
    //             onClick={refreshPage}
    //             className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //           >
    //             Refresh the page
    //           </button>
    //           <a
    //             href="#"
    //             className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //           >
    //             Contact support
    //           </a>
    //         </div>
    //       </div>
    //     </main>
    //   </div>
    // </div>
  );
};

export default AlertError;
