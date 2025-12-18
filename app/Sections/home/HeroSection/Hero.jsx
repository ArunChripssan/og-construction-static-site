'use client'

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; 
import Link from 'next/link'; 
import './Hero.scss';
import Carousel from "../../../Components/Carousel/Carousel";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HeroSection = () => {
    useEffect(() => {
        const tl = gsap.timeline();

        tl.to('.hero-title', {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out'
        });

        tl.to('.hero-subtitle', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.6');

        tl.to('.cta-container', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.4');

        tl.to('.stats-section', {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.4');

        tl.to('.scroll-indicator', {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.4');

        gsap.to('.floating-element', {
            y: -20,
            duration: 3,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
            stagger: 0.5
        });

        const createParticle = () => {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100%';
            
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                heroSection.appendChild(particle);

                gsap.to(particle, {
                    y: -window.innerHeight - 50,
                    x: (Math.random() - 0.5) * 200,
                    duration: Math.random() * 5 + 3,
                    ease: 'none',
                    onComplete: () => {
                        particle.remove();
                    }
                });

                gsap.to(particle, {
                    opacity: 0,
                    duration: 1,
                    delay: Math.random() * 3 + 2
                });
            }
        };

        const particleInterval = setInterval(createParticle, 500);

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            const handleClick = function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: target,
                        ease: 'power2.inOut'
                    });
                }
            };
            anchor.addEventListener('click', handleClick);

            return () => {
                anchor.removeEventListener('click', handleClick);
            };
        });

        const heroBgAnimation = gsap.to('.hero-bg', {
            yPercent: -50,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });

        return () => {
            clearInterval(particleInterval);
            tl.kill();
            gsap.killTweensOf('.floating-element'); 
            gsap.killTweensOf('.particle'); 
            heroBgAnimation.kill(); 
            document.querySelectorAll('.particle').forEach(p => p.remove());
        };
    }, []);

    return (
        <>  
            <Carousel className="carousel"/>
            <section className="hero-section">
                <div className="hero-bg"></div>
                <div className="floating-elements">
                    <div className="floating-element"></div>
                    <div className="floating-element"></div>
                    <div className="floating-element"></div>
                    <div className="floating-element"></div>
                    <div className="floating-element"></div>
                </div>

                <div className="hero-content">
                    <h1 className="hero-title" data-text="Building Landmarks Creating Futures">
                        <span className="primary title-1">Building Landmarks</span>
                        <span className="secondary title-2">Creating Futures</span>
                    </h1>
                    
                    <p className="hero-subtitle">
                        With over 25 years of excellence, we deliver world-class construction solutions tailored to your vision. Transforming blueprints into breathtaking realities.
                    </p>
                    
                    <div className="cta-container">
                        <Link href="/contact" className="cta-primary cta-btn">
                            Get a Quote
                        </Link>
                        <Link href="/completedProjects" className="cta-secondary cta-btn">
                            View our Projects
                        </Link>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <div className="scroll-line">
                        <div className="scroll-dot"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;