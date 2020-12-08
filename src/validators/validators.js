import { Joi } from 'celebrate'

const validateBody = Joi.object({
  data: Joi.object({
    name: Joi.string().required().max(64),
    email: Joi.string().email().lowercase().required().max(64),
    subject: Joi.string().required().max(64),
    message: Joi.string().required().max(256)
  }).required()
})

export default {
  validateBody
}
