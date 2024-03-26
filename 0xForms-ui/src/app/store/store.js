import { configureStore } from "@reduxjs/toolkit";
import adminFormCreateReducer from "./slices/admin_form_create_slice";

export const store = configureStore({
    reducer:{
        adFormCreate : adminFormCreateReducer
    }
});