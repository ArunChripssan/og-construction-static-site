"use client";

import "./MobileNav.scss";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";

const MobileNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isAboutSubMenuOpen, setIsAboutSubMenuOpen] = useState(false);
    const [isProjectSubMenuOpen, setIsProjectSubMenuOpen] = useState(false);
    const [aboutSubmenu, setAboutSubmenu] = useState(false);
    const [projectSubmenu, setProjectSubmenu] = useState(false);

    const mobileNavRef = useRef(null);

    const closeMenu = () => {
        setMenuOpen(false);
        setIsAboutSubMenuOpen(false);
        setAboutSubmenu(false);
        setIsProjectSubMenuOpen(false);
        setProjectSubmenu(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                mobileNavRef.current &&
                !mobileNavRef.current.contains(event.target)
            ) {
                closeMenu();
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    const openProfilePdf = () => {
        const pdfUrl = '/assets/profileOg.pdf';
        window.open(pdfUrl, "_blank");
        closeMenu();
    };

    return (
        <AnimatePresence>
            <div className="mobileNav" ref={mobileNavRef}>
                <div className="wrapper">
                    <div className="navContainer">
                        <a href="/" onClick={closeMenu}>
                            {" "}
                            <Image
                                className="logo"
                                src="/assets/logo.png"
                                alt=""
                                width={120}
                                height={40}
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
                                            <Link
                                                className="nav-link"
                                                href="/"
                                                onClick={closeMenu}
                                            >
                                                HOME
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <div
                                                className={`nav-link about ${
                                                    isAboutSubMenuOpen
                                                        ? "subMenuOpen"
                                                        : ""
                                                }`}
                                                onClick={() => {
                                                    setAboutSubmenu(
                                                        !aboutSubmenu
                                                    );
                                                    setIsAboutSubMenuOpen(
                                                        !isAboutSubMenuOpen
                                                    );
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
                                                        <Link
                                                            href="/about"
                                                            onClick={closeMenu}
                                                        >
                                                            WHO WE ARE
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/awards"
                                                            onClick={closeMenu}
                                                        >
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
                                                onClick={closeMenu}
                                            >
                                                SERVICES
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <div
                                                className={`nav-link projects ${
                                                    isProjectSubMenuOpen
                                                        ? "subMenuOpen"
                                                        : ""
                                                }`}
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
                                                        <Link
                                                            href="/completedProjects"
                                                            onClick={closeMenu}
                                                        >
                                                            COMPLETED PROJECTS
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/onGoingProjects"
                                                            onClick={closeMenu}
                                                        >
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
                                                onClick={closeMenu}
                                            >
                                                OUR CLIENTS
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                href="/careers"
                                                onClick={closeMenu}
                                            >
                                                CAREERS
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <div
                                                className="nav-link"
                                                onClick={openProfilePdf}
                                            >
                                                PROFILE
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                href="/contact"
                                                onClick={closeMenu}
                                            >
                                                CONTACT US
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
