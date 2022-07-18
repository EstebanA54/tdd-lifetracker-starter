import * as React from "react"
import "./App.css"
import { useState, useEffect } from "react"
import Navbar from "components/Navbar/Navbar"
import { BrowserRouter,Routes, Route} from "react-router-dom"
import Landing from "components/Landing/Landing"
import Login from "components/LoginForm/LoginForm"
import Register from "components/RegistartionForm/RegistrationForm"
import ActivityPage from "components/ActivityPage/ActivityPage"
import Nutrition from "components/Nutrition/Nutrition"
import NotFound from "components/NotFound/NotFound"
import { AuthContextProvider, useAuthContext } from "../../contexts/auth"
import apiClient from "../../services/apiClient"
import AccessForbidden from "components/AccessForbidden/AccessForbidden"



export default function AppContainter() {
  return (
    <AuthContextProvider>
      <App/>
    </AuthContextProvider>
  )
}

function App() {
  const {user, setUser} = useAuthContext()
  const [error, setError] = useState()
  const [nutritions, setNutrition] = useState([])
  useEffect(() => {
    const fetchUser = async () => {
      const { data, err } = await apiClient.fetchUserFromToken()
      console.log(76,data)
      if (data) setUser(data.user)
      if(error) setError(err)

    }

    const token = localStorage.getItem("token")
    if (token) {
      apiClient.setToken(token)
      fetchUser()
    }
  }, [])
  const addNutrition = (newNutrition) => {
    setNutrition((oldNutrition) => [newNutrition, ...oldNutrition])
  }
  const handleLogout = async () => {
    await apiClient.logoutUser()
    setUser({})
    setError(null)
  }
  
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
        <Navbar user = {user} setUser = {setUser} handleLogout = {handleLogout}/>
        <Routes>
          <Route path ="/" element = {<Landing/>}/>
          <Route path ="/Login" element = {<Login user = {user} setUser={setUser}/>}/>
          <Route path ="/Register" element = {<Register user = {user} setUser = {setUser}/>}/>
          <Route path ="Activity" element = {user?.email?(<ActivityPage/>):(<NotFound/>)}/>
          <Route path ="/nutrition/*" element = {user?.email?(<Nutrition user = {user} addNutrition={addNutrition}/>)  : (<NotFound/>)}/>
          <Route path ="*" element = {<NotFound/>}/>
        </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}
