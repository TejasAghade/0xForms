import { createSlice } from "@reduxjs/toolkit";

// every feature is a slice
export const adminCreateFormSlice = createSlice({
    initialState : [{}],
    name : "adminFormCreateSlice",
    reducers : {
        question : (state)=>state,
        addQuestion: (state)=>{
            let newField = {
                id:state.length,
                question : "",
                questionType:"text",
                answer:[""],
                name:"",
                options:[],
                required:false
            }
            if(state.length == 0){
                state = [newField];
            }else{
                state.push(newField);
            } 
        },
    }
})

export const {addQuestion, question} = adminCreateFormSlice.actions;
export default adminCreateFormSlice.reducer;