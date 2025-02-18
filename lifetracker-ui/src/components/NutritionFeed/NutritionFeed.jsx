
import NutritionCard from "components/NutritionCard/NutritionCard"
import "./NutritionFeed.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import apiClient from "../../services/apiClient"

export default function NutritionFeed(props) {
    const [nutrition, setNutrition] = useState([])
    const [error, setError] = useState() 

    async function getNutrition(){
      const {data, err} = await apiClient.fetchNutrition()
      console.log(22,data)
      if(err) setError(err)
      if(data){
        setNutrition(data.nutritions)
      }
      console.log(12,nutrition)
      }
  useEffect(() => {
    getNutrition()
  }, []);
  return (
    <div className="nutrition-feed">

      <div>
        {nutrition.map((item) => {return(
            <Link to={`id/`+item.id}>
                <NutritionCard key={item.name} quantity={item.quantity} name={item.name} calories={item.calories} imageUrl={item.imageUrl} category={item.category} id={item.id}/>
            </Link>
        )})}
      </div>
    </div>
  )
}