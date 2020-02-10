const mongoose = require('mongoose')

const bookUploadSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: false
  },
  website: {
    type: String,
    required: true
  },
  chapter: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

const BookUpload = mongoose.model('BookUpload', bookUploadSchema)

module.exports = BookUpload
