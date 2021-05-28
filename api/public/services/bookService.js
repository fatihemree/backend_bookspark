
import axios from 'axios'

import { SCRAPY_API_URL } from '../../utils/constant'
import Scrapping from '../../utils/scrapping'
export default class BookService {

  static async search(query) {
    // return await axios.get(SCRAPY_API_URL + "/ara?q=" + query, {
    //   "headers": {
    //     "accept": "application/json, text/javascript, */*; q=0.01",
    //     "cookie": "c2kbe=e365c731771621980575; ekranYuksekligibe=667; barbe=50; uyarisizSayibe=2; yeniSiteUyarisibe=1; PHPSESSID=0ba8542fb2844e4bbe7e50a8711819ec; ekranGenisligibe=781; qbe="
    //   }
    // });
    return await Scrapping(query)
  }

  static async trend(page) {
    return await axios.get(SCRAPY_API_URL + "/neOkusam?s=&sayfa=" + page + "&kume=-1&z=0&fr=1", {
      "headers": {
        "accept": "application/json",
        "cookie": "c2kbe=e365c731771621980575; ekranYuksekligibe=667; barbe=50; uyarisizSayibe=2; yeniSiteUyarisibe=1; PHPSESSID=0ba8542fb2844e4bbe7e50a8711819ec; ekranGenisligibe=781; qbe=; yeniSitebe=1; gecisYapildibe=1; istemcibe=eyJjbGllbnRLZXkiOjEyMzQ1Niwic2RrVmVyc2lvbiI6Il40MS4wLjAiLCJhcHBWZXJzaW9uIjoiMi4xMy40MyIsImNrIjoiNzJkMjI5ZGYtNmEwZC00YWE1LWI0OTgtZTI0MzlmMDdkMDFiIiwiZGV2aWNlTmFtZSI6IkNocm9taXVtIEVkZ2UiLCJvcyI6IndlYiJ9; hbe=667; wbe=542"
      }
    });
  }

}