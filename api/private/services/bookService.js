
import admin from '../../utils/firebase_config'
// import { SCRAPY_API_URL } from '../../utils/constant'
import publibBookService from '../../public/services/bookService'
const FieldValue = admin.firestore.FieldValue;
export default class BookService {

    static async saveBook(uid, isbn, bookDetail) {
        return await admin
            .firestore()
            .collection('users')
            .doc(uid)
            .collection('userBook')
            .doc(isbn)
            .set(bookDetail)
    }
    static async allBook(uid) {
        var data = []
        var filter = []
        const scrappingFilter = ["adi", "resim", "sayfasayisi", "isbn", "yayinevi", "baskiyili", "baskiayi", "yazarAdi"]
        const result = await admin
            .firestore()
            .collection('users')
            .doc(uid)
            .collection('userBook')
            .get()

        for (const item of result.docs) {
            const scrapping = await publibBookService.search(item.id)
            const scrappingResult = scrapping.data.sonuclar[0].icerik
            scrappingFilter.forEach((item) => filter[item] = scrappingResult[item])
            data.push({ id: item.id, ...filter, ...item.data() })
        }
        return data
    }
}

