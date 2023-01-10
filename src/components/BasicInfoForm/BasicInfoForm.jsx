import React, { useEffect, useState } from 'react'
import InputControl from '../InputControl/InputControl'
import { toast } from 'react-toastify';
import css from '../FormsCss/Form.module.css'

const BasicInfoForm = ({resumeInformation,setResumeInformation}) => {
    const [basicInfo,setBasicInfo]=useState({sectionTitle: 'BASIC INFO', name: '', title: '', linkedin: '', github: '',email:'',phone:'',currentCIty:'',profilePhoto:''})
    const handleOnChange=(e)=>{
        setBasicInfo({...basicInfo,[e.target.name]:e.target.value})
        
    }
    const notify=()=>{
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
    const save=()=>{
        
        setResumeInformation({...resumeInformation,basicInfo:{...basicInfo}})
        notify()
        
    }
    useEffect(()=>{
        if(resumeInformation.basicInfo){
            setBasicInfo({...resumeInformation.basicInfo})
        }
    },[])
  return (
    <div className={css.detail}>
      <InputControl value={basicInfo.sectionTitle} onChange={handleOnChange} name="sectionTitle" type="text" label="Section Title" placeholder="Section title eg:- Basic Info"/>
      <div className={css.row}>
      <InputControl value={basicInfo.name} onChange={handleOnChange} name="name" type="text" label="Name" placeholder="Enter your full name"/>
      <InputControl value={basicInfo.title} onChange={handleOnChange} name="title" type="text" label="Title" placeholder="Enter your title eg:- Developer"/>
      </div>
      <div className={css.row}>
      <InputControl value={basicInfo.linkedin} onChange={handleOnChange} name="linkedin" type="text" label="linkedin Link" placeholder="Enter your linkedin Link"/>
      <InputControl value={basicInfo.github} onChange={handleOnChange} name="github" type="text" label="Github Link" placeholder="Enter your Github Link"/>
      </div>
      <div className={css.row}>
      <InputControl value={basicInfo.phone} onChange={handleOnChange} name="phone" type="number" label="Phone" placeholder="Enter your Phone Number"/>
      <InputControl value={basicInfo.currentCIty} onChange={handleOnChange} name="currentCIty" type="text" label="Current City/Town you live in" placeholder="eg:- Delhi"/>
      </div>
      <InputControl value={basicInfo.email} onChange={handleOnChange} name="email" type="text" label="Email" placeholder="Enter your Email"/>
      <InputControl value={basicInfo.profilePhoto} onChange={handleOnChange} name="profilePhoto" type="text" label="Profile Photo URL" placeholder="Enter your profile photo link"/>
        
      <button onClick={save}>Save</button>

     
    </div>
  )
}

export default BasicInfoForm
