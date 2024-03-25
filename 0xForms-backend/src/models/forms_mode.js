import mongoose from "mongoose";

const QuestionsSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: mongoose.Schema.Types.Mixed,
    required: false,
  },
  questionType: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  optionType: {
    type: String,
    required: false,
  },
  options: {
    type: [String],
    required: false,
  },
});

const FormsModel = mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },

  data: {
    formTitle: {
      type: String,
      required: true,
    },

    userEmail: {
      type: String,
      required: true,
    },

    formDataList: [QuestionsSchema],
  },

  createOn: {
    type: Date,
    default: Date.now,
  },

  updatedOn: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("0x_forms", FormsModel);
