import {} from 'react'
import { useParams } from 'react-router-dom'

function Payment() {
    const { id } = useParams()


    return (
        <h1>{id}</h1>
    )
}

export default Payment