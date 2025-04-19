import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="bg-gray-100 py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                    Have questions or want to work with us? Fill out the form below, and we’ll get back to you as soon as possible.
                </p>
                <form className="space-y-6">
                    <div className="flex flex-col items-start">
                        <label htmlFor="name" className="block text-base font-semibold text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 py-3 px-4 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="flex flex-col items-start">
                        <label htmlFor="email" className="block text-base font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 py-3 px-4 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="flex flex-col items-start">
                        <label htmlFor="message" className="block text-base font-semibold text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="mt-1 py-3 px-4 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;