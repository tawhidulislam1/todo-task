import React from 'react';

const Footer = () => {
    return (
        <div className=" bg-gray-100 text-gray-content text-center p-10 mt-6">
            <div>
                <h3 className='text-2xl font-blod py-1'>Gadget heaven</h3>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="divider"></div>
            <footer className="footer text-gray-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Career</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;