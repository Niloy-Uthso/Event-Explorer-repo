import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';

const Rootlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            {import.meta.env.VITE_name}
           <Outlet></Outlet>
        </div>
    );
};

export default Rootlayout;