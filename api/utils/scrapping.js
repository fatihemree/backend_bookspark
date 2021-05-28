//Filter Scrapping
import axios from 'axios'
import { SCRAPY_API_URL } from './constant'


// const books = result.data.sonuclar.filter(item => item.turu === 'kitap')

// for (const item of result.docs) {
//     const scrappingFilter = ["adi", "resim", "sayfasayisi", "isbn", "yayinevi", "baskiyili", "baskiayi", "yazarAdi",]
//     const scrapping = await publibBookService.search(item.id)
//     const scrappingResult = scrapping.data.sonuclar[0].icerik
//     scrappingFilter.forEach((item) => filter[item] = scrappingResult[item])
//     data.push({ id: item.id, ...filter, ...item.data() })
// }



export default async function Scrapping(query) {
    const data = []
    const filterConfig = ["adi", "resim", "sayfasayisi", "isbn", "yayinevi", "baskiyili", "baskiayi", "yazarAdi"]
    const result = await axios.get(SCRAPY_API_URL + "/ara?q=" + query, {
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "cookie": "c2kbe=e365c731771621980575; ekranYuksekligibe=667; barbe=50; uyarisizSayibe=2; yeniSiteUyarisibe=1; PHPSESSID=0ba8542fb2844e4bbe7e50a8711819ec; ekranGenisligibe=781; qbe="
        }
    })
    const isIsbn = result.data.sonuclar.filter((item, index, array) => (item.turu === "kitap" && item.icerik.isbn.length === 13))

    for (const item of isIsbn) {
        const temp = {}
        filterConfig.forEach(element => temp[element] = item.icerik[element])
        data.push(temp)
    }
    return data
}
