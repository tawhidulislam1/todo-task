import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center p-8 max-w-lg bg-white shadow-md rounded-lg">
                <h1 className="text-9xl font-extrabold text-[#9538E2]">404</h1>
                <h2 className="mt-4 text-3xl font-semibold text-gray-700">Page Not Found</h2>
                <p className="mt-2 text-gray-600">Sorry, the page you are looking for does not exist.</p>
                <button
                    onClick={handleGoHome}
                    className="mt-6 px-6 py-3 bg-[#9538E2] text-white font-semibold rounded-md hover:bg-[#9538E2]transition-colors"
                >
                    Go Back Home
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
