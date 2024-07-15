import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {offerData} from '../../assets/Data Of Pages/Main.data'
function OfferOption() {

    const {id} = useParams()
    console.log(id);

    // console.log(offerData);

    useEffect(()=>{
        let data = offerData.find((item)=> item.id === id)
        console.log(data);
    } , [])

    return (
        <div>OfferOption</div>
    )
}

export default OfferOption