import express from 'express'
import { celebrate } from 'celebrate'
import validator from '../validators/validators'
import EmailController from '../controllers/EmailController'
import asyncHandler from '../middlewares/asyncHandler'

const emailRoutes = () => {
  const emailRouter = express.Router()

  emailRouter.route('/send')
    .post(celebrate({
      body: validator.validateBody
    }, { abortEarly: false }), asyncHandler(EmailController.send))

  return emailRouter
}

export default emailRoutes
