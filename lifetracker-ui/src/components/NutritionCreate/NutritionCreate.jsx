import * as React from "react"
import NutritionForm from "components/NutritionForm/NutritionForm";



export default function NutritionCreate(props){
    return (
        <div className="nutrition-create">
            <NutritionForm user = {props.user} item = {props.item} setItem = {props.setItem}> addNutrition={props.addNutrition}</NutritionForm>
        </div>
    )
}