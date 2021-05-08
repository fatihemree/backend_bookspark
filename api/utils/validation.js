import Joi from '@hapi/joi'

function validateError(error) {
  error.forEach((err) => {
    const errCode = err.code

    // console.log(err)
  })
}

/*
*   ---------------------  user register & update validate  ---------------------
*/
export const userRegisterValidation = (object) => {
  const userRegister = Joi.object({
    emailVerified: Joi.boolean().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    password: Joi.string().required(),
    displayName: Joi.string().required(),
    photoURL: Joi.string().required(),
    disabled: Joi.boolean().required(),
  })

  const result = user .validate(object, { abortEarly: false })
  if (result.error) {
    return {
      res: false,
      err: {
        // eslint-disable-next-line no-underscore-dangle
        message: result.error.message,
        value: result.error.details[0].context.value,
      },
    }
  }
  return { res: true }
}

/*
*   ---------------------  email validate  ---------------------
*/

export const emailValidate = (email) => {
  const scheme = Joi.string().email().required()
  const result = scheme.validate(email)
  if (result.error) {
    return {
      res: false,
      err: {
        // eslint-disable-next-line no-underscore-dangle
        message: result.error.message,
        value: result.error.details[0].context.value,
      },
    }
  }
  return { res: true }
}

// export const emailValidate = (email) => {
//   const scheme = Joi.string().email().required()
//   const result = scheme.validate(email)
//   if (result.error) {
//     return {
//       res: false,
//       err: {
//         // eslint-disable-next-line no-underscore-dangle
//         message: result.error.message,
//         value: result.error.details[0].context.value,
//       },
//     }
//   }
//   return { res: true }
// }

