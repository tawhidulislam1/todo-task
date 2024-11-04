import React from 'react';
import image from '../../assets/banner.jpg'

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen text-white relative">
                <div className="hero-content text-center">
                    <div className=" max-w-screen-lg">
                        <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                <div className="absolute">
                    {/* <img src={image} alt="" /> */}
                </div>
            </div>

        </div>
    );
};

export default Hero;