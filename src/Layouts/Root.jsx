import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-303px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;