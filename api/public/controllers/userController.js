/**
 * @typedef NewsReq
 * @property {string} title
 * @property {string} news_text
 */

import { userRegisterValidation, emailValidate } from '../../utils/validation'
import userServices from '../services/userServices'
import Util from '../../utils/utils'

const util = new Util()


export default class UserController {

  /**
   * @route POST /public/v1/User/register
   * @group Public/User
   * @summary Kullanıcı kayıt
   * @returns {object} 200 - Success message 
   * @returns {Error} default - Unexpected error 
   */
  
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

  static async delete(req, res) {
    try {
      const user = req.body
      const result = await userServices.delete(user)
      util.setSuccess(200, 'delete succesfull', result)
      return util.send(res)
    }
    catch (err) {
      util.setError(200, err)
      return util.send(res)
    }
  }

  static async update(req, res) {
    try {
      const uid = req.match.uid
      const user = req.body
      const validate = userRegisterValidation(user)
      if (!validate.res) {
        util.setError(200, validate.err)
        return util.send(res)
      }
      const result = await userServices.update(user, uid)
      util.setSuccess(200, 'Update succesfulf', result)
      return util.send(res)
    }
    catch (err) {
      util.setError(200, err)
      return util.send(res)
    }
  }

  static async emailFind(req, res) {
    try {
      const user = req.match.email
      const validate = emailValidate(user)
      if (!validate.res) {
        util.setError(200, validate.err)
        return util.send(res)
      }
      const result = await userServices.emailFind(user)
      util.setSuccess(200, 'uid adress', result)
      return util.send(res)
    }
    catch (err) {
      util.setError(200, err)
      return util.send(res)
    }
  }

  static async allUsers(req, res) {
    try {
      const user = req.body
      const validate = userRegisterValidation(user)
      if (!validate.res) {
        util.setError(200, validate.err)
        return util.send(res)
      }
      const result = await userServices.allUser()
      util.setSuccess(200, 'all users list', result.toJSO())
      return util.send(res)
    }
    catch (err) {
      util.setError(200, err)
      return util.send(res)
    }
  }

}