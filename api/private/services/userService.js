import admin from '../../utils/firebase_config'
// import { LOGIN_URL } from '../../utils/constant'
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


    ///array uid alıyor
    static async info(users) {
        // console.log(users)
        return admin
            .auth()
            .verifyIdToken(users)
    }
    static async delete(...users) {
        console.log(users)
        return await admin
            .auth()
            .deleteUsers(users)
    }

    static async update(user, uid) {
        return await admin
            .auth()
            .updateUser(uid, user)
    }

    static async emailFind(email) {
        return await admin
            .auth()
            .getUserByEmail(email)
    }

    static async allUser() {
        return await admin
            .auth()
            .listUsers(1000)
    }
};
