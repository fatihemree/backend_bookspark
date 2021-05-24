import express from 'express';
import path from 'path';
import admin from '../utils/firebase_config'
import Helpers from '../utils/helpers';
import Utils from '../utils/utils'
const app = express();
const basename = path.basename(__filename);
const utils = new Utils();
app.use(async (req, res, next) => {

    const uid = req.headers.authorization;
    console.log(uid)
    try {
        const result = await admin.auth().verifyIdToken(uid)
        if (result) next()

    } catch (error) {
        utils.setError(401, error)
        utils.send(res)
    }


});

const folderRoute = `${__dirname}/routes`;
require('fs')
 	.readdirSync(folderRoute)
 	.filter((file) => {

 		return (
 			file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
 		);

 	})
 	.forEach((file) => {

 		const routeName = Helpers.getFileRoute(file);
 		app.use(
 			`/v1/${routeName}`,
 			require(folderRoute + path.sep + file.split('.')[0])
 		);
	
	});

module.exports = app;