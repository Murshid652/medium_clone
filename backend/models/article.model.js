import mongoose, { Schema } from 'mongoose';

const articleSchema = new Schema({
  text: String,
  title: {
    type: String,
    required: true
  },
  description: String,
  feature_img: String,
  claps: {
    type: Number,
    default: 0
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [
    {
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      text: String
    }
  ]
})

articleSchema.methods.clap = function () {
  this.claps++;
  return this.save();
}

articleSchema.methods.comment = function (comm){
    this.comments.push(c);
    return this.save();
}

articleSchema.methods.addAuthor = function (author_id) {
    this.author = author_id
    return this.save()
}
articleSchema.methods.getUserArticle = function (_id) {
    Article.find({'author': _id}).then((article) => {
        return article
    })
}

export const Article= mongoose.model('Article', articleSchema)