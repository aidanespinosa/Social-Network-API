const { Schema, model } = require("mongoose");
const Schema = mongoose.Schema;

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
  reactions: {
    type: [reactionSchema],
  },
});

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    auto: true,
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (createdAt) {
      return createdAt.toLocaleString();
    },
  },
});

const Thought = mongoose.model("thought", thoughtSchema);
