const Tesseract = require('tesseract.js');

class Model {
  constructor() {
  }

  async detect (imageBuffer, lang = 'eng', config = {}) {
    const prediction = await Tesseract.recognize(imageBuffer, lang, config)
    return prediction
  }
}

module.exports = Model
