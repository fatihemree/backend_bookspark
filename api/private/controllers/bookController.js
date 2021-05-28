import BookService from '../services/bookService'
import Util from '../../utils/utils'

const util = new Util();

export default class BoookController {

    static async saveBook(req, res) {
        try {
            // console.log(req.session.uid)
            const result = await BookService.saveBook(req.session.uid, isbn, bookDetail)
            util.setSuccess(200, 'kitap verisi', result.data)
            util.send(res)
        } catch (error) {
            util.setErrorFirebase(res, error)
        }
    }
    static async allBook(req, res) {
        try {
            const result = await BookService.allBook(req.session.uid)
            if (result.length > 0) {
                console.log(result)
            }
            // result.map(item => console.log(item.id))
            // util.setSuccess(200, 'kitap verisi', result.data())
            // util.send(res)
        } catch (error) {
            console.log(error)
            util.setErrorFirebase(res, error)
        }
    }

}