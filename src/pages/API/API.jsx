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
        <>
            <div className={style.wrap}>    
                <div className={style.container}>
                    <h1>Cute Dogs</h1>
                    <p>Hello! Click the button to see more cute dog pics!</p>
                    <br />
                    <br />
                    <button onClick={generateDog}>Click Me!</button>
                    <img src={dog.message} alt=""/>
                    
                </div>
            </div>
        </>
    )
}

export default API
