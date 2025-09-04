
import AboutThryvv from '../About/AboutThryvv'
import Navmenu from '../Navmenu/Navmenu'
import HomeLanding from './HomeLanding/HomeLanding'
import Ourservice from '../Service/Ourservice'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <div>
     <Navmenu/>
     <HomeLanding/>
     <AboutThryvv/>
     <Ourservice/>
     <br/> <br/> <br/>
     <Testimonials />
<br/> <br/> <br/>
     <Footer/>
    </div>
  )
}
