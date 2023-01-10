import React, { useEffect, useState } from 'react'
import css from '../FormsCss/Form.module.css'
import InputControl from '../InputControl/InputControl'
import { toast } from 'react-toastify';

const EducationForm = ({resumeInformation,setResumeInformation}) => {
    const [educationInfo,setEducationInfo]=useState({sectionTitle: 'EDUCATION', degreeTitle: '', collegeName: '', cgpa: '',dateOfCompletionCollege:"",dateOfCompletionSchool12:"",percentage12:'',school12Board:'',schoolName12:'',school10Board:'',schoolName10:'',percentage10:'',dateOfCompletionSchool10:''})
    const handleOnChange=(e)=>{
        setEducationInfo({...educationInfo,[e.target.name]:e.target.value})
        
    }
    const save=()=>{
        
        setResumeInformation({...resumeInformation,educationInfo:{...educationInfo}})
        notifyDataSaved()
    }
    const notifyDataSaved=()=>{
      toast.success('Data Saved!', {
        position: "top-center",
        autoClose: 200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    useEffect(()=>{
      if(resumeInformation.educationInfo){
        setEducationInfo({...resumeInformation.educationInfo})
      }
  },[])
  return (
    <div className={css.detail}>
    <InputControl value={educationInfo.sectionTitle} onChange={handleOnChange} name="sectionTitle" type="text" label="Section Title" placeholder="Section title eg:- Education"/>
    <div className={css.row}>
    <InputControl value={educationInfo.degreeTitle} onChange={handleOnChange} name="degreeTitle" type="text" label="Degree Title" placeholder="Enter your degree title eg:- b-tech in Computer Science"/>
    <InputControl value={educationInfo.collegeName} onChange={handleOnChange} name="collegeName" type="text" label="College Name" placeholder="Enter College Name eg:- IIT"/>
    </div>
    <div className={css.row}>
    <InputControl value={educationInfo.cgpa} onChange={handleOnChange} name="cgpa" type="text" label="CGPA" placeholder="Enter your CGPA eg:- 9.14"/>
    <InputControl value={educationInfo.dateOfCompletionCollege} onChange={handleOnChange} name="dateOfCompletionCollege" type="date" label="Date Of Completion" placeholder="Enter Date Of Completion"/>
    </div>
    <div className={css.row}>
    <InputControl value={educationInfo.school12Board} onChange={handleOnChange} name="school12Board" type="text" label="12TH School Board" placeholder="eg:- CBSE"/>
    <InputControl value={educationInfo.schoolName12} onChange={handleOnChange} name="schoolName12" type="text" label="School Name" placeholder="eg:- Saint Mary's school"/>
    </div>
    <div className={css.row}>
    <InputControl value={educationInfo.percentage12} onChange={handleOnChange} name="percentage12" type="text" label="Percentage" placeholder="Enter your Percentage eg:- 91.4%"/>
    <InputControl value={educationInfo.dateOfCompletionSchool12} onChange={handleOnChange} name="dateOfCompletionSchool12" type="date" label="Date Of Completion" placeholder="Enter Date Of Completion"/>
    </div>
    <div className={css.row}>
    <InputControl value={educationInfo.school10Board} onChange={handleOnChange} name="school10Board" type="text" label="10TH School Board" placeholder="eg:- CBSE"/>
    <InputControl value={educationInfo.schoolName10} onChange={handleOnChange} name="schoolName10" type="text" label="School Name" placeholder="eg:- Saint Mary's school"/>
    </div>
    <div className={css.row}>
    <InputControl value={educationInfo.percentage10} onChange={handleOnChange} name="percentage10" type="text" label="Percentage" placeholder="Enter your Percentage eg:- 91.4%"/>
    <InputControl value={educationInfo.dateOfCompletionSchool10} onChange={handleOnChange} name="dateOfCompletionSchool10" type="date" label="Date Of Completion" placeholder="Enter Date Of Completion"/>
    </div>
   
    <button onClick={save}>Save</button>
  </div>
  )
}

export default EducationForm
