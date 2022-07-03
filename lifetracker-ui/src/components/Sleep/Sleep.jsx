import * as React from "react"
import "./Sleep.css"
import AccessForbidden from "components/AccessForbidden/AccessForbidden"
export default function Sleep(user, setAppState) {
    const isAuthenticated = Boolean(user?.email)

    if(isAuthenticated){
        return(
            <div className="sleep">
                Please get some rest
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