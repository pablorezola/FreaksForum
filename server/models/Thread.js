const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;

const ThreadSchema = new Schema({

_author: {
    type: Schema.Types.ObjectId,
    ref: "User"

},
title: {
    type: String,
    required: true

},

content: {
    type: String,
    require: true
},

date: {
    type: Date,
    default: Date.now
},

replies: [{type: Schema.Types.ObjectId, ref:"Reply"}]

});

const Thread = mongoose.model('Thread', ThreadSchema);
module.exports = Thread;