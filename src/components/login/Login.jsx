import styles from "../login/Login.module.css"
import { InputControl } from "../inputControl/inputControl"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"

export function Login(){
    const navigate = useNavigate()
    const [values, setValues] = useState({email:"",pass:""})
    const [errorMsg, setErrorMsg] = useState("")
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
    const Loguearse=()=>{
        if(!values.email || !values.pass){
            setErrorMsg("Datos incompletos")
            return
        }
        setErrorMsg("")
        setSubmitButtonDisabled(true)
        signInWithEmailAndPassword(auth,values.email,values.pass)
        .then(async(res)=>{
            setSubmitButtonDisabled(false)
            navigate("/")
        })
        .catch((err)=>{
            setSubmitButtonDisabled(false)
            setErrorMsg(err.message)
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>
                    Login
                </h1>

                <InputControl label="Correo "
                onChange={(event)=> setValues((prev)=>({...prev,email:event.target.value}))}
                placeholder="Ingrese su correo"/>
                <InputControl label="Contraseña "
                onChange={(event)=> setValues((prev)=>({...prev,pass:event.target.value}))}
                placeholder="Ingrese su contraseña"/>

                <div className={styles.footer}>
                    <b className={styles.error}>
                        {errorMsg}
                    </b>
                    <button onClick={Loguearse} disabled={submitButtonDisabled}>
                        Login Btn
                    </button>
                    <p>
                        Crear cuenta
                        <br />
                        <span>
                            <Link to="/signup">
                                Registrar
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}