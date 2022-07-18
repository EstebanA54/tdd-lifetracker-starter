const db = require("../db")
const {BadRequestError, NotFoundError} = require("../utils/errors")
const User = require("../models/user")

class Nutrition{
    static async listNutrition({user}){
        const results = await db.query(
            `
            SELECT n.id,
                   n.name,
                   n.category,
                   n.calories,
                   n.quantity,
                   n.image_url AS "imageUrl",
                   n.user_id AS "userId",
                   u.email AS "userEmail",
                   n.created_at AS "createdAt"
            FROM nutrition AS n
                JOIN users AS u ON u.id = n.user_id
            WHERE n.user_id = (SELECT users.id FROM users WHERE email = $1)
            ORDER BY n.created_at DESC
            `,[user.email]
        
        )

        const nutrition = results.rows

        return nutrition

    }


    static async fetchNutritionById(id){
        const results = await db.query(
            `
            SELECT n.id,
                   n.name,
                   n.category,
                   n.calories,
                   n.quantity,
                   n.image_url AS "imageUrl",
                   n.user_id AS "userId",
                   u.email AS "userEmail",
                   n.created_at AS "createdAt"
            FROM nutrition AS n
                JOIN users AS u ON u.id = n.user_id
            WHERE n.id =$1
            `, [id]
        )
        if(!results){
            throw new NotFoundError
        }

        const nutrition = results.rows

        return nutrition
    }

    static async createNutrition({nutrition,user}){
        const requiredFields = ["name", "category", "calories", "quantity", "image_url"]
        requiredFields.forEach(field => {
            if(!nutrition.hasOwnProperty(field)){
                throw new BadRequestError(`Required field - ${field} - missing from request body.`)
            }
        })
        

        const results = await db.query(
            `
            INSERT INTO nutrition (user_id, name, category, quantity, calories, image_url)
            VALUES ((SELECT id FROM users WHERE email = $1), $2, $3, $4, $5, $6)
            RETURNING id,
                    user_id AS "userId",
                    name,
                    category,
                    quantity,
                    calories,
                    image_url AS "imageUrl",
                    created_at AS "createdAt"
            `,
            [ user.email, nutrition.name, nutrition.category, nutrition.quantity, nutrition.calories, nutrition.image_url]

        );

        return results.rows[0]
    }


}









module.exports = Nutrition