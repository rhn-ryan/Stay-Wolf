import { useContext } from "react"
import "./login.css"
import { AuthContext } from "../../context/AuthContext"

const Login = () => {
    const [ credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    })

    const {loading, error, dispatch} = useContext(AuthContext);
    return <div className="login">
        <div className="lContainer">
            <input type="text" placeholder="username" id= "username" onChange={handleChange} className="lInput"/>
            <input type="text" placeholder="password" id= "password" onChange={handleChange} className="lInput"/>
            <button className="lbutton">Login</button>
            {error && <span>{error.message}</span>}
        </div>
    </div>
}

export default Login