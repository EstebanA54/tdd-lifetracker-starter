import * as React from "react"
import "./Nutrition.css"
import AccessForbidden from "components/AccessForbidden/AccessForbidden"
export default function Nutrition(user, setAppState) {
    const isAuthenticated = Boolean(user?.email)

    if(isAuthenticated){
        return(
            <div className="nutrition">
                Nutrition Facts!
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