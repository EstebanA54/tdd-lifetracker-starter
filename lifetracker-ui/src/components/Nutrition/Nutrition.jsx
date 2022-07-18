import NotFound from "components/NotFound/NotFound";
import NutritionDetail from "components/NutritionDetail/NutritionDetail";
import NutritionCreate from "components/NutritionCreate/NutritionCreate";
import NutritionOverview from "components/NutritionOverview/NutritionOverview";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import { useState } from "react";
import NewNutritionForm from "components/NutritionNew/NutritionNew";


export default function Nutrition(props){
    const [item,setItem] = useState([])


    return (
        <div className="nutrition-page">
            <Routes>
                <Route path= "/" element={<NutritionOverview user={props.user} item = {item}/>}></Route>
                <Route path= "/create" element={<NutritionCreate user={props.user} item = {item} setItem={setItem} addNutrition= {props.addNutrition}/>}></Route>
                <Route path= "/id/:nutritionId" element={<NutritionDetail user={props.user}/>}></Route>
                <Route path= "*" element={<NotFound/>}></Route>
            </Routes>
        </div>
    )
}