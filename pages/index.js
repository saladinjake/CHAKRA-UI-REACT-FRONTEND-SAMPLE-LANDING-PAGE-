import React from "react";
import GuestLayout from "../Core/Template/GuestLayout";
import Jumbotron from "../components/Jumbotron"
import BuyAndSell from "../components/BuySellForm"
import Serviceboxes from "../components/Serviceboxes"
import ServiceSection from "../components/ServiceSection"
import LearningSectionContent from "../components/DescriptiveContent"
import MoreInformation  from  "../components/MoreInformation"
import TwoColumnInfo from "../components/TwoColumnInfo"
import EqualContentWithImage from "../components/EqualContentWithImage"


export default function IndexPage() {
  return (<GuestLayout>
          
           <Jumbotron/>
           <BuyAndSell/>
           <Serviceboxes/>
           <ServiceSection/>
           <LearningSectionContent/>
           <MoreInformation/>
          {/*<TwoColumnInfo />*/}
          <EqualContentWithImage/>
           
         </GuestLayout>);
}
