'use client';

import React from 'react';
// import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Projects: React.FC = () => {
    // const router = useRouter();

    const handleNavigate = () => {
        // router.push('/projects');
    };

    return (
        <section id='projects' className="py-12 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Example project cards */}
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <Image
                            width={200}
                            height={300}
                            src="/images/home/pro1.jpg"
                            alt="Project 1"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Modern Living Room</h3>
                        <p className="text-gray-600">A sleek and modern living room design.</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <Image
                            width={200}
                            height={300}
                            src="/images/home/pro2.jpg"
                            alt="Project 2"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Elegant Kitchen</h3>
                        <p className="text-gray-600">An elegant and functional kitchen space.</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <Image
                            width={200}
                            height={300}
                            src="/images/home/pro3.jpg"
                            alt="Project 3"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Cozy Bedroom</h3>
                        <p className="text-gray-600">A cozy and comfortable bedroom design.</p>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <button
                        onClick={handleNavigate}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;