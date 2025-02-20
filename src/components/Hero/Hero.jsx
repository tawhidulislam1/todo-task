import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='bg-[#9538E2] text-white max-w-screen-2xl  mx-auto rounded-b-lg'>
            <div className="bg-[#9538E2] hero min-h-screen text-white relative flex flex-col items-center justify-center pb-40">
                <div className="hero-content text-center">
                    <div className="max-w-screen-xl mx-auto">
                        <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <Link to='/dashbaord' className="btn btn-primary">Shop Now</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;