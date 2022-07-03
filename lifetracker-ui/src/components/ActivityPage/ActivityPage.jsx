import * as React from "react"
import "./ActivityPage.css"
import AccessForbidden from "components/AccessForbidden/AccessForbidden"
export default function ActivityPage(user, setAppState) {
    const isAuthenticated = Boolean(user?.email)

    if(isAuthenticated){
        return(
            <div className="activity">
                Activity page
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
