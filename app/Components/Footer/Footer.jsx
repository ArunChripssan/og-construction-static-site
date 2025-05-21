import React from "react";
import Link from "next/link";
import Image from "next/image";
import {ourServices, projects} from '../../../data/footer'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="wrapper">
            <div className="footer-container">
                <div className="our-services">
                    <h1>Our Services</h1>
                    {ourServices.map((data, i) => (
                        <p key={data.id}>{data.title}</p>
                    ))}
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
