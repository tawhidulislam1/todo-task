import React from 'react';
import image from '../../assets/banner.jpg'

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
                        <button className="btn btn-primary">Shop Now</button>
                    </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <img src={image} alt="Tech accessories banner" className="w-[90%] max-w-[910px] h-auto border border-spacing-1.5 rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default Hero;