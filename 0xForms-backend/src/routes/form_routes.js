import express from 'express';
import {
    createForm,
    submitForm,
    updateForm,
    deleteFrom,
    closeForm,
    getFormResult,
    getFormResponses,
} from '../controllers/forms_controller.js';

const formRoutes = express.Router();

formRoutes.get("/ad/f/create", createForm);
formRoutes.get("/us/submit", submitForm);
formRoutes.get("/ad/update", updateForm);
formRoutes.get("/ad/delete", deleteFrom);
formRoutes.get("/ad/close", closeForm);
formRoutes.get("/us/get_result", getFormResult);
formRoutes.get("/us/get_responses", getFormResponses);


export default formRoutes;