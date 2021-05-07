
import { userRegisterValidation } from '../utils/validation'
import userServices from '../services/userServices'
import Util from '../utils/utils'
// import { userRegister } from './../utils/validation';
// import { response } from 'express';

const util = new Util()


export default class UserController {

  static async register(req, res) {
    try {

      const user = req.body
      const validate = userRegisterValidation(user)
      if (!validate.res) {
        util.setError(200, validate.err)
        return util.send(res)
      }

      const result = await userServices.register(user)
      util.setSuccess(200, 'save created', result)
      return util.send(res)
    }
    catch (err) {
      util.setError(200, err)
      return util.send(res)
    }
  }

}