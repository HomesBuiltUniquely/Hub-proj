import Header from "../Components/V2/Header"
import {NavBar} from "../Components/V2/Navbar"
import {Form} from "../Components/Form"
import {BrandCorosal} from "../Components/BrandCorosal"
import {CxSection} from "../Components/CxSection"
import {Featurespro} from "../Components/Featurespro"
import {QAsection} from "../Components/QAsection"
import {Footer} from "../Components/Footer"



export default function Contact(){

    return (
        <div>
            <NavBar/>
            <Header></Header>
            <Form/>
            <BrandCorosal/>
            <CxSection/>
            <Featurespro/>
            <QAsection/>
            <Footer/>

        </div>
    )

}