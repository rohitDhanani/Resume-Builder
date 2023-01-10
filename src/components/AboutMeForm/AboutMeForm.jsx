import React, { useEffect, useState } from 'react'
import css from '../FormsCss/Form.module.css'
import InputControl from '../InputControl/InputControl'
import { toast } from 'react-toastify';

const AboutMeForm = ({resumeInformation,setResumeInformation}) => {
    const [aboutMeInfo,setAboutMeInfo]=useState({sectionTitle: 'ABOUT ME', language: '', softSkill: '', hobbies: '', careerObjective: ''})
    const handleOnChange=(e)=>{
        setAboutMeInfo({...aboutMeInfo,[e.target.name]:e.target.value})
        
    }
    const [aboutMeArr,setAboutMeArr]=useState([])
    const [activeAboutMe,setActiveAboutMe]=useState(null)
    const removeAboutMe=(language)=>{
        setAboutMeArr(aboutMeArr.filter((item)=>{return item.language!=language}))
        setResumeInformation({...resumeInformation,aboutMeInfo:[...aboutMeArr.filter((item)=>{return item.language!=language})]})
        setAboutMeInfo({sectionTitle: 'ABOUT ME', language: '', softSkill: '', hobbies: '', careerObjective: ''})
     }
    
    const addNew=()=>{
        
        aboutMeArr.push({...aboutMeInfo})
        setAboutMeArr([...aboutMeArr])
        setAboutMeInfo({sectionTitle: 'ABOUT ME', language: '', softSkill: '', hobbies: '', careerObjective: ''})
        notifyDataAdded()
    }
    const save=()=>{
      if(aboutMeInfo.language){
          addNew()
      }
      setResumeInformation({...resumeInformation,aboutMeInfo:[...aboutMeArr]})
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
      if(resumeInformation.aboutMeInfo?.[0]){
        setAboutMeInfo({...resumeInformation.aboutMeInfo[0]})
          setAboutMeArr([...resumeInformation.aboutMeInfo])
      }
  },[])
  return (
    <div className={css.detail}>
      { (aboutMeArr.length)?<div className={css.chips}>
        {aboutMeArr.map((item,index)=>{
       return <div key={index} className={`${css.chip} ${(activeAboutMe===item.language)?css.active:""}`}>
                <p onClick={(e)=>{
                    e.stopPropagation()
                    setActiveAboutMe(item.language)
                    setAboutMeInfo({...item})
                }} name={item.language}>skill {index+1} <i onClick={(e)=>{
                    e.stopPropagation()
                    removeAboutMe(item.language)}} name={item.language} className="fa-sharp fa-solid fa-xmark"></i></p>
              </div>
    
     })}
     </div>:""}
    <InputControl value={aboutMeInfo.sectionTitle} onChange={handleOnChange} name="sectionTitle" type="text" label="Section Title" placeholder="Section title eg:- About Me"/>

    <div className={css.row}>
    <InputControl value={aboutMeInfo.language} onChange={handleOnChange} name="language" type="text" label="Language" placeholder="eg:- English"/>
    <InputControl value={aboutMeInfo.softSkill} onChange={handleOnChange} name="softSkill" type="text" label="Softskill" placeholder=" eg:- Leadership quality"/>
    <InputControl value={aboutMeInfo.hobbies} onChange={handleOnChange} name="hobbies" type="text" label="Hobby" placeholder="eg:- playing cricket"/>
    </div>
    <div>
        <textarea value={aboutMeInfo.careerObjective} name="careerObjective" onChange={handleOnChange}  cols="74" rows="5" placeholder='Enter your Career objective eg:-To work for an organization which provide me the opportunity to improve my skills and knowledge to growth along with the organization objective.'></textarea>
    </div>
   
    <button onClick={addNew}>Add New</button>
    <button onClick={save}>Save</button>
  </div>
  )
}

export default AboutMeForm
