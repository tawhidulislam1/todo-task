import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 px-6 bg-gray-100">
            <Helmet>
                <title>Gadget Havean || About</title>
            </Helmet>
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/3">
                    <img
                        className="w-full h-full object-cover"
                        src="https://bcassetcdn.com/public/blog/wp-content/uploads/2023/07/20173436/g-lettermark-g-letter-logo-gadget-logo-minimalist-logo-by-Mahabub-Logo-Designer.png"

                    />
                </div>
                {/* Text Section */}
                <div className="md:w-2/3 p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
                    <p className="text-gray-600 mb-4">
                        Welcome to our e-commerce store! We are passionate about providing high-quality products that add value to your life. Our mission is to deliver exceptional customer experiences through a wide range of carefully curated products.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Whether you're looking for the latest in tech, fashion, or home goods, our team is dedicated to bringing you the best. We strive to build trust with our customers through transparency, quality, and service excellence.
                    </p>
                    <div className="mt-6">
                        <Link to='/category/All' className="px-6 py-3 bg-[#9538E2] text-white rounded-full hover:bg-blue-700 transition duration-300">
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;