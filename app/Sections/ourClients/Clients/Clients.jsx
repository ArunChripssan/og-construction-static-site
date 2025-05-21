import Image from "next/image";
import React from "react";
import './Client.scss'

const Clients = () => {
    return (
        <div className="wrapper">
            <div className="ourClientSec">
                <h1 className="bold title">Our Client</h1>
                <div className="logo-grid">
                    <div className="logo-item">
                        <Image
                            src="/assets/ourClients/client/logo1.png"
                            alt=""
                            width={210}
                            height={120}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;
