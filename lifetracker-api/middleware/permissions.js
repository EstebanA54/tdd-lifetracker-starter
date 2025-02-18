const Nutrition = require("../models/nutrition")
const { BadRequestError, ForbiddenError } = require("../utils/errors")

const authedUserOwnsNutrition = async (req, res, next) => {
  try {
    const { user } = res.locals
    const { nutritionId } = req.params
    const nutrition = await Nutrition.fetchNutritionById(nutritionId)

 
    if (nutrition.email !== user.email) {
      throw new ForbiddenError("User is not allowed to fetch nutrition for other users' listings.")
    }

    res.locals.nutrition = nutrition

    return next()
  } catch (err) {
    return next(err)
  }
}

module.exports = {
  authedUserOwnsNutrition
}