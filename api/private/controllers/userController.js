// /**
//  *  @typedef userRegister
//  *  @property {string} email
//  *  @property {string} emailVerified
//  *  @property {string} phoneNumber
//  *  @property {string} password
//  *  @property {string} displayName
//  *  @property {string} photoURL
//  *  @property {string} disabled
//  */

// /**
//  *  @typedef userLogin
//  *  @property {string} email
//  *  @property {string} password
//  */


//  import { userRegisterValidation, emailValidate, userLoginValidation } from '../../utils/validation'
import userServices from '../services/userService'
import Util from '../../utils/utils'
import admin from '../../utils/firebase_config'

const util = new Util()


export default class UserController {

    /**
     * @route GET /private/v1/User/info
     * @group Private/User
     // * @param {userLogin.model} body.body 
     * @returns {object} 200 - Success message
     * @returns {Error} default - Unexpected error
     */

    static async info(req, res) {
        try {
            const result =await userServices.info(req.headers.authorization)
            util.setSuccess(200,"Kullancı Verileri",result)
            util.send(res);
        } catch (error) {
            util.setErrorFirebase(res,error)
        }
    }

}