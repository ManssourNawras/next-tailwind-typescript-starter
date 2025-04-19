import React from 'react';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container px-4 mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-bold">Website Name</h1>
                <button
                    onClick={scrollToTop}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                    Scroll to Top
                </button>
            </div>
            <div className="container mx-auto text-center mt-4">
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Website Name. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;