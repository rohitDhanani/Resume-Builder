import React, { useEffect, useState } from 'react'
import css from '../FormsCss/Form.module.css'
import InputControl from '../InputControl/InputControl'
import { toast } from 'react-toastify';

const WorkExperienceForm = ({resumeInformation,setResumeInformation}) => {
    const [workExpInfo,setWorkExpInfo]=useState(
        {
            sectionTitle: 'WORK EXPERIENCE',
            companyName: '',
            title: '',
            certificate: '',
            location: '',
            startDate: "",
            endDate:"",
            description:""
        })
    const [activesWorkExp,setActivesWorkExp]=useState(null)
    const [workExpArr,setWorkExpArr]=useState([])
    const handleOnChange=(e)=>{
        setWorkExpInfo({...workExpInfo,[e.target.name]:e.target.value})
        
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
    const notifyDataAdded=()=>{
        toast.info('Data Added!', {
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
        if(resumeInformation.workExpInfo){
            setWorkExpInfo({...resumeInformation.workExpInfo[0]})
            setWorkExpArr([...resumeInformation.workExpInfo])
        }
    },[])
    const addNew=()=>{
        
        workExpArr.push({...workExpInfo})
        setWorkExpArr([...workExpArr])
        setWorkExpInfo( {
            sectionTitle: 'WORK EXPERIENCE',
            companyName: '',
            title: '',
            certificate: '',
            location: '',
            startDate: "",
            endDate:"",
            description:""
        })
        notifyDataAdded();
    }
    const save=()=>{
        if(workExpInfo.companyName){
            addNew()
        }
        setResumeInformation({...resumeInformation,workExpInfo:[...workExpArr]})
        notifyDataSaved()
    }
    const removeWorkExp=(workExpName)=>{
        setWorkExpArr(workExpArr.filter((item)=>{return item.companyName!=workExpName}))
        setResumeInformation({...resumeInformation,workExpInfo:[...workExpArr.filter((item)=>{return item.companyName!=workExpName})]})
        setWorkExpInfo( {
            sectionTitle: 'WORK EXPERIENCE',
            companyName: '',
            title: '',
            certificate: '',
            location: '',
            startDate: "",
            endDate:"",
            description:""
        })
     }
  return (
    <div className={css.detail}>
    { (workExpArr.length)?<div className={css.chips}>
        {workExpArr.map((item,index)=>{
       return <div key={index} className={`${css.chip} ${(activesWorkExp===item.companyName)?css.active:""}`}>
                <p onClick={(e)=>{
                    e.stopPropagation()
                    setActivesWorkExp(item.companyName)
                    setWorkExpInfo({...item})
                }} name={item.companyName}>WorkExp {index+1} <i onClick={(e)=>{
                    e.stopPropagation()
                    removeWorkExp(item.companyName)}} name={item.companyName} className="fa-sharp fa-solid fa-xmark"></i></p>
              </div>
    
     })}
     </div>:""}
    <InputControl value={workExpInfo.sectionTitle}  onChange={handleOnChange} name="sectionTitle" type="text" label="Section Title" placeholder="Section title eg:- Work Experience"/>
    <div className={css.row}>
    <InputControl value={workExpInfo.companyName} onChange={handleOnChange} name="companyName" type="text" label="Company Name" placeholder="Enter Company Name eg:- Google"/>
    <InputControl value={workExpInfo.title} onChange={handleOnChange} name="title" type="text" label="Title" placeholder="Enter your title eg:- Developer"/>
    </div>
    <div className={css.row}>
    <InputControl value={workExpInfo.certificate} onChange={handleOnChange} name="certificate" type="text" label="Certificate Link" placeholder="Enter your Certificate Link"/>
    <InputControl value={workExpInfo.location} onChange={handleOnChange} name="location" type="text" label="Location " placeholder="Enter Location eg:-Delhi"/>
    </div>
    <div className={css.row}>
    <InputControl value={workExpInfo.startDate} onChange={handleOnChange} name="startDate" type="date" label="Start Date" placeholder="Enter Start Date of Work"/>
    <InputControl value={workExpInfo.endDate} onChange={handleOnChange} name="endDate" type="date" label="End Date" placeholder="Enter End Date of Work"/>
    </div>
    <div>
        <textarea value={workExpInfo.description} name="description" onChange={handleOnChange}  cols="65" rows="10" placeholder='Enter Description'></textarea>
    </div>
      
    <button onClick={addNew}>Add New</button>
    <button onClick={save}>Save</button>
  </div>
  )
}

export default WorkExperienceForm
