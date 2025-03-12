import { useState } from 'react';
import '../App.css';
import { api } from '../api/api';

function RegisterPage() {

    // "username": "arva",
    // "full_name": "arvalinno",
    // "password": "arva123",
    // "email": "arva@gmail.com",

    const [username, setUsername] = useState("");
    const [full_name, setFullname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleRegister = async () => {
        try {
            const response = await api.post("/v1/create_user", { username, full_name, password, email});
            console.log("Register successful:", response.data);
            alert("Register Successful!");
        } catch (error) {
            console.error("Register failed:", error);
            alert("Register Failed");
        };
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 to-red-400 p-6">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold text-gray-900">Register</h2>                
                <input
                type="text"
                placeholder="Username"
                className="w-full p-3 mt-4 border rounded"
                onChange={(e) => setUsername(e.target.value)}                
                />
                <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 mt-2 border rounded"
                onChange={(e) => setFullname(e.target.value)}                
                />
                <input
                type="email"
                placeholder="Email"
                className="w-full p-3 mt-2 border rounded"
                onChange={(e) => setEmail(e.target.value)}                
                />
                <input
                type="password"
                placeholder="Password"
                className="w-full p-3 mt-2 border rounded"
                onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                    onClick={handleRegister}
                    className="w-full bg-blue-500 text-white p-3 mt-4 rounded hover:bg-blue-600">
                Register
                </button>
            </div>
        </div>
    );
};

export default RegisterPage;