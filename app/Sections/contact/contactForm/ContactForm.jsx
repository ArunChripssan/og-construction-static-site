import Image from "next/image";
import React from "react";
import './ContactForm.scss'

const ContactForm = () => {
  return (
    <div className="wrapper">
        <div className="contactFormSec">
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
                            <p>Oasis Grace LLC, Way 3508, MBD Area, Opposite to MBD Spar, Muscat, Oman.</p>
                        </div>
                    </div>
                    <div className="workingHours">
                        <Image 
                            src="/assets/icons/workingHrs.png"
                            alt=""
                            width={24}
                            height={24}
                        />
                        <div className="content">
                            <h3>Working Hours</h3>
                            <p>M-F: 8am – 6pm</p>
                            <p>S-S: 10am – 4pm</p>
                        </div>
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
                                    <p>oasisgrace.com</p>
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
                <form className="contactForm">
                    <div className="name-email">
                        <div className="name">
                            <label htmlFor="">Name</label>
                            <input type="text"/>
                        </div>
                        <div className="email">
                            <label htmlFor="">E-mail</label>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="mobileNumber">
                        <label htmlFor="">Mobile No</label>
                        <input type="number"/>
                    </div>
                    <div className="message">
                        <label htmlFor="">Your Message</label>
                        <textarea rows={8}/>
                    </div>
                    <button className="sndMsgBtn">SEND MESSAGE</button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default ContactForm;
