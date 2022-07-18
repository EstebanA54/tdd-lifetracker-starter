import { Link } from "react-router-dom"
import "./NutritionForm.css"

export default function NutritionForm({nutrition,nutritions}) {
console.log(5412,nutrition)
console.log(542,nutritions)
  return (
    <div className="nutrition">
      <Link
        className="media"
        style={{
          backgroundImage: `url(${nutrition.imageUrl})`,
        }}
        to={`/nutrition/${nutrition.id}`}
      ></Link>

      <div className="body">
        <div className="info">
          <p className="caption">{nutrition.caption}</p>
        </div>

        <div className="meta">
          <span className="date">{(nutrition.createdAt)}</span>
          
        </div>
      </div>
    </div>
  )
}



