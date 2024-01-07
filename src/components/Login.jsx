import React, { useState } from 'react';
import '../css/Login.css'
const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password,
            }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    // Save token to localStorage
                    localStorage.setItem('token', data.token);
                    onLogin(data.token);
                    setError(null);
                } else {
                    setError('Login failed. Please check your credentials.');
                }
            })
            .catch(error => {
                setError('An error occurred during login. Please try again.');
                console.error('Error:', error);
            });
    };

    return (
        <div class="login-box">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div class="user-box">
                    <input type="text" required value={username} onChange={e => setUsername(e.target.value)} />
                    <label>Username</label>
                </div>
                <div class="user-box">
                    <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
                    <label>Password</label>
                </div>
                <button>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default Login;
