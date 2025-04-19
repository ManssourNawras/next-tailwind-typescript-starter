import Image from 'next/image';
import React from 'react';

const Blog: React.FC = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Designing Your Dream Interior',
            description: 'Tips and tricks to create a stunning interior design for your home.',
            image: '/images/home/b1.jpg',
            date: 'October 10, 2023',
        },
        {
            id: 2,
            title: 'Top 10 Interior Design Trends',
            description: 'Explore the latest trends in interior design for this year.',
            image: '/images/home/b2.jpg',
            date: 'October 15, 2023',
        },
        {
            id: 3,
            title: 'How to Choose the Right Furniture',
            description: 'A guide to selecting furniture that fits your style and space.',
            image: '/images/home/b3.jpg',
            date: 'October 20, 2023',
        },
    ];

    return (
        <section id='blog' className="py-12 bg-gray-50 ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-20">Our Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <Image width={200} height={200} src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{post.date}</p>
                                <p className="text-gray-700">{post.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;