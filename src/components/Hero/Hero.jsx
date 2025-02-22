import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='bg-blue-600 text-white max-w-screen-2xl  mx-auto rounded-b-lg'>
            <div className="bg-blue-600 hero min-h-screen text-white relative flex flex-col items-center justify-center pb-40">
                <div className="hero-content text-center">
                    <div className="max-w-screen-xl mx-auto">
                        <h1 className="text-5xl font-bold">Easy and Powerful Task Management</h1>
                        <p className="py-6">
                            Wrike’s powerful task management software allows you to manage all your work in a single, easy-to-use platform.
                        </p>
                        <Link to='/task' className="btn btn-primary">Take a Task</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;