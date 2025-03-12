import { useState } from 'react';
import '../App.css';
import { api } from '../api/api';

function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await api.post("/v1/login_user", { username, password });
            console.log("Login successful:", response.data);
            alert("Login Successful!");
        } catch (error) {
            console.error("Login failed:", error);
            alert("Login Failed");
        };
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-400 p-6">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold text-gray-900">Login</h2>
                <input
                type="text"
                placeholder="Username"
                className="w-full p-3 mt-4 border rounded"
                onChange={(e) => setUsername(e.target.value)}
                />
                <input
                type="password"
                placeholder="Password"
                className="w-full p-3 mt-2 border rounded"
                onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                    onClick={handleLogin}
                    className="w-full bg-blue-500 text-white p-3 mt-4 rounded hover:bg-blue-600">
                    Login
                </button>
            </div>
    </div>
    );
};

export default LoginPage;