import { util } from "prettier";

export default class Util {
  constructor() {
    this.statusCode = null
    this.type = null
    this.data = null
    this.message = null
  }

  setErrorFirebase(res,error){
    if (error.response) {
      // Request made and server responded
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
    util.setError(error.status, error.data)

    } else if (error.request) {
      // The request was made but no response was received
    util.setError(200, error.request)

    } else {
      // Something happened in setting up the request that triggered an Error
    // console.log('Error:', error.message)
    util.setError(200, error.message)
    }
    return util.send(res)
  }

  setSuccess(statusCode, message, data) {
    this.statusCode = statusCode
    this.message = message
    this.data = data
    this.type = true
  }

  setError(statusCode, message) {
    this.statusCode = statusCode
    this.message = message
    this.type = false
  }

  send(res) {
    const result = {
      status: this.type,
      message: this.message,
      data: this.data,
    }
    if (this.type) {
      return res.status(this.statusCode).json(result)
    }
    return res.status(this.statusCode).json({
      status: this.type,
      message: this.message,
    })
  }
}
