import  { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {offerData} from '../../assets/Data Of Pages/Main.data'
import Footer from '../Footer/Footer';
function OfferOption() {

    const {id} = useParams()
    console.log(id);

    // console.log(offerData);

    useEffect(()=>{
        let data = offerData.find((item)=> item.id === id)
        console.log(data);
    } , [])

    return (
        <>
        <h1>Options</h1>
        
        {/* Start Footer */}
        <Footer/>
        {/* End Footer */}
        </>
    )
}

export default OfferOption