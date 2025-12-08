import React, { useState } from "react"
import style from './API.module.scss'

function API() {
    const [dog, setDog] = useState([])
    const fetchData = async () => {// async (asynchronous)= Allow the website   to continue to load while this function runs in the bg
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random") // main method when working with API
            const data = await response.json() // store all the API data into a variable
            setDog(data)
        }
        catch (error){
            console.log("Error fetching data: ", error)
        }
    }
    // useEffect(() => {fetchData()}, [])
    const generateDog = () => {
        fetchData()
    }

    return(
      <div>
        <h1>Guess Breed</h1>
        <p>Hello! Guess the breed!</p>
        <img src={dog.message} />
        <br />
        <br />
        <input type="text" placeholder="Type a breed...">
        </input>
        <button onClick={generateDog}>Generates dog</button>

      </div>
    )
}

export default API
