// import React from "react";
// import Image from "next/image";
// import { experienceDesc } from "../../../../data/experience";
// import "./Experience.scss";

// const Experience = () => {
//     return (
//         <div className="experinceSec">
//             <div className="wrapper">
//                 <h1 className="bold title">
//                     We’ve Been Building For
//                     <br />
//                     <span className="color">Over 24 Years</span>
//                 </h1>
//                 <div className="container">
//                     <div className="leftSec">
//                         {experienceDesc.map((data, i) => (
//                             <div key={data.id} className="contents">
//                                 <img src=".\assets\icons\bullets.png" />
//                                 <p>{data.desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="rightSec">
//                         <Image
//                             src="/assets/mechanical-engineer.png"
//                             alt=""
//                             width={450}
//                             height={450}
//                             className="aboutus"
//                         />
//                         <Image
//                             className="neonEllipse"
//                             src="/assets/ellipse.png"
//                             alt=""
//                             width={700}
//                             height={800}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Experience;

"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experienceDesc } from "../../../../data/experience";
import "./Experience.scss";

// Register GSAP plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Experience = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const contentCardsRef = useRef([]);
    const imageContainerRef = useRef(null);
    const statsOverlayRef = useRef(null);
    const floatingElementsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set([titleRef.current, subtitleRef.current], {
                opacity: 0,
                y: 50,
            });

            gsap.set(contentCardsRef.current, {
                opacity: 0,
                x: -50,
            });

            gsap.set(imageContainerRef.current, {
                opacity: 0,
                scale: 0.8,
                rotationY: -15,
            });

            gsap.set(statsOverlayRef.current, {
                opacity: 0,
                y: -20,
            });

            gsap.set(floatingElementsRef.current, {
                opacity: 0,
            });

            // Create entrance timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            });

            // Animate elements in sequence
            tl.to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
            })
                .to(
                    subtitleRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                    },
                    "-=0.8"
                )
                .to(
                    imageContainerRef.current,
                    {
                        opacity: 1,
                        scale: 1,
                        rotationY: -5,
                        duration: 1.2,
                        ease: "power3.out",
                    },
                    "-=0.6"
                )
                .to(
                    contentCardsRef.current,
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power3.out",
                    },
                    "-=0.8"
                )
                .to(
                    statsOverlayRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "back.out(1.7)",
                    },
                    "-=0.4"
                )
                .to(
                    floatingElementsRef.current,
                    {
                        opacity: 0.8,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power2.out",
                    },
                    "-=0.6"
                );

            // Continuous animations
            gsap.to(imageContainerRef.current, {
                y: -10,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut",
            });

            gsap.to(titleRef.current, {
                scale: 1.02,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut",
            });

            // Floating elements continuous rotation
            floatingElementsRef.current.forEach((el, index) => {
                if (el) {
                    gsap.to(el, {
                        rotation: index % 2 === 0 ? 360 : -360,
                        duration: 20 + index * 5,
                        repeat: -1,
                        ease: "none",
                    });
                }
            });

            // Parallax effect
            gsap.to(floatingElementsRef.current, {
                yPercent: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Mouse move parallax effect
    const handleMouseMove = (e) => {
        if (!imageContainerRef.current) return;

        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const xPercent = (clientX / innerWidth - 0.5) * 2;
        const yPercent = (clientY / innerHeight - 0.5) * 2;

        gsap.to(floatingElementsRef.current, {
            x: xPercent * 20,
            y: yPercent * 20,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.out",
        });

        gsap.to(imageContainerRef.current, {
            rotationY: -5 + xPercent * 5,
            rotationX: yPercent * 3,
            duration: 0.5,
            ease: "power2.out",
        });
    };

    // Card hover effects
    // const handleCardHover = (index, isEntering) => {
    //     const card = contentCardsRef.current[index];
    //     const icon = card?.querySelector(".icon");

    //     if (isEntering) {
    //         gsap.to(card, {
    //             scale: 1.02,
    //             y: -5,
    //             duration: 0.3,
    //             ease: "power2.out",
    //         });
    //         gsap.to(icon, {
    //             rotation: 5,
    //             scale: 1.1,
    //             duration: 0.3,
    //             ease: "back.out(1.7)",
    //         });
    //     } else {
    //         gsap.to(card, {
    //             scale: 1,
    //             y: 0,
    //             duration: 0.3,
    //             ease: "power2.out",
    //         });
    //         gsap.to(icon, {
    //             rotation: -10,
    //             scale: 1,
    //             duration: 0.3,
    //             ease: "back.out(1.7)",
    //         });
    //     }
    // };

    return (
        <div
            className="experienceSec"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
        >
            <div className="wrapper">
                <h1 className="bold title" ref={titleRef}>
                    We've Been Building For <span className="neonColor">Over 25 Years</span>
                </h1>
                <div className="container">
                    <div className="hero-image">
                        <div
                            className="image-container"
                            ref={imageContainerRef}
                        >
                            <Image
                                src="/assets/mechanical-engineer.png"
                                alt="Construction Worker"
                                width={450}
                                height={600}
                                className="worker-image"
                            />
                            <div
                                className="stats-overlay"
                                ref={statsOverlayRef}
                            >
                                <div className="stats-number">25+</div>
                                <div className="stats-label">
                                    Years Experience
                                </div>
                            </div>
                        </div>
                        <div className="floating-elements">
                            <div
                                className="floating-element"
                                ref={(el) =>
                                    (floatingElementsRef.current[0] = el)
                                }
                            ></div>
                            <div
                                className="floating-element"
                                ref={(el) =>
                                    (floatingElementsRef.current[1] = el)
                                }
                            ></div>
                            <div
                                className="floating-element"
                                ref={(el) =>
                                    (floatingElementsRef.current[2] = el)
                                }
                            ></div>
                        </div>
                        <Image
                            className="neonEllipse"
                            src="/assets/ellipse.png"
                            alt=""
                            width={700}
                            height={800}
                        />
                    </div>
                    <div className="hero-content">
                        {experienceDesc.map((data, i) => (
                            <p key={data.id} className="content-text">
                                {data.desc}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
