// components/SignUpForm.js
import React, { useState } from 'react';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        countryofOrigin: '',
        languagesSpoken: '',
        major: '',
        specialization: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data submitted:', formData);
        // Add logic to handle the form submission like sending data to a backend server
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
                Country of Origin:
                <input type="text" name="country" value={formData.country} onChange={handleChange} />
            </label>
            <label>
                Languages Spoken:
                <input type="text" name="languagesSpoken" value={formData.languagesSpoken} onChange={handleChange} />
            </label>
            <label>
                Major:
                <input type="text" name="major" value={formData.major} onChange={handleChange} />
            </label>
            <label>
                Specialization:
                <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} />
            </label>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;
