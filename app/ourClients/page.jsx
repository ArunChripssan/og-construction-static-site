import React from "react";
import DiplomaticAndMinistries from "../Sections/ourClients/diplomaticAndMinistries/DiplomaticAndMinistries";
import PrivateCompanies from "../Sections/ourClients/privateCompanies/PrivateCompanies";
import OurConsultant from "../Sections/ourClients/ourConsultant/OurConsultant";
import Clients from "../Sections/ourClients/Clients/Clients";
import OurClientsBanner from "../Sections/ourClients/OurClientsBanner/OurClientsBanner";

const OurClients = () => {
  return (
    <>  
        <OurClientsBanner/>
        <DiplomaticAndMinistries/>
        <PrivateCompanies/>
        <OurConsultant/>
        <Clients/>
    </>
  );
};

export default OurClients;
