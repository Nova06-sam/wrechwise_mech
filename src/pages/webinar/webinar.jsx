import React from "react";
import WebinarsHero from "./ui/webHero";
import WebinarSidebar from "./ui/webSideBar";
import WebinarsUpcoming from "./ui/upcomingWeb";
import PartnerWithUs from "./ui/webPartner";
import StayUpdatedCard from "./ui/WebUpdate";
export default function Webinar(){
    return(
       <>
         <WebinarsHero/>
         <WebinarsUpcoming/>
         <WebinarSidebar/>
         <StayUpdatedCard/>
         <PartnerWithUs/>
       </>
    )
}