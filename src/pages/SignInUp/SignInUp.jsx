import {useState} from 'react'
import style from "./SignInUp.module.scss"

function SignInUp() {
    const [action, setAction] = useState("Sign Up")


    const [email, setEmail] = useState(" ")
    const [pwd, setPwd] = useState(" ")

    const addStorage = () => {
        localStorage.setItem("email", email)
        localStorage.setItem("pwd", pwd)
        setEmail(" ")
        setPwd(" ")
    }

    const signIn = () => {
        const userEmail = localStorage.getItem("email")
        const userPwd = localStorage.getItem("pwd")
        email === userEmail && pwd === userPwd
            ? alert("You are Signed In !")
            : alert("Incorrect email or password..")
    }


    return (

        <div className={style.container}>
            <h1>{action}</h1>

            <div className={style.container__input}>
                {action === "Sign Up" && (
                    <div className={style.email}>
                        <input
                            type="email"
                            placeholder="Email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
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
                            placeholder="Email..."
                        />
                        <br />
                        <input
                            type="password"
                            placeholder="Your Password..."
                        />
                    </div>
                )}
            </div>


            <button
                onClick={() => {
                    if (action === "Sign In") {
                        signIn()
                    } else {
                        addStorage()
                    }
                }}
            >Submit
            </button>
            <div className={style.container__btn}>
                <button className={
                    action === "Sign In" ? '${style.submit} ${style.white}'
                        : style.submit} onClick={() => {
                    setAction("Sign In")
                }}>
                    Sign In
                </button>
                <button className={action === "Sign Up" ? '${style.submit} ${style.white}' : style.submit} onClick={() => {
                    setAction("Sign Up")
                }}>
                    Sign Up
                </button>
            </div>

        </div>
    )
}

export default SignInUp
