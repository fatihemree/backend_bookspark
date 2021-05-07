import * as admin from 'firebase-admin';
var serviceAccount = require("C:/booksparkkeys.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export default admin;