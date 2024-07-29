import { } from 'react'
import Main from './Main'

// Import Styles And Images
import './Home.css'
import AboutUs from '../About Us/AboutUs'
import Devices from '../Devices/Devices'

function Home() {
    return (
        <section className=''>
            {/* Start Main Section */}
            <Main />
            {/* End Main Section */}

            {/* Start About Us Section  */}
            <AboutUs />
            {/* End About Us Section  */}

            {/* Start Devices Section */}
            <Devices />
            {/* End Devices Section */}

        </section>
    )
}

export default Home