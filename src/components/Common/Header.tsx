import { classNames } from '@/utils/helpers';
import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' , block: 'center' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center w-full">
                <div className="text-xl font-bold">My Website</div>
                <button
                    className="text-gray-700 md:hidden cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-red-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
                <ul
                    className={classNames(
                        isMenuOpen ? 'block pb-2 rounded-b-md px-2' : 'hidden',
                        'md:flex md:space-x-0 absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none'
                    )}
                >
                    <li>
                        <button
                            onClick={() => scrollToSection('home')}
                            className="block cursor-pointer text-gray-700 hover:text-blue-500 px-4 py-2 md:inline"
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="block cursor-pointer text-gray-700 hover:text-blue-500 px-4 py-2 md:inline"
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="block cursor-pointer text-gray-700 hover:text-blue-500 px-4 py-2 md:inline"
                        >
                            Projects
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('clients')}
                            className="block cursor-pointer text-gray-700 hover:text-blue-500 px-4 py-2 md:inline"
                        >
                            Clients
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('blog')}
                            className="block cursor-pointer text-gray-700 hover:text-blue-500 px-4 py-2 md:inline"
                        >
                            Blog
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="block cursor-pointer text-gray-700 hover:text-blue-500 px-4 py-2 md:inline"
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;