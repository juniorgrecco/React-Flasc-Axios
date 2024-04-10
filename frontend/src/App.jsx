import React from 'react';
import RegisterForm from './RegisterForm';
import Navbar from './Navbar';
import Footer from './Footer';
import './Navbar.css'; // Arquivo CSS para estilização
import './Footer.css'; // Arquivo CSS para estilização

function App() {
    return (
        <div className="App">
            <Navbar />
            <p></p>
            <RegisterForm />
            <p></p>
            <Footer />
        </div>
    );
}

export default App;
