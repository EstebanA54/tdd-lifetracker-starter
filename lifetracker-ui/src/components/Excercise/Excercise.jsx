import * as React from "react"
import "./Excercise.css"
import AccessForbidden from "components/AccessForbidden/AccessForbidden"
export default function Excercise(user, setAppState) {
    const isAuthenticated = Boolean(user?.email)

    if(isAuthenticated){
        return(
            <div className="excercise">
                Excercise!!
            </div>
        )
    } else {
        return (
            <div>
                <AccessForbidden setAppState={setAppState}/>
            </div>
        )
    }

}