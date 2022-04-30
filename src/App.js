import React from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron"
import BuyAndSell from "./components/BuySellForm"
import Serviceboxes from "./components/Serviceboxes"
import ServiceSection from "./components/ServiceSection"
import LearningSectionContent from "./components/DescriptiveContent"
import MoreInformation  from  "./components/MoreInformation"
import Footer from "./components/Footer"

import "./app.css"
export default function App() {
  return (<>
           <Header />
           <Jumbotron/>
           <BuyAndSell/>
           <Serviceboxes/>
           <ServiceSection/>
           <LearningSectionContent/>
           <MoreInformation/>
           <Footer/>
           <a class="float-bar" href="http://scottyzen.com/?cp" target="_blank">👋 Visit My Website</a>
           
         </>);
}
