import cheerio from 'cheerio'
import {SCRAPY_URL} from '../../utils/constant'


export default cheerio.load(SCRAPY_URL)

