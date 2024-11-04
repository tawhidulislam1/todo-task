import React from 'react';
import image from '../../assets/banner.jpg'

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-[80vh] text-white relative">
                <div className="hero-content text-center">
                    <div className=" max-w-screen-lg">
                        <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                <div className="absolute -bottom-1/3 ">
                    <img src={image} alt="" className='w-[910px] border-spacing-1.5 h-[450px] border rounded-md' />
                </div>
            </div>

        </div>
    );
};

export default Hero;