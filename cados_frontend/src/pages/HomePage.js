import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = () => {

    const [advocates, setAdvocates] = useState([])

    useEffect(() => {
        getData()

    }, [])

    let getData = async () => {
        let response = await axios.get('http://127.0.0.1:8000/advocate/')
        //console.log(response)
        setAdvocates(response.data)
    } 

  return (
    <div>
        <h1>Home Page</h1>

        <div>
            {advocates.map((advocate, index) => (
                <div key={index}>
                    <strong>{advocate.username}</strong>
                    <Link to={`/advocate/${advocate.username}`}>View</Link>
                    
                </div>
            ))}
        </div>



    </div>
  )
}

export default HomePage