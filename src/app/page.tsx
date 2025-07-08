import { HeroSection } from "./Components/HeroSection";
import  BrandCorosal  from "./Components/BrandCorosal";
import {NavBar} from "./Components/NavBar"
import  {Form}  from "./Components/Form";
import { CxSection } from "./Components/CxSection";
import { Featurespro } from "./Components/Featurespro";
import { QAsection } from "./Components/QAsection";
import { Footer } from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection/>
      <Form/>
      <BrandCorosal/>
      <CxSection/>
      <Featurespro/>
      <QAsection/>
      <Footer/>
    </div>
  )
}
