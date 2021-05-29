import BookService from '../services/bookService'
import Util from '../../utils/utils'
import { bookSaveValidation } from '../../utils/validation'
import Scrapping from '../../utils/scrapping'
const util = new Util();

export default class BoookController {

    static async userAddBook(req, res) {
        try {
            const { isbn, ...bookDetail } = req.body
            // console.log('isbn', isbn, 'bookDetail', bookDetail);
            const validate = bookSaveValidation(req.body)
            if (!validate.res) {
                util.setError(200, validate.err)
                return util.send(res)
            }
            // const response = await Scrapping(isbn)
            const result = await BookService.userAddBook(req.session.uid, isbn, bookDetail)
            if (result)
                await BookService.bookAddBook(isbn)
            util.setSuccess(200, 'kitap verisi eklendi', result.data)
            util.send(res)
        } catch (error) {
            console.log(error)
        }
    }

    static async allBook(req, res) {
        try {
            const result = await BookService.allBook(req.session.uid)
            if (result.length > 0) {
                util.setSuccess(res, 'Tüm Kitaplar', result)
                return util.send(res)
            }
            util.setError(400, 'veri yok')
            util.send(res)
        } catch (error) {
            console.log(error)
            util.setErrorFirebase(res, error)
        }
    }

}