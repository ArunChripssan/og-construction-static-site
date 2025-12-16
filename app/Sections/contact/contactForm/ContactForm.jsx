"use client";

import Image from "next/image";
import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./ContactForm.scss";

const ContactForm = () => {
    const schema = Yup.object({
        name: Yup.string()
            .required("Name is required")
            .min(2, "Name must be at least 2 characters"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        mobileNumber: Yup.string()
            .matches(/^[0-9]+$/, "Invalid number")
            .min(10, "Invalid number")
            .max(10, "Invalid number")
            .required("Mobile number is required"),
        message: Yup.string()
            .min(2, "Message must be at least 2 characters")
            .max(500, "Message cannot exceed 500 characters")
            .required("Message is required"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        console.log("Form data:", data);
        alert("Form submitted successfully! Check console for data.");
        reset();
    };

    return (
        <div className="wrapper">
            <form className="contactFormSec" onSubmit={handleSubmit(onSubmit)}>
                <div className="leftSec">
                    <h1>Contact info</h1>
                    <div className="contactInfo-contents">
                        <div className="officeLocation">
                            <Image
                                src="/assets/icons/location.png"
                                alt=""
                                width={24}
                                height={24}
                            />
                            <div className="content">
                                <h3>Office Location</h3>
                                <p>
                                    Oasis Grace LLC, Way 3508, MBD Area,
                                    Opposite to MBD Spar, Muscat, Oman.
                                </p>
                            </div>
                        </div>
                        <div className="workingHours">
                            {/* <Image
                                src="/assets/icons/workingHrs.png"
                                alt=""
                                width={24}
                                height={24}
                            />
                            <div className="content">
                                <h3>Working Hours</h3>
                                <p>M-F: 8am – 6pm</p>
                                <p>S-S: 10am – 4pm</p>
                            </div> */}
                        </div>
                        <div className="communication">
                            <Image
                                src="/assets/icons/communication.png"
                                alt=""
                                width={24}
                                height={24}
                            />
                            <div className="content">
                                <h3>Communication</h3>
                                <div className="email-contact">
                                    <div className="email">
                                        <Image
                                            src="/assets/icons/email.png"
                                            alt=""
                                            width={16}
                                            height={16}
                                        />
                                        <p> info@oasisgrace.com</p>
                                    </div>
                                    <div className="contact">
                                        <Image
                                            src="/assets/icons/contact.png"
                                            alt=""
                                            width={16}
                                            height={16}
                                        />
                                        <p>+968 24812226</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSec">
                    <h1>Drop Us a Mail</h1>
                    <div className="contactForm">
                        <div className="name-email">
                            <div className="name">
                                <label htmlFor="">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register("name")}
                                />
                                {errors.name && (
                                    <p className="error">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>
                            <div className="email">
                                <label htmlFor="">E-mail</label>
                                <input
                                    type="text"
                                    id="email"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p className="error">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="mobileNumber">
                            <label htmlFor="">Mobile No</label>
                            <input
                                type="tel"
                                id="mobileNumber"
                                {...register("mobileNumber")}
                            />
                            {errors.mobileNumber && (
                                <p className="error">{errors.mobileNumber.message}</p>
                            )}
                        </div>
                        <div className="message">
                            <label htmlFor="">Your Message</label>
                            <textarea
                                id="message"
                                rows={8}
                                {...register("message")}
                            />
                            {errors.message && (
                                <p className="error">{errors.message.message}</p>
                            )}
                        </div>
                        <button className="sndMsgBtn">SEND MESSAGE</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
