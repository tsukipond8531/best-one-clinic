import {} from 'react'
import { useParams } from 'react-router-dom'
import './Payment.style.css'

function Payment() {
    const { id } = useParams()


    return (
        <h1>{id}</h1>
    )
}

export default Payment