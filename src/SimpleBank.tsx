import { Link } from 'react-router-dom';
import './App.css';

function SimpleBank() {
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-900">Welcome to Simple Bank</h1>
            <p className="text-gray-700 mt-2">A minimal online banking system.</p>

            <div className="mt-6 space-x-4">
                <Link
                to="/login"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
                >
                Login
                </Link>
                <Link
                to="/register"
                className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
                >
                Register
                </Link>
            </div>
        </div>
    );
};

export default SimpleBank; 