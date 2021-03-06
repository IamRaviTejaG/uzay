/*
  Comment Schema
*/

let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = mongoose.Schema.Types.ObjectId

let commentSchema = {
  PostID: Number,
  UserID: {
    type: ObjectId,
    ref: 'User'
  },
  ParentCommentID: {
    type: Number,
    default: null
  },
  Children: {
    type: Number,
    default: 0
  },
  Content: String,
  Likes: {
    type: Number,
    default: 0
  },
  Dislikes: {
    type: Number,
    default: 0
  },
  PublishDate: {
    type: Date,
    default: Date.now
  }
}

module.exports = new Schema(commentSchema)
