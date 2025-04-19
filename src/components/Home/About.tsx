import React from 'react';

const About: React.FC = () => {
    return (
        <section id='about' className="bg-gray-100 py-12">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    About Us
                </h2>
                <p className="text-gray-600 text-center mb-8">
                    Welcome to our interior design website! We specialize in creating beautiful, functional spaces that reflect your unique style and personality. Our team of experienced designers is dedicated to transforming your vision into reality.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                        <p className="text-gray-600">
                            To deliver exceptional interior design solutions that enhance the way you live, work, and experience your spaces.
                        </p>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
                        <p className="text-gray-600">
                            To be a leading interior design company known for innovation, quality, and customer satisfaction.
                        </p>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Values</h3>
                        <p className="text-gray-600">
                            Creativity, integrity, and a commitment to excellence are at the core of everything we do.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;