import admin from '../utils/firebase_config'

export default class UserSevice {

    static async register(user) {
        const result = await admin
            .auth()
            .createUser({
                email: user.email,
                emailVerified: user.emailVerified,
                phoneNumber: user.phoneNumber,
                password: user.password,
                displayName: user.displayName,
                photoURL: user.photoURL,
                disabled: user.disabled,
            })
        return result;
    }
};
