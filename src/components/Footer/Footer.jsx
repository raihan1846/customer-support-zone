import React from 'react';
import imgLinkDin from "../../assets/fi_6244710.png"
import imgFb from "../../assets/fi_5969020.png"
import imgSk from "../../assets/fi_5968764.png"
import imggm from "../../assets/fi_145807.png"
const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <div className='md:w-[1200px] mx-auto footer sm:footer-horizontal bg-neutral text-neutral-content p-10'>
                <nav>
                    <h6 className="footer-title">CS — Ticket System</h6>
                    <p>I can suggest the single <br /> best Font Awesome icon for a <br /> “reseller dashboard” that would <br /> visually make sense at a glance.</p>

                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contacted Saled</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <a className="link link-hover flex flex-nowrap"><img src={imgFb} alt="" /><span className='ml-2'>@CS — Ticket System</span></a>
                    <a className="link link-hover flex flex-nowrap"><img src={imgLinkDin} alt="" /><span className='ml-2'>@CS — Ticket System</span></a>
                    <a className="link link-hover flex flex-nowrap"><img src={imgSk} alt="" /><span className='ml-2'>@CS — Ticket System</span></a>
                    <a className="link link-hover flex flex-nowrap"><img src={imggm} alt="" /><span className='ml-2'>support@cst.com</span></a>
                </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;