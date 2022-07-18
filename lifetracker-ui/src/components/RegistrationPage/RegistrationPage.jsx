import * as React from "react"
import "./RegistrationPage.css"
import Register from "components/RegistartionForm/RegistrationForm"
import RegistrationForm from "components/RegistartionForm/RegistrationForm"

export default function RegistartionPage() {
    return (
        <nav className="registration-page">
            <Register/>
            <RegistrationForm user={user} setUser={setUser}/>
        </nav>
    )
}