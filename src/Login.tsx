import { Link } from 'react-router-dom';
import './App.css';

function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold text-gray-900">Login</h2>
                <input
                type="email"
                placeholder="Email"
                className="w-full p-3 mt-4 border rounded"
                />
                <input
                type="password"
                placeholder="Password"
                className="w-full p-3 mt-2 border rounded"
                />
                <button className="w-full bg-blue-500 text-white p-3 mt-4 rounded hover:bg-blue-600">
                Login
                </button>
            </div>
    </div>
    );
};

export default Login;