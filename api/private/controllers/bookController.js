import BookService from '../services/bookService'
import Util from '../../utils/utils'

const util = new Util();

export default class BoookController {

    static async saveBook(req, res) {
        try {
            const { isbn, ...bookDetail } = req.body
            console.log('isbn', isbn, 'bookDetail', bookDetail);
            const validate = userLoginValidation(bookDetail)
            if (!validate.res) {
                util.setError(200, validate.err)
                return util.send(res)
            }
            const result = await BookService.saveBook(req.session.uid, isbn, bookDetail)
            util.setSuccess(200, 'kitap verisi eklendi', result.data)
            util.send(res)
        } catch (error) {
            util.setErrorFirebase(res, error)
        }
    }

    static async allBook(req, res) {
        try {
            const result = await BookService.allBook(req.session.uid)
            if (result.length > 0)
                util.setSuccess(res, 'Tüm Kitaplar', result)
        } catch (error) {
            console.log(error)
            util.setErrorFirebase(res, error)
        }
    }

}