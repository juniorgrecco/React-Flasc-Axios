import React, { useState } from 'react';
import axios from 'axios';
//import Navbar from './Navbar';
//import Footer from './Footer';
import './RegisterForm.css'; // Arquivo CSS para estilização

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/register', { email, password });
            alert('Usuario registrado com sucesso!');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Erro ao registrar o usuário:', error);
        }
    };

    return (
        <div>
            <div className="form-container">
                <h1>Entrar</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Registrar</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
