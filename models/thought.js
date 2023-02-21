const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction");
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    Required: true,
    validate: {
      validator: function (value) {
        return value.length >= 1 && value.length <= 280;
      },
      message: "Text must be between 1 and 280 characters.",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (createdAt) {
      return createdAt.toLocalString();
    },
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});

const Thought = model("thought", thoughtSchema);
module.exports = Thought;
