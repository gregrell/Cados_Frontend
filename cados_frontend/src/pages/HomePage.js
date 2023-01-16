import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = () => {

    const [advocates, setAdvocates] = useState([])

    useEffect(() => {
        getData()

    }, [])

    let getData = async () => {
        let response = await axios.get('https://cados.up.railway.app/advocates/')
        //console.log(response)
        setAdvocates(response.data.advocates)
    } 

  return (
    <div className='main--container'>
        <h2>CADOS stuff, building out fking react because why the fk not</h2>

        <div className='advocate__list'>
            {advocates.map((advocate, index) => (
                <div className = "advocate__preview__wrapper" key={index}>
                    <img className = "advocate__preview__image" src={advocate.profile_pic}></img>
                    <strong>{advocate.username}</strong>
                    <a href={advocate.twitter}>@{advocate.username}</a>
                    <br></br>
                    {/* <Link to={`/advocate/${advocate.username}`}>View</Link> */}
                    <p>{advocate.bio}</p>
                    
                </div>
            ))}
        </div>



    </div>
  )
}

export default HomePage