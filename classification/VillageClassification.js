const Classification = require('./Classification')

class VillageClassification extends Classification {
  constructor (confidence, meta) {
    super(confidence, meta)
    this.public = true
    this.label = 'village'
  }
}

module.exports = VillageClassification