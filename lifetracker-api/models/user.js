const bcrypt = require("bcrypt")
const db = require("../db")
const {BCRYPT_WORK_FACTOR} = require ("../config")
const {UnauthorizedError , BadRequestError} = require("../utils/errors")


class User {

    static async makePublicUser(user){
        return{
            id: user.id,
            email: user.email,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            createdAt: user.created_at

        }
    }


    static async login(credentials){
        const requiredFields = ["email", "password"]
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field))
            {
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })
        const user= await User.fetchUserByEmail(credentials)
        
        if (user){
            const isValid = await bcrypt.compare(credentials.password,user.password)
            if(isValid){
                return User.makePublicUser(user)
            }
        }



        throw new UnauthorizedError("Invalid email/password combo")
    }




    static async register (credentials){
        console.log(credentials)
        const requiredFields = ["email", "username", "firstname", "lastname", "password", "confirmPassword"]
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field))
            {
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })
        if (credentials.email.indexOf('@') <= 0) {
            throw new BadRequestError("Invalid email.")
        }


        const existingUser = await User.fetchUserByEmail(credentials.email)
        if (existingUser){
            throw new BadRequestError(`Duplicate email: ${credentials.email}`)
        }

        const hashedPassword = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR)

        if (existingUser) {
            throw new BadRequestError(`Duplicate email: ${credentials.email}`)
        }

        /*console.log(credentials.email)*/
        const lowercasedEmail = credentials.email.toLowerCase()

        const result = await db.query(`
        INSERT INTO users (
            email,
            password,
            first_name,
            last_name,
            username
        )
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, email, username, updated_at, created_at; 
        `,[lowercasedEmail, hashedPassword, credentials.username,credentials.first_name,credentials.lastname]
        )

        const user = result.rows[0]

        return User.makePublicUser(user)

    }
    static async fetchUserByEmail(email) {
        if (!email) {
            throw new BadRequestError("No email provided")
        }

        const query =  `SELECT * FROM users WHERE email = $1`
        const lowerEmail = email.toLowerCase()
        const result = await db.query(query, [lowerEmail])

        const user = result.rows[0]

        return user
    }




}




module.exports = User