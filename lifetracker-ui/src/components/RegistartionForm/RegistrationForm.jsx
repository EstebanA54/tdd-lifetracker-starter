import * as React from "react"
import "./RegistrationForm.css"
import { useState } from "react"
import axios from "axios"
export default function Register() {
    const [errors, setErrors] = useState({})
    const [input,setInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: ""

    })

    const handleOnInputChange = (event) => {
        if (event.target.name === "password") {
          if (input.passwordConfirm && input.passwordConfirm !== event.target.value) {
            setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
          } else {
            setErrors((e) => ({ ...e, passwordConfirm: null }))
          }
        }
        if (event.target.name === "passwordConfirm") {
          if (input.password && input.password !== event.target.value) {
            setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
          } else {
            setErrors((e) => ({ ...e, passwordConfirm: null }))
          }
        }
        if (event.target.name === "email") {
          if (event.target.value.indexOf("@") === -1) {
            setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
          } else {
            setErrors((e) => ({ ...e, email: null }))
          }
        }
    
        setInput((f) => ({ ...f, [event.target.name]: event.target.value }))
      }
    
       /*const handleOnSubmit = async () => {
        setIsLoading(true)
        setErrors((e) => ({ ...e, input: null }))
    
        if (input.passwordConfirm !== input.password) {
          setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }))
          setIsLoading(false)
          return
        } else {
          setErrors((e) => ({ ...e, passwordConfirm: null }))
        }
        try {
            const res = await axios.post("http://localhost:3001/auth/register", {
              firstName: input.firstName,
              lastName: input.lastName,
              email: input.email,
              password: input.password,
              passwordConfirm: input.passwordConfirm
            })
      
            if (res?.data?.user) {
              setAppState(res.data)
              setIsLoading(false)
              navigate("/portal")
            } else {
              setErrors((e) => ({ ...e, input: "Something went wrong with registration" }))
              setIsLoading(false)
            }
          } catch (err) {
            console.log(err)
            const message = err?.response?.data?.error?.message
            setErrors((e) => ({ ...e, input: message ? String(message) : String(err) }))
            setIsLoading(false)
          }
        }*/
    return (
        <div className="registration-form">
            <div className="form-input">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Jane"
                value={input.firstName}
                onChange={handleOnInputChange}
              />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>
            <div className="form-input">
              <label htmlFor="name">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Doe"
                value={input.lastName}
                onChange={handleOnInputChange}
              />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
          

          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="jane@doe.io"
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
              placeholder="password"
              value={input.password}
              onChange={handleOnInputChange}
            />
           {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="form-input">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="confirm password"
              value={input.passwordConfirm}
              onChange={handleOnInputChange}
            />
            {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
          </div>
          <button className="submit-registration" >Create Account</button>
        </div>
    )
}

