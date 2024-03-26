import './form.css';
import { FormControlLabel, Switch } from '@mui/material';
import { Delete } from '@mui/icons-material';

import { useDispatch, useSelector } from "react-redux";

import { addQuestion, removeQuestion, handleInputChange, handleRadioCheckboxLable, createOptions } from "../store/slices/admin_form_create_slice";


export function QuestionCard() {

    const questions = useSelector((state)=>state.adFormCreate.questions);
    const dispatch = useDispatch();


    let inputChagneHandler = (value, field, qIndex)=>{

        dispatch(handleInputChange({value:value, field:"type", qIndex:qIndex}));

        if(value == "radio" || value == "checkbox"|| value == "dropdown"){
            dispatch(createOptions({keyCode:"n", options:2, qIndex:qIndex}));
        }
    }


  return (
    <>
        <div className="form-card-wrapper flex flex-col justify-center items-center gap-5">
            {
                questions.map((field, index)=>(
                    <div key={index} className="q-card question flex flex-col justify-center items-center gap-5">
                    
                        <div className="q-n-type flex flex-col">
                            <div className="title mb-2 flex justify-start">
                                <h2>Question.</h2>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-5">
                                <div className="q-input flex flex-col justify-center items-center">
                                    <textarea style={{resize:'none'}} rows={1} className='input-padding border-b w-full' onChange={(e)=>dispatch(handleInputChange({value:e.target.value, field:"question", index:index}))} placeholder='question' />
                                </div>
                                <div className="q-type flex flex-row justify-center items-center">
                                    <select className='input-padding' onChange={(e)=>inputChagneHandler(e.target.value,"type", index)} name="type" id="type" >
                                        <option value="text">Input Field</option>
                                        <option value="paragraph">Paragraph</option>
                                        <option value="radio">Radio</option>
                                        <option value="checkbox">Checkbox</option>
                                        <option value="dropdown">Dropdown</option>
                                        <option value="file">File</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="answer flex w-full flex-col">
                            <div className="title mb-2 flex justify-start">
                                <h2>Answer Type :</h2>
                            </div>
                            <div className='flex flex-row justify-start items-start w-full'>
                                    
                                {
                                    //<CustomFields key={oIndex} field={field} onChange={(e)=>handleRadioCheckboxLable(e, index, oIndex)} onKeyDown={(e)=>createOptions(e, field.options.length+1, index)}/>    

                                    field["questionType"] == 'text'? (<input type='text' className='w-3/4 text-textbox input-padding' />):
                                    field["questionType"] == 'paragraph'?<textarea className='w-3/4 paragraph-textarea input-padding'/>:
                                    field["questionType"] == 'file'?<input type='file' className='w-3/4 paragraph-textarea input-padding'/>:
                                    field["questionType"] == 'radio' || field["questionType"] == 'checkbox'?
                                        (
                                            <>
                                                <div className="radio-inputs flex flex-row flex-wrap justify-center gap-5">
                                                {   
                                                    field["options"].map((_q, oIndex)=>(
                                                        <div key={oIndex} className="inputs flex gap-3">
                                                            <input name={field.name} className={field["questionType"]+"-field w-5"} type={field["questionType"]} /> 
                                                            <input type='text' className={field["questionType"]+"-lable border-b input-padding"} placeholder={"option "+(oIndex+1)} 
                                                                onChange={(e)=>dispatch(handleRadioCheckboxLable({value:e.target.value, qIndex:index, oIndex:oIndex}))} onKeyDown={(e)=>dispatch(createOptions({keyCode:e.code, options:field.length+1, qIndex:index}))} />
                                                        </div>
                                                    ))
                                                }
                                                </div>
                                            </>
                                        ):
                                    
                                    field["questionType"] == "dropdown"?
                                        (
                                            <>
                                                <div className="dropdown-inputs flex flex-col flex-wrap justify-center gap-5">
                                                    {   
                                                        field["options"].map((_q, oIndex)=>(
                                                            <div key={oIndex} className="inputs flex flex-row justify-center items-center gap-3">
                                                                <div className="option count bg-slate-400 w-6 h-6 p-1 flex justify-center items-center rounded-full">
                                                                    <span>{oIndex}</span>
                                                                </div>
                                                                <input type='text' className={field["questionType"]+"-lable border-b input-padding"} placeholder={"option "+(oIndex+1)} 
                                                                    onChange={(e)=>dispatch(handleRadioCheckboxLable({value:e.target.value, qIndex:index, oIndex:oIndex}))} onKeyDown={(e)=>dispatch(createOptions({keyCode:e.code, options:field.length+1, qIndex:index}))} />
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </>
                                        ):(<></>)
                                    

                                }
                            </div>
                        </div>
                        <div className="toolbar flex flex-row justify-start items-center w-full mt-3 ml-2">
                            <FormControlLabel label="Required" onChange={(e)=>dispatch(handleInputChange({isRequired:e.target.checked, qIndex:index}))}  control={<Switch  />} />
                            <div onClick={(e)=>dispatch(removeQuestion({id:field.id}))} className="delete-btn p-1 hover:bg-slate-500 transition ease-in-out delay-15 rounded-full">
                                <Delete className='del-btn'/>  
                            </div>
                        </div>
                    </div>
                ))
            }
            <button onClick={(e)=>dispatch(addQuestion())} >Add Question</button>

        </div>
      </>
  )
}

