import React, { useState } from 'react';

export const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showSearchField, setShowSearchField] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu((prevState) => !prevState);
    };

    const toggleSearchField = () => {
        setShowSearchField((prevState) => !prevState);
    };

    return (
        <>
            {/* Top Navbar */}
            <nav className={`bg-sky-700 text-white py-4 px-8 flex items-center justify-between ${showMobileMenu ? 'h-auto' : 'h-16'}`}>
                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-2xl"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>

                    </button>
                </div>

                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="/" className="flex flex-shrink-0 items-center bg-sky-700 text-white rounded-md px-3 py-1 hover:shadow-lg text-sm font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="block w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                        <h1 className="text-center font-bold">
                            Mangá Reader's
                        </h1>
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center">
                    <a href="*" className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-3 text-sm font-medium">
                        Mangás
                    </a>
                    <a href="*" className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-3 text-sm font-medium">
                        Categorias
                    </a>
                    <a href="*" className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-3 text-sm font-medium">
                        Grupos/Scans
                    </a>
                </div>

                {/* Div fixa na direita em ambos os espectos, [desktop, mobile] */}
                <div className="relative inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Search Icon and Field */}
                    <div className="relative bg-sky-700 rounded-lg flex items-center hover:bg-gray-700">
                        {showSearchField && (
                            <input
                                type="text"
                                placeholder="Pesquisar"
                                className="px-2 py-1 rounded-lg shadow-inner bg-sky-800"
                            />
                        )}
                        <button
                            onClick={toggleSearchField}
                            className="text-white text-2xl px-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </div>
                    {/* User Icon */}
                    <div className="relative">
                        <button
                            className="border-2 border-sky-700 hover:bg-sky-700 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>


                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`bg-sky-700 text-white py-2 px-4 lg:hidden ${showMobileMenu ? 'block' : 'hidden'}`}>
                <div className="flex flex-col">
                    <button type="button" className="my-2 w-full text-left">
                        Mangás
                    </button>
                    <button type="button" className="my-2 w-full text-left">
                        Categorias
                    </button>
                    <button type="button" className="my-2 w-full text-left">
                        Grupos/Scans
                    </button>
                    <button type="button" className="my-2 w-full text-left">
                        Login
                    </button>
                </div>
            </div>
        </>
    );
};