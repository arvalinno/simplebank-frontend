import { useState } from 'react';
import '../App.css';
import { api } from '../api/api';
import InputField from '../components/InputField';

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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-600 to-blue-800 p-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-lg p-8 rounded-2xl max-w-sm w-full">
                <h2 className="text-3xl font-bold text-white text-center">Register</h2>                
                <InputField
                    type="text"
                    label="Username"
                    onChange={(e) => setUsername(e.target.value)} 
                    value={username}               
                />
                <InputField
                    type="text"
                    label="Full Name"
                    onChange={(e) => setFullname(e.target.value)} 
                    value={full_name}         
                />
                <InputField
                    type="email"
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}       
                />
                <InputField
                    type="password"
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}   
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