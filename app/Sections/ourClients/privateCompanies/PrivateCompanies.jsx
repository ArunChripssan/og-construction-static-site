import React from "react";
import Image from "next/image"
import {privateCompanies} from '../../../../data/ourClient'
import './PrivateCompanies.scss'

const PrivateCompanies = () => {
  return (
    <div className="wrapper">
        <div className="privateCompaniesSec">
            <h1 className="bold title">Private Companies</h1>
            <div className="logo-grid">
                {privateCompanies.map((data, i) => (
                    <div className="logo-item" key={data.id}>
                        <Image
                            src={data.imgLink}
                            alt=''
                            width={210}
                            height={120}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default PrivateCompanies;
