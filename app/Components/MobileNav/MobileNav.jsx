"use client";

import React, { useEffect, useState } from "react";
import "./MobileNav.scss";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const MobileNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isAboutSubMenuOpen, setIsAboutSubMenuOpen] = useState(false);
    const [isProjectSubMenuOpen, setIsProjectSubMenuOpen] = useState(false);
    const [aboutSubmenu, setAboutSubmenu] = useState(false);
    const [projectSubmenu, setProjectSubmenu] = useState(false);

    return (
        <AnimatePresence>
            <div className="mobileNav">
                <div className="wrapper">
                    <div className="navContainer">
                        <a href="/">
                            <Image
                                className="logo"
                                src="/assets/logo.png"
                                alt=""
                                width={180}
                                height={60}
                            />
                        </a>
                        <div
                            className={`hamburger ${menuOpen ? "open" : ""}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {menuOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="menu"
                            >
                                <div className="menu-items">
                                    <ul className="nav-list">
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/">
                                                HOME
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <div
                                                className={`nav-link about ${isAboutSubMenuOpen? "subMenuOpen": ""}`}
                                                href="/about"
                                                onClick={() => {
                                                    setAboutSubmenu(!aboutSubmenu);
                                                    setIsAboutSubMenuOpen(!isAboutSubMenuOpen);
                                                }}
                                            >
                                                ABOUT
                                                <Image
                                                    src="/assets/icons/down-arrow.png"
                                                    alt=""
                                                    width={16}
                                                    height={16}
                                                    className="downArrow"
                                                />
                                            </div>
                                            {aboutSubmenu && (
                                                <ul className="submenu">
                                                    <li>
                                                        <Link href="/about">
                                                            WHO WE ARE
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/awards">
                                                            AWARDS AND
                                                            CERTIFICATIONS
                                                        </Link>
                                                    </li>
                                                </ul>
                                            )}
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link "
                                                href="/services"
                                            >
                                                SERVICES
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <div
                                                className={`nav-link projects ${isProjectSubMenuOpen? "subMenuOpen": ""}`}
                                                href="/projects"
                                                onClick={() => {
                                                    setProjectSubmenu(
                                                        !projectSubmenu
                                                    );
                                                    setIsProjectSubMenuOpen(
                                                        !isProjectSubMenuOpen
                                                    );
                                                }}
                                            >
                                                PROJECTS
                                                <Image
                                                    src="/assets/icons/down-arrow.png"
                                                    alt=""
                                                    width={16}
                                                    height={16}
                                                    className="downArrow"
                                                />
                                            </div>
                                            {projectSubmenu && (
                                                <ul className="submenu">
                                                    <li>
                                                        <Link href="/completedProjects">
                                                            COMPLETED PROJECTS
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/onGoingProjects">
                                                            ONGOING PROJECTS
                                                        </Link>
                                                    </li>
                                                </ul>
                                            )}
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                href="/ourClients"
                                            >
                                                OUR CLIENTS
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                href="/careers"
                                            >
                                                CAREERS
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="">
                                                PROFILE
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </AnimatePresence>
    );
};

export default MobileNav;
