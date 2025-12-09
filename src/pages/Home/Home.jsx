import React from "react"
import {useEffect, useState} from "react"
import style from './Home.module.scss'

function Home(){
    const [search, setSearch] = useState(" ")
        const [list, setList] = useState([])
        
        const addStorage = () => {
            localStorage.setItem("key", search)
            setSearch(" ")
            setList((l) => [...l, localStorage.getItem("key")])
        }
    
        const clearList = () => {
            localStorage.clear()
        }
        useEffect(() => {
            setList([localStorage.getItem("key")])
        }, [])
        
        return(
            <div>
                <h1>Home Page</h1>
                <br />
                <input placeholder="Username..." type="text" value={search} onChange={(e) => setSearch(e.target.value)} OnClick={addStorage} />
                <br />
                <br />
                <input type="text" value={search} placeholder="Password..." onChange={(e) => setSearch(e.target.value)} OnClick={addStorage} />
                <br />
                <br />
                <button>Sign Up</button>
                {/* <button onClick={clearList}>Clear List</button> */}
                {/* <ul>
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul> */}
            </div>
    )
}

export default Home;
