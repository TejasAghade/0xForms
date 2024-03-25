
import { useState } from 'react';
import './form.css';
import { FormControlLabel, Switch } from '@mui/material';
import { Delete } from '@mui/icons-material';


export function QuestionCard() {
    const [questions, setQuestions] = useState<any[]>([]);

    let addQuestion = ()=>{

        let newField = {
            id:questions.length,
            question : "",
            questionType:"text",
            answer:[""],
            name:"",
            options:[],
            required:false
        }
        if(questions.length == 0){
            setQuestions([newField])
        }else{

            setQuestions([...questions, newField]);
        }
    }

    let removeField = (id:number)=>{
        console.log(questions)
        let newQuestions = questions.filter((e:any)=>e.id != id);
        setQuestions([...newQuestions]);
    }

    let handleInputChange = (e:any, fieldOfField:any, index:any)=>{
        let tempQuestions = [...questions];

        if(fieldOfField == 'question'){
            tempQuestions[index]["question"] = e.target.value;
        }else if(fieldOfField == 'type'){
            tempQuestions[index]["questionType"] = e.target.value;
            if(tempQuestions[index]["questionType"] == "radio" || tempQuestions[index]["questionType"] == "checkbox" || tempQuestions[index]["questionType"] == "dropdown"){
                tempQuestions[index]["name"] = tempQuestions[index]["questionType"]+index;
                createOptions({code:"n"}, 2, index);
            }
        }

        setQuestions(tempQuestions);
            
    }

    let createOptions = (e:any, length:number, index:any)=>{
        let tempQuestions = [...questions];
        if(e.code == "n"){
            let options = Array(length).fill("");
            tempQuestions[index]["options"] = options;
            setQuestions(tempQuestions);
        }else if(e.code == "Enter"){
            console.log("hello")
            tempQuestions[index]["options"].push("");
            setQuestions(tempQuestions);
        }
       
    }

    let handleRadioCheckboxLable= (e:any, questionIndex:any, oIndex:any) =>{
        let tempQuestions = [...questions];
        tempQuestions[questionIndex]["options"][oIndex] = e.target.value;
        setQuestions([...tempQuestions])
    }

    

  return (
    <>
        <div style={{width:'100vw'}} className="form-card-wrapper flex flex-col justify-center items-center gap-5">
            {
                questions.map((field:any, index:any)=>(
                    <div key={index} className="q-card question flex flex-col justify-center items-center gap-5">
                    
                        <div className="q-n-type flex flex-col ">
                                <div className="title mb-2">
                                    <h2>Question.</h2>
                                </div>
                                <div className="flex flex-row items-center justify-center gap-5">
                                    <div className="q-input flex flex-col justify-center items-center">
                                        <textarea style={{resize:'none'}} rows={1} className='input-padding border-b w-full' onChange={(e)=>handleInputChange(e, "question", index)} placeholder='question' />
                                    </div>
                                    <div className="q-type flex flex-row justify-center items-center">
                                        <select className='input-padding' onChange={(e)=>handleInputChange(e, "type", index)} name="type" id="type" >
                                            <option value="text">Input Field</option>
                                            <option value="paragraph">Paragraph</option>
                                            <option value="radio">Radio</option>
                                            <option value="checkbox">Checkbox</option>
                                            <option value="dropdown">Dropdown</option>
                                            <option value="file">File</option>
                                        </select>
                                    </div>
                                    {/* <button onClick={(e:any)=> removeField(index)} >remove</button> */}
                                </div>
                        </div>
                        <div className="answer flex w-full flex-col">
                                <div className="title mb-2">
                                    <h2>Answer Type :</h2>
                                </div>
                                <div className='flex flex-row justify-start items-start w-full'>
                                    
                                {
                                    //<CustomFields key={oIndex} field={field} onChange={(e:any)=>handleRadioCheckboxLable(e, index, oIndex)} onKeyDown={(e:any)=>createOptions(e, field.options.length+1, index)}/>    

                                    field["questionType"] == 'text'? (<input type='text' className='w-3/4 text-textbox input-padding' />):
                                    field["questionType"] == 'paragraph'?<textarea className='w-3/4 paragraph-textarea input-padding'/>:
                                    field["questionType"] == 'file'?<input type='file' className='w-3/4 paragraph-textarea input-padding'/>:
                                    field["questionType"] == 'radio' || field["questionType"] == 'checkbox'?
                                        (
                                            <>
                                                <div className="radio-inputs flex flex-row flex-wrap justify-center gap-5">
                                                {   
                                                    field["options"].map((_q:any, oIndex:any)=>(
                                                        <div key={oIndex} className="inputs flex gap-3">
                                                            <input name={field.name} className={field["questionType"]+"-field w-5"} type={field["questionType"]} /> 
                                                            <input type='text' className={field["questionType"]+"-lable border-b input-padding"} placeholder={"option "+(oIndex+1)} onChange={(e:any)=>handleRadioCheckboxLable(e, index, oIndex)} onKeyDown={(e:any)=>createOptions(e, field.options.length+1, index)} />
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
                                                        field["options"].map((_q:any, oIndex:any)=>(
                                                            <div key={oIndex} className="inputs flex flex-row justify-center items-center gap-3">
                                                                <div className="option count bg-slate-400 w-6 h-6 p-1 flex justify-center items-center rounded-full">
                                                                    <span>{oIndex}</span>
                                                                </div>
                                                                <input type='text' className={field["questionType"]+"-lable border-b input-padding"} placeholder={"option "+(oIndex+1)} onChange={(e:any)=>handleRadioCheckboxLable(e, index, oIndex)} onKeyDown={(e:any)=>createOptions(e, field.options.length+1, index)} />
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
                            <FormControlLabel label="Required"  control={<Switch />} />
                            <div onClick={(e:any)=> removeField(index)} className="delete-btn p-1 hover:bg-slate-500 transition ease-in-out delay-15 rounded-full">
                                <Delete className='del-btn'/>  
                            </div>
                        </div>
                    </div>
                ))
            }
            <button onClick={(e:any)=>{
                addQuestion();
            }} >Add Question</button>

        </div>
      </>
  )
}

