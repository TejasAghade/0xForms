import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    questions:[]
}


export const adminCreateFormSlice = createSlice({
    initialState : initialState,
    name : "adminFormCreateSlice",
    reducers : {
        addQuestion: (state, action)=>{
            let newField = {
                id:state.questions.length,
                question : "",
                questionType:"text",
                answer:[""],
                name:"",
                options:[],
                required:false
            }
            if(state.length == 0){
                state.questions.push(newField);
            }else{
                state.questions.push(newField);
            } 
        },

        removeQuestion : (state, action)=>{
            state.questions = state.questions.filter(question => question.id !== action.payload.id);
        },

        handleInputChange : (state, action)=>{
            let value = action.payload.value;
            let field = action.payload.field;
            let qIndex = action.payload.qIndex;
            let isRequired = action.payload.isRequired || false;

            if(field == 'question'){

                state.questions[qIndex].question = value

            }else if(field == 'type'){

                state.questions[qIndex]["questionType"] = value;

                if(state.questions[qIndex]["questionType"] == "radio" || state.questions[qIndex]["questionType"] == "checkbox"|| state.questions[qIndex]["questionType"] == "dropdown"){
                    state.questions[qIndex]["name"] = state.questions[qIndex]["questionType"]+qIndex;
                }

            }
            
            if(isRequired){
                state.questions[qIndex]["required"] = true;
            }
        },
        createOptions : (state, action)=>{

            let keyCode = action.payload.keyCode;
            let options = action.payload.options;
            let qIndex = action.payload.qIndex;
        
            if(keyCode == "n"){
                let inputOptions = Array(options).fill("");
                state.questions[qIndex]["options"] = inputOptions;
            }else if(keyCode == "Enter"){
                state.questions[qIndex]["options"].push("");
            }
           
        },

        handleRadioCheckboxLable : (state, action) =>{
            let value = action.payload.value;
            let oIndex = action.payload.oIndex;
            let qIndex = action.payload.qIndex;
            state.questions[qIndex]["options"][oIndex] = value;
        }

    }
})

export const {addQuestion, removeQuestion, handleInputChange, createOptions, handleRadioCheckboxLable} = adminCreateFormSlice.actions;
export default adminCreateFormSlice.reducer;