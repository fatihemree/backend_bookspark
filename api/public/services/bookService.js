
import axios from 'axios'

import { SCRAPY_API_URL } from '../../utils/constant'

export default class BookService {

  static async search(query) {
    return await axios.get(SCRAPY_API_URL + "/ara?q=" + query, {
      "headers": {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "cookie": "c2kbe=e365c731771621980575; ekranYuksekligibe=667; barbe=50; uyarisizSayibe=2; yeniSiteUyarisibe=1; PHPSESSID=0ba8542fb2844e4bbe7e50a8711819ec; ekranGenisligibe=781; qbe="
      }
    });
  }

  //   fetch("https://api.1000kitap.com/neOkusam?s=&sayfa=3&kume=0&fr=1", {
  //   "headers": {
  //     "accept": "application/json",
  //     "accept-language": "en-GB,en;q=0.9,en-US;q=0.8,tr;q=0.7",
  //     "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Microsoft Edge\";v=\"90\"",
  //     "sec-ch-ua-mobile": "?0",
  //     "sec-fetch-dest": "empty",
  //     "sec-fetch-mode": "cors",
  //     "sec-fetch-site": "same-site",
  //     "cookie": "c2kbe=e365c731771621980575; ekranYuksekligibe=667; barbe=50; uyarisizSayibe=2; yeniSiteUyarisibe=1; PHPSESSID=0ba8542fb2844e4bbe7e50a8711819ec; ekranGenisligibe=781; qbe=; yeniSitebe=1; gecisYapildibe=1; istemcibe=eyJjbGllbnRLZXkiOjEyMzQ1Niwic2RrVmVyc2lvbiI6Il40MS4wLjAiLCJhcHBWZXJzaW9uIjoiMi4xMy40MyIsImNrIjoiNzJkMjI5ZGYtNmEwZC00YWE1LWI0OTgtZTI0MzlmMDdkMDFiIiwiZGV2aWNlTmFtZSI6IkNocm9taXVtIEVkZ2UiLCJvcyI6IndlYiJ9; hbe=667; wbe=542"
  //   },
  //   "referrer": "https://yeni.1000kitap.com/",
  //   "referrerPolicy": "strict-origin-when-cross-origin",
  //   "body": null,
  //   "method": "GET",
  //   "mode": "cors"
  // });

  static async trend(page) {
     return await axios.get(SCRAPY_API_URL+"/neOkusam?s=&sayfa="+page+"&kume=-1&z=0&fr=1", {
      "headers": {
        "accept": "application/json",
        "cookie": "c2kbe=e365c731771621980575; ekranYuksekligibe=667; barbe=50; uyarisizSayibe=2; yeniSiteUyarisibe=1; PHPSESSID=0ba8542fb2844e4bbe7e50a8711819ec; ekranGenisligibe=781; qbe=; yeniSitebe=1; gecisYapildibe=1; istemcibe=eyJjbGllbnRLZXkiOjEyMzQ1Niwic2RrVmVyc2lvbiI6Il40MS4wLjAiLCJhcHBWZXJzaW9uIjoiMi4xMy40MyIsImNrIjoiNzJkMjI5ZGYtNmEwZC00YWE1LWI0OTgtZTI0MzlmMDdkMDFiIiwiZGV2aWNlTmFtZSI6IkNocm9taXVtIEVkZ2UiLCJvcyI6IndlYiJ9; hbe=667; wbe=542"
      }
    });
  }
}