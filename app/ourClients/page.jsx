import React from "react";
import DiplomaticAndMinistries from "../Sections/ourClients/diplomaticAndMinistries/DiplomaticAndMinistries";
import PrivateCompanies from "../Sections/ourClients/privateCompanies/PrivateCompanies";
import OurConsultant from "../Sections/ourClients/ourConsultant/OurConsultant";
import Clients from "../Sections/ourClients/Clients/Clients";

const OurClients = () => {
  return (
    <>
        <DiplomaticAndMinistries/>
        <PrivateCompanies/>
        <OurConsultant/>
        <Clients/>
    </>
  );
};

export default OurClients;
