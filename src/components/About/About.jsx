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
                        Visibility is mission critical for project management, but everyone digests information differently.
                    </p>
                    <p className="text-gray-600 mb-4">
                        That’s why we provide a range of views so you can visualize project progress, adjust resources quickly, and keep stakeholders informed. Try our industry-leading Gantt charts or easy-to-use Kanban boards.
                    </p>
                    <div className="mt-6">
                        <Link to='/task' className="btn btn-primary">Take a Task</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;