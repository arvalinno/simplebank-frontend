import { useState } from 'react';
import '../App.css';
import { api } from '../api/api';
import { useNavigate } from "react-router-dom";
import InputField from '../components/InputField';
import Button from '../components/Button';

function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await api.post("/v1/login_user", { username, password });
            console.log("Login successful:", response.data);
            navigate("/bank-homepage");
        } catch (error) {
            console.error("Login failed:", error);
            setError("Invalid username or password.");
        } finally {
            setLoading(false);
        };
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-green-600 to-blue-800">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-lg p-8 rounded-2xl max-w-sm w-full">
            <h2 className="text-3xl font-bold text-white text-center">Login</h2>

            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}

            <div className="mt-4">
            <InputField
                label="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <InputField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>

            <Button onClick={handleLogin} loading={loading} text="Login" />

            <p className="text-white text-center text-sm mt-4">
            Don't have an account?{" "}
            <span
                className="text-blue-300 cursor-pointer hover:underline"
                onClick={() => navigate("/register")}
            >
                Sign Up
            </span>
            </p>
        </div>
        </div>
    );
};

export default LoginPage;