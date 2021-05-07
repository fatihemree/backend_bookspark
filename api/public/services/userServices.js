import admin from '../../utils/firebase_config'

export default class UserSevice {

    static async register(user) {
        return await admin
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
    }

    ///array uid alıyor
    static async delete(...users) {
        return await admin
            .auth()
            .deleteUsers(users)
    }

    static async update(user, uid) {
        return await admin
            .auth()
            .updateUser(uid, {
                email: user.email,
                emailVerified: user.emailVerified,
                phoneNumber: user.phoneNumber,
                password: user.password,
                displayName: user.displayName,
                photoURL: user.photoURL,
                disabled: user.disabled,
            })
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
