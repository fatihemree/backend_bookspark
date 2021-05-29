import admin from '../../utils/firebase_config'
import { LOGIN_URL } from '../../utils/constant'
import axios from 'axios'
// import { parse, stringify } from 'flatted';
// email: user.email,
// emailVerified: user.emailVerified,
// phoneNumber: user.phoneNumber,
// password: user.password,
// displayName: user.displayName,
// photoURL: user.photoURL,
// disabled: user.disabled,
export default class UserSevice {

  // static async signOut() {
  //     return await admin
  //         .auth()
  //         .signOut()
  // }


  static async login(params) {
    params.returnSecureToken = true;
    const result = await axios.post(LOGIN_URL, params, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    return result
  }

  static async userSave(uid,user) {
    // console.log(uid,user)
    return await admin
      .firestore()
      .collection('users')
      .doc(uid)
      .set(user)
  }

  static async register(user) {
      return await admin
          .auth()
          .createUser(user)
  }
};
