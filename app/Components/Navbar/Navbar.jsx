"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MobileNav from "../MobileNav/MobileNav";
import "./Navbar.scss";

const Navbar = () => {
    const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
    const [projectsAnchorEl, setProjectsAnchorEl] = useState(null);
    const pathname = usePathname();


    const handleAboutClick = (event) => {
        setAboutAnchorEl(event.currentTarget);
        setProjectsAnchorEl(null); 
    };

    const handleProjectsClick = (event) => {
        setProjectsAnchorEl(event.currentTarget);
        setAboutAnchorEl(null); 
    };

    const handleClose = () => {
        setAboutAnchorEl(null);
        setProjectsAnchorEl(null);
    };

    return (
        <>
            <nav className="nav">
                <div className="wrapper">
                    <div className="container">
                        <a href="/">
                            <Image src="/assets/logo.png" alt="" width={180} height={50} className="logo" />
                        </a>
                        <ul className="nav-list">
                            <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
                                <Link className="nav-link" href="/">HOME</Link>
                            </li>
                            <li className={`nav-item  ${pathname.startsWith('/about') || pathname.startsWith('/awards') ? 'active' : ''}`} onClick={handleAboutClick}>
                                <div className="dropDownItem">
                                    ABOUT US
                                    <Image src="/assets/icons/down-arrow.png" alt="" width={16} height={16} className="downArrow" />
                                </div>
                            </li>
                            <Menu anchorEl={aboutAnchorEl} open={Boolean(aboutAnchorEl)} onClose={handleClose}
                                 sx={{
                                    "& .MuiPaper-root": {
                                        backgroundColor: "#33b9ed",
                                        color: "white",
                                        fontFamily: "RacingSansOne"
                                    },
                                }}
                            >
                                <MenuItem onClick={handleClose}><Link className="nav-link" href="/about">WHO WE ARE</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link className="nav-link" href="/awards">AWARDS & CERTIFICATION</Link></MenuItem>
                            </Menu>

                            <li className={`nav-item ${pathname === '/services' ? 'active' : ''}`}>
                                <Link className="nav-link" href="/services">SERVICES</Link>
                            </li>

                            <li className={`nav-item  ${pathname.startsWith('/completedProjects') || pathname.startsWith('/onGoingProjects') ? 'active' : ''}`} onClick={handleProjectsClick}>
                                <div className="dropDownItem">
                                    PROJECTS
                                    <Image src="/assets/icons/down-arrow.png" alt="" width={16} height={16} className="downArrow" />
                                </div>
                            </li>
                            <Menu
                                anchorEl={projectsAnchorEl}
                                open={Boolean(projectsAnchorEl)}
                                onClose={handleClose}
                                sx={{
                                    "& .MuiPaper-root": {
                                        backgroundColor: "#33b9ed",
                                        color: "white",
                                        fontFamily: "RacingSansOne"
                                    },
                                }}
                            >
                                <MenuItem onClick={handleClose}><Link className="nav-link" href="/completedProjects">COMPLETED PROJECTS</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link className="nav-link" href="/onGoingProjects">ONGOING PROJECTS</Link></MenuItem>
                            </Menu>

                            <li className={`nav-item ${pathname === '/ourClients' ? 'active' : ''}`}><Link className="nav-link" href="/ourClients">OUR CLIENTS</Link></li>
                            <li className={`nav-item ${pathname === '/careers' ? 'active' : ''}`}><Link className="nav-link" href="/careers">CAREERS</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="">PROFILE</Link></li>
                        </ul>
                        <Link href="/contact">
                            <button className="contact">Contact Us</button>
                        </Link>
                    </div>
                </div>
            </nav>
            <MobileNav />
        </>
    );
};

export default Navbar;
