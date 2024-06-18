import { BrowserRouter  as Router, Routes, Route } from "react-router-dom"
import { Login } from "../components/login/Login"
import { Home } from "../components/Home/Home"
import { Signup } from "../components/signUp/Signup"
import { auth } from "../firebase"
import { useEffect, useState } from "react"

export function MyRoutes(){
    const [userName, setUserName] = useState([])
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUserName(user.displayName)
            }else setUserName("")
        })
    },[])

    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home name={userName}/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/signup" element={<Signup/>}/>
            </Routes>
        </Router>   
    )
}