import Navmenu from "../Navmenu/Navmenu";
import FranchiseLanding from "./Franchise/FranchiseLanding";
import AboutFranchise from "./AboutFranchise/AboutFranchise";
import Partner from "./Partner/Partner";
import Brouchure from "./Brochure/Brouchure";
import Recovery from "./Recovery/Recovery";
import Footer from "../Footer/Footer";


export default function Franchise() {
  return (
    <>
    <Navmenu/>
   <FranchiseLanding/>
   <AboutFranchise/>
   <Partner/>
   <Brouchure/>
   <Recovery/>
   <br/><br/>
   <Footer/>
    </>
  )
}
