import * as React from "react"
import "./App.css"
import { useState } from "react"
import Navbar from "components/Navbar/Navbar"
import { BrowserRouter,Routes, Route} from "react-router-dom"
import Landing from "components/Landing/Landing"
import Login from "components/LoginForm/LoginForm"
import Register from "components/RegistartionForm/RegistrationForm"
import Activity from "components/ActivityPage/ActivityPage"
import Nutrition from "components/Nutrition/Nutrition"
import Sleep from "components/Sleep/Sleep"
import Excercise from "components/Excercise/Excercise"
import NotFound from "components/NotFound/NotFound"
export default function App() {
  const [appState, setAppState] =useState({})
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path ="/" element = {<Landing/>}/>
          <Route path ="/Login" element = {<Login setAppState = {setAppState}/>}/>
          <Route path ="/Register" element = {<Register setAppState = {setAppState}/>}/>
          <Route path ="Activity" element = {<Activity setAppState = {setAppState} appState = {appState} user = {appState?.user}/>}/>
          <Route path ="/Nutrition" element = {<Nutrition setAppState = {setAppState} appState = {appState} user = {appState?.user}/>}/>
          <Route path ="/Sleep" element = {<Sleep setAppState = {setAppState} appState = {appState} user = {appState?.user}/>}/>
          <Route path ="/Excercise" element = {<Excercise setAppState = {setAppState} appState = {appState} user = {appState?.user}/>}/>
          <Route path ="*" element = {<NotFound/>}/>
        </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}
