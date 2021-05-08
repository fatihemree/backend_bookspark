/**
 *  @typedef userRegister
 *  @property {string} email
 *  @property {string} emailVerified
 *  @property {string} phoneNumber
 *  @property {string} password
 *  @property {string} displayName
 *  @property {string} photoURL
 *  @property {string} disabled
 */


import { userRegisterValidation, emailValidate } from '../../utils/validation'
import userServices from '../services/userServices'
import Util from '../../utils/utils'

const util = new Util()


export default class UserController {

  /**
   * @route POST /public/v1/User/register
   * @group Public/User
   * @param {userRegister.model} body.body 
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

  /**
   * @route POST /public/v1/User/delete
   * @group Public/User
   * @param {array<string>} body.body
   * @returns {object} 200 - Success message
   * @returns {Error} default - Unexpected error
   */

  static async delete(req, res) {
    try {
      const user = req.params.uid
      const result = await userServices.delete(user)
      util.setSuccess(200, 'delete succesfull', result)
      return util.send(res)
    }
    catch (err) {
      util.setError(200, err)
      return util.send(res)
    }
  }

  /**
   * @route POST /public/v1/User/update
   * @group Public/User
   * @param {userRegister.model} body.body
   * @param {string} uid.body
   * @returns {object} 200 - Success message
   * @returns {Error} default - Unexpected error
   */

  static async update(req, res) {

    try {
      const [uid, user] = [req.params.uid, req.body]

      const result = await userServices.update(user, uid)
      util.setSuccess(200, 'Update succesful', result)
      return util.send(res)
    }
    catch (err) {
      util.setError(200, err)
      return util.send(res)
    }
  }

  static async emailFind(req, res) {
    try {
      const user = req.params.email
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
      const result = await userServices.allUser()
      util.setSuccess(200, 'all users list', result)
      return util.send(res)
    }
    catch (err) {
      util.setError(200, err)
      return util.send(res)
    }
  }

}