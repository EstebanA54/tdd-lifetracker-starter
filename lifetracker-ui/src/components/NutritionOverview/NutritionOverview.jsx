import NutritionFeed from "components/NutritionFeed/NutritionFeed";
import "./NutritionOverview.css"
import { Link } from "react-router-dom";
import * as React from "react"


export default function NutritionOverview(props){
    return(
        <div className="nutrition-overview">
            <Link className="nutrition-btn" to="/nutrition/create">Record Nutrition</Link>
            <h3 className="header">Overview</h3>
            <NutritionFeed user = {props.user} item ={props.item}></NutritionFeed>
        </div>
    )
}