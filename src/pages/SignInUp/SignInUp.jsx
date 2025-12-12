import {useState} from 'react'
import { Navigate } from 'react-router-dom'
import style from "./SignInUp.module.scss"

function SignInUp() {

    const [action, setAction] = useState("Sign Up")


    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")
    
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const signIn = () => {
        const userEmail = localStorage.getItem("email")
        const userPwd = localStorage.getItem("pwd")
        if (email === userEmail && pwd === userPwd) {
            alert("You are Signed In !")
            setEmail("")
            setPwd("")
            setIsLoggedIn(true)
        } else {
            alert("Incorrect email or password..")
            setEmail("")
            setPwd("")
        }
    }
    
    if (isLoggedIn === true) {
            return <Navigate to="/api" />
        }

    const signUp = () => {
        const storedEmail = localStorage.getItem("email")
        if (storedEmail === email) {
            alert('You arleady have an account')
            setEmail("")
            setAction("Sign In")
            return
        } else {
            localStorage.setItem("email", email)
            localStorage.setItem("pwd", pwd)
            alert('You are signed up!')
            setEmail("")
            setPwd("")
            setIsLoggedIn(true)
        }
    }
    
    return (
        // Main container
        <div className={style.container}>
            <h1>{action}</h1>

            {/* Input fields */}
            <div className={style.container__input}>

                {/* Sign Up input fields */}
                {action === "Sign Up" && (
                    <div className={style.email}>
                        <input
                            type="email"
                            placeholder="Your Email..."
                            value={email}
                            onChange={(e) => 
                                setEmail(e.target.value)
                            }
                        />
                        <br />
                        <br />
                        <input
                            type="password"
                            placeholder="Choose a Password..."
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                        />
                    </div>
                )}

                {action === "Sign In" && (
                    <div className={style.email}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email..."
                        />
                        <br />
                        <br />
                        <input
                            type="password"
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                            placeholder="Your Password..."
                        />
                    </div>
                )}
            </div>


            <button className={style.submit}
                onClick={() => {
                    if (action === "Sign In") {
                        signIn()
                    } else {
                        signUp()
                    }
                }}
            >Submit
            </button>
            <div className={style.container__btn}>
                <button 
                    className={
                    action === "Sign In" ? style.white : style.sign} 
                    onClick={() => {
                    setAction("Sign In")
                }}>
                    Sign In
                </button>
                
                <button 
                    className={action === "Sign Up" ? style.white : style.sign} onClick={() => {
                    setAction("Sign Up")
                }}>
                    Sign Up
                </button>
            </div>

        </div>
    )
}

export default SignInUp
