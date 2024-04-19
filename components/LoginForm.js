// components/LoginForm.js
import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => { // add async here
        event.preventDefault();
        console.log('Login attempt with:', username, password);

        // Add logic to handle login
        const response = await fetch('/api/login', { // replace '/api/login' with your actual login endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            console.log('Login successful');
            // handle successful login here (e.g. redirect to another page, update user state, etc.)
        } else {
            console.log('Login failed');
            // handle failed login here (e.g. show error message, clear form, etc.)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default LoginForm;