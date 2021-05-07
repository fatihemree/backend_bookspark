import Joi from '@hapi/joi'

function validateError(error) {
  error.forEach((err) => {
    const errCode = err.code

    // console.log(err)
  })
}

export function userRegisterValidation(object) {
  const userRegister = Joi.object({
emailVerified: Joi.boolean().required(),
email: Joi.string().email().required(),
phoneNumber: Joi.string().required(),
password: Joi.string().required(),
displayName: Joi.string().required(),
photoURL: Joi.string().required(),
disabled: Joi.boolean().required(),
  })

  // const schema = Joi.object(userRegister)

  const result = userRegister.validate(object, { abortEarly: false })
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


// export function isPersoneId(personelId) {
//   const idArray = Joi.array().items(Joi.number().required())
//   const result = idArray.validate(personelId, { abortEarly: false })
//   if (result.error) {
//     const value = result.error.details[0].context.value
//     const key = result.error.details[0].context.key

//     return {
//       res: false,
//       err: `id should be in string not number => value: "${value}" key: "${key}"`,
//     }
//   }
//   return { res: true }
// }