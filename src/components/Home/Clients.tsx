import Image from 'next/image';
import React from 'react';

const Clients: React.FC = () => {
    const clients = [
        { id: 1, name: 'Client One', logo: '/images/home/c1.png' },
        { id: 2, name: 'Client Two', logo: '/images/home/c2.jpg' },
        { id: 3, name: 'Client Three', logo: '/images/home/c3.webp' },
        { id: 4, name: 'Client Four', logo: '/images/home/c4.jpg' },
    ];

    return (
        <section id='clients' className="py-12 bg-gray-400">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Our Clients
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
                    {clients.map((client) => (
                        <div key={client.id} className="flex justify-center rounded-3xl">
                            <Image
                                width={250}
                                height={250}
                                src={client.logo}
                                alt={client.name}
                                className="h-20 rounded-2xl object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;