
import admin from '../../utils/firebase_config'
import Scrapping from '../../utils/scrapping';
const FieldValue = admin.firestore.FieldValue;
export default class BookService {

    static async userAddBook(uid, isbn, bookDetail) {
        return await admin
            .firestore()
            .collection('users')
            .doc(uid)
            .collection('userBook')
            .doc(isbn)
            .set({
                timestamp: FieldValue.serverTimestamp(),
                ...bookDetail
            })
    }
    static async bookAddBook(isbn) {
        const scrapping = await Scrapping(isbn)
        return await admin
            .firestore()
            .collection('books')
            .doc(isbn)
            .set({
                timestamp: FieldValue.serverTimestamp(),
                ...scrapping[0]
            })
    }
    static async allBook(uid) {
        // console.log(uid)
        var data = []
        const result = await admin
            .firestore()
            .collection('users')
            .doc(uid)
            .collection('userBook')
            .get()
        for (const item of result.docs) {
            const filter = await Scrapping(item.id)
            // console.log(item)
            data.push({ id: item.id, ...filter, ...item.data() })
        }
        return data
    }
}

