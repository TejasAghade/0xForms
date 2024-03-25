import FormsModel from "../models/forms_mode.js";

const createForm = async (req, res) => {
  let sample = {
    id: "1",
    data: {
      formTitle: "Sample Form",
      userEmail: "example@example.com",
      formDataList: [
        {
          question: "What is your name?",
          answer: ["John Doe"],
          questionType: "text",
          name: "name",
        },
        {
          question: "How old are you?",
          answer: [25],
          questionType: "number",
          name: "age",
        },
        {
          question: "Select your favorite color:",
          answer: ["Red"],
          questionType: "multiple_choice",
          name: "favorite_color",
          optionType: "radio",
          options: ["Red", "Blue", "Green"],
        },
        {
          question: "What is your favorite programming language?",
          answer: ["Python"],
          questionType: "multiple_choice",
          name: "favorite_language",
          optionType: "checkbox",
          options: ["JavaScript", "Python", "Java", "C++"],
        },
      ],
    },
  };

  try {
    let formData = new FormsModel(sample);

    let addedData = await formData.save();

    res.send({
      status: 200,
      message: "success",
      data: addedData,
    });
  } catch (e) {
    throw e;
    // res.json({
    //     status : 500,
    //     message : "something went wrong!",
    //     error : e
    // });
  }
};

const submitForm = async () => {};

const updateForm = async () => {};

const deleteFrom = async () => {};

const closeForm = async () => {};

const getFormResult = async () => {};

const getFormResponses = async () => {};

// module.exports = {

//     createForm,
//     submitForm,
//     updateForm,
//     deleteFrom,
//     closeForm,
//     getFormResult,
//     getFormResponses,

// }

export {
  createForm,
  submitForm,
  updateForm,
  deleteFrom,
  closeForm,
  getFormResult,
  getFormResponses,
};
