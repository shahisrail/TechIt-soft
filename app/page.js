import Image from "next/image";
import Navigatoin from "./Componenst/Nav/navigatoin";
import Banner from "./Componenst/Home/Banner";
import About from "./Componenst/Home/about";
import WeOffer from "./Componenst/Home/WeOffer";
import WhyChooseUS from "./Componenst/Home/WhyChooseUS";
import WhyTrust from "./Componenst/Home/WhyTrust";
import OurWorked from "./Componenst/Home/OurWorked";
import OurExpertize from "./Componenst/Home/OurExpertize";
import OurTeam from "./Componenst/Home/OurTeam";
import Footer from "./Componenst/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navigatoin />
      <Banner />
      <About />
      <WeOffer />
      <WhyChooseUS/>
      <WhyTrust/>
      <OurWorked/>
      <OurExpertize/>
      <OurTeam/>
      <Footer/>
    </div>
  );
}
