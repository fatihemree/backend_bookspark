import Util from '../../utils/utils'
import BookServices from '../services/bookService'
import Scrapping from '../../utils/scrapping'
const util = new Util()

export default class BookController {

    static async search(req, res) {
        try {
            const query = req.query.q;
            const result = await Scrapping(query)
            util.setSuccess(200, 'Arama Tamamlandı', result)
            return util.send(res)
        } catch (error) {
            util.setSuccess(404, 'Arama Başarısız', error)
            return util.send(res)
        }
    }
    static async trend(req, res) {
        try {
            const query = req.query.q;
            const result = await BookServices.trend(1)
            // console.log(istek)
            const trendList = result.data.gonderiler
            util.setSuccess(200, '', trendList)
            return util.send(res)
        } catch (error) {
            util.setSuccess(404, 'Arama Başarısız', error)
            return util.send(res)
        }
    }
}