import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-black p-4 mb-12">
            <div className="container mx-auto flex items-center justify-between ">
                <div className="text-white font-bold text-lg">
                    Brand
                </div>
                <div className="hidden sm:block">
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="text-white">Home</Link></li>
                        <li><Link to="/about" className="text-white">About</Link></li>
                        <li><Link to="/order" className="text-white">Order</Link></li>
                        <li><Link to="/contact" className="text-white">Contact</Link></li>
                    </ul>
                </div>
                <div className="sm:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    {menuOpen && (
                        <ul className="absolute top-12 right-0 bg-black text-white p-2 space-y-2 border shadow-2xl font-bold me-3">
                            <li><Link to="/" className="text-gray-100">Home</Link></li>
                            <li><Link to="/about" className="text-gray-100">About</Link></li>
                            <li><Link to="/order" className="text-white">Order</Link></li>
                            <li><Link to="/contact" className="text-gray-100">Contact</Link></li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
