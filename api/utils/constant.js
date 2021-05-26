require('dotenv').config();
const MAIN_URL = 'https://identitytoolkit.googleapis.com/v1';
const API_KEY = '?key=' + process.env.FIREBASE_KEY;

//account
export const LOGIN_URL = MAIN_URL + '/accounts:signInWithPassword' + API_KEY;


export const SCRAPY_URL='https://1000kitap.com'
export const SCRAPY_API_URL='https://api.1000kitap.com'
