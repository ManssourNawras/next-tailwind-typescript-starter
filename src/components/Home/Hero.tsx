import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id='home' className="relative bg-gray-100 md:pt-16 pt-6">
            <div className="container mx-auto px-6 py-16 text-center md:text-left">
                <div className="flex flex-col-reverse items-center md:flex-row">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
                            Transform Your <span className="text-indigo-600">Space</span>
                        </h1>
                        <p className="mt-4 text-gray-600">
                            Discover elegant and modern interior designs tailored to your style. Let us help you create the home of your dreams.
                        </p>
                        <div className="mt-6">
                            <a
                                href="#services"
                                className="px-6 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                            >
                                Explore Designs
                            </a>
                            <a
                                href="#contact"
                                className="ml-4 px-6 py-3 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-100"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:py-0 py-3 flex justify-center">
                        <Image
                            width={500}
                            height={500}
                            src="/images/home/hero.jpg"
                            alt="Interior Design"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;