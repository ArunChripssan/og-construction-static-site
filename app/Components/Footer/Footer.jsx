import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ourServices, projects } from '../../../data/footer'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="wrapper">
            <div className="footer-container">
                {/* <div className="projects">
                     <h1>Our Services</h1>
                    {ourServices.map((data, i) => (
                        <p key={data.id}>{data.title}</p>
                    ))} 
                    <Image
                        src="/assets/logo.jpg"
                        alt=""
                        width={180}
                        height={50}
                        className="logo"
                    />
                    <p style={{ width: "350px"}}>With over 25 years of excellence, we deliver world-class construction solutions tailored to your vision. Transforming blueprints into breathtaking realities.</p>


                </div> */}
                  <div className="projects">
                    <Image
                        src="/assets/logo.jpg"
                        alt=""
                        width={180}
                        height={50}
                        className="logo"
                    />
                    <p>With over 25 years of excellence, we deliver world-class construction solutions tailored to your vision. Transforming blueprints into breathtaking realities.</p>

                </div>
                <div className="projects">
                    <h1>Quick Links</h1>

                    <ul>
                        <li>
                           <p> <Link href="/#topsec">Home</Link></p>


                        </li>
                        <li>
                            <p><Link href="/about">Who We Are</Link></p>
                            
                        </li>
                        <li>
                            <p><Link href="/awards">Awards & Certifications</Link></p>
                        </li>
                        <li>
                            <p><Link href="/services">Services</Link></p>
                        </li>

                        <li>
                            <p><Link href="/ourClients">Our Clients</Link></p>
                        </li>
                        <li>
                            <p><Link href="/careers">Careers</Link></p>
                        </li>

                        <li>
                            <p><Link href="/contact">Contact Us</Link></p>
                        </li>
                    </ul>
                </div>

                <div className="projects">
                    <h1>Projects</h1>
                    {projects.map((data, i) => (
                        <p key={data.id}>{data.title}</p>
                    ))}
                </div>
                <div className="address">
                    <h1>Address</h1>
                    <p> Oasis Grace LLC,Way 3508,</p>
                    <p> MBD Area, Ruwi,</p>
                    <p> Opposite to MBD Spar,</p>
                    <p> Muscat, Oman.</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    Copyright©2024 Oasis Grace LLC. All Rights Reserved.
                    Designed by TechNeat Info Solutions.
                </p>
                <div className="social-media">
                    <Link href="">
                        <Image
                            src="/assets/icons/facebook.png"
                            alt=""
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link href="">
                        <Image
                            src="/assets/icons/linkedin.png"
                            alt=""
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link href="">
                        <Image
                            src="/assets/icons/instagram.png"
                            alt=""
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link href="">
                        <Image
                            src="/assets/icons/whatsapp.png"
                            alt=""
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link href="">
                        <Image
                            src="/assets/icons/twitter.png"
                            alt=""
                            width={24}
                            height={24}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
