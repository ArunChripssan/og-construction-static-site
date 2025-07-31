"use client";

import React, { useEffect, useState, useRef } from "react";
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

    // Ref for the mobile navigation container
    const mobileNavRef = useRef(null);

    // Function to close the menu
    const closeMenu = () => {
        setMenuOpen(false);
        setIsAboutSubMenuOpen(false); // Close submenus when main menu closes
        setAboutSubmenu(false);
        setIsProjectSubMenuOpen(false); // Close submenus when main menu closes
        setProjectSubmenu(false);
    };

    // Effect to handle clicks outside the menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                mobileNavRef.current &&
                !mobileNavRef.current.contains(event.target)
            ) {
                closeMenu();
            }
        };

        // Add event listener when menu is open
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            // Clean up event listener when menu is closed
            document.removeEventListener("mousedown", handleClickOutside);
        }

        // Clean up event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]); // Re-run effect when menuOpen changes

    return (
        <AnimatePresence>
            <div className="mobileNav" ref={mobileNavRef}>
                {" "}
                {/* Attach ref here */}
                <div className="wrapper">
                    <div className="navContainer">
                        <a href="/" onClick={closeMenu}>
                            {" "}
                            {/* Close menu on logo click */}
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
                                            <Link
                                                className="nav-link"
                                                href=""
                                                onClick={closeMenu}
                                            >
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
