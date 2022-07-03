import * as React from "react"
import "./LoginForm.css"
import { useState } from "react"
import axios from "axios"
export default function Login() {
    const[errors, setErrors]= useState({})
    const [input, setInput] = useState({
        email: "",
        password: "",
    })

    const handleOnInputChange = (event) => {
        if (event.target.name === "email") {
          if (event.target.value.indexOf("@") === -1) {
            setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
          } else {
            setErrors((e) => ({ ...e, email: null }))
          }
        }
    
        setInput((f) => ({ ...f, [event.target.name]: event.target.value }))
      }
    
      const handleOnSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors((e) => ({ ...e, input: null }))
    
        try {
          const res = await axios.post(`http://localhost:3001/auth/login`, input)
          if (res?.data) {
            setAppState(res.data)
            setIsLoading(false)
            navigate("/portal")
          } else {
            setErrors((e) => ({ ...e, input: "Invalid username/password combination" }))
            setIsLoading(false)
          }
        } catch (err) {
          console.log(err)
          const message = err?.response?.data?.error?.message
          setErrors((e) => ({ ...e, form: message ? String(message) : String(err) }))
          setIsLoading(false)
        }
      }
    

    return (
        <div className="form">
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="user@gmail.com"
              value={input.email}
              onChange={handleOnInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={input.password}
              onChange={handleOnInputChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <button className="submit-login" >Login</button>
          </div>
    )
}
