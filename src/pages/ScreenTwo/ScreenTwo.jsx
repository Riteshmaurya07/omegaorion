import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import './ScreenTwo.css';
import { FiArrowLeft } from 'react-icons/fi';

const ScreenTwo = () => {
    return (
        <div className="screen-container bg-light min-vh-100 d-flex flex-column">
            <Navbar title="Screen Two Details" />
            <main className="flex-grow-1 p-4 d-flex flex-column align-items-center justify-content-center">
                <div className="bg-white p-5 rounded-4 shadow-sm text-center max-w-md w-100" style={{ maxWidth: '500px' }}>
                    <h2 className="mb-3 fw-bold">Screen Two</h2>
                    <p className="text-muted mb-4">
                        This is the second screen of the application. The Figma design primarily focused on the employee grid view, but this placeholder demonstrates robust routing setup and project structure.
                    </p>
                    <Link to="/">
                        <Button variant="primary">
                            <FiArrowLeft className="me-2" /> Back to Home
                        </Button>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ScreenTwo;
