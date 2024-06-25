import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Logging in with:', username, password);
    navigate('/dashboard');
    };

    const gradientStyle = {
        background: "linear-gradient(180deg, hsla(206, 51%, 37%, 1) 0%, hsla(153, 96%, 68%, 1) 100%)"
    };

    return (
        <div className="h-screen flex bg-bg justify-center items-center pb-20" style={gradientStyle}>
            <form onSubmit={handleSubmit} className="login-form flex flex-col space-y-4 p-20 rounded-xl bg-login">
                <h1 className="flex justify-center text-text text-4xl font-bold">Login To Enhanced</h1>
                <h2 className="text-text text-xl">Gateway to Simplified Study and Swift Solutions</h2>
                <div  className="flex flex-col"> 
                    <label className="text-text text-2xl"htmlFor="username">Username: </label>
                    <input 
                    className="rounded-md text-xl p-1"
                    placeholder="Username"
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label className="flex flex-col text-text text-2xl" htmlFor="password">Password: </label>
                    <input 
                    className="rounded-md text-xl p-1 pr-52"
                    placeholder="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                <button type="submit" className="bg-nav text-text text-xl font-bold p-2 rounded-xl transition-transform hover:scale-105">
                    Log In
                </button>
            </form>
        </div>
    );
};

export default Login;
