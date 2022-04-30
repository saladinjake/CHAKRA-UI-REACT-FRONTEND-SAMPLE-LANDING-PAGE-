import React from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron"
import BuyAndSell from "./components/BuySellForm"
import Serviceboxes from "./components/Serviceboxes"
import ServiceSection from "./components/ServiceSection"
import BodyContent from "./components/DescriptiveContent"
import Footer from "./components/Footer"

import "./app.css"
export default function App() {
  return (<>
           <Header />
           <Jumbotron/>
           <BuyAndSell/>
           <Serviceboxes/>
           <ServiceSection/>
           <BodyContent/>
           <Footer/>
           <a class="float-bar" href="http://scottyzen.com/?cp" target="_blank">👋 Visit My Website</a>
           
         </>);
}
