import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = ()=>{
const [formData , setformData]= useState({email:"",password:""});

const navigate = useNavigate()
const handleChange=(e)=>{
    setformData({ ...formData, [e.target.name]: e.target.value });
}

const handleSubmit=(e)=>{
    e.preventDefault()
    alert(`Form Data:\nUsername: ${formData.username}\nPassword: ${formData.password}`);
    navigate('/')
}

return(
    <>
    <div>
    <form onSubmit={handleSubmit}>
        <h2>Login Page</h2>
        <div>
            <label>Email</label>
            <input type ="email" name="email" value={formData.email} onChange={handleChange}></input>
        </div>
        <div>
            <label>Password</label>
            <input type ="password" name="password" value={formData.password} onChange={handleChange}></input>
        </div>
        <div>
            <button type ="submit">Submit</button>
        </div>
    </form>
    </div>
    </>
    )
}
export default Login