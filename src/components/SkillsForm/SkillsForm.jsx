import React, { useEffect, useState } from 'react'
import css from '../FormsCss/Form.module.css'
import InputControl from '../InputControl/InputControl'
import { toast } from 'react-toastify';

const SkillsForm = ({resumeInformation,setResumeInformation}) => {
    const [skillsInfo,setSkillsInfo]=useState({sectionTitle: 'SKILLS', skillName: '', skillPercentage: ''})
    const [skillsArr,setSkillArr]=useState([])
    const [activeskill,setActiveSkill]=useState(null)
    const handleOnChange=(e)=>{
        setSkillsInfo({...skillsInfo,[e.target.name]:e.target.value})
        
    }
    const removeSkill=(skillName)=>{
       setSkillArr(skillsArr.filter((item)=>{return item.skillName!=skillName}))
       setResumeInformation({...resumeInformation,skillsInfo:[...skillsArr.filter((item)=>{return item.skillName!=skillName})]})
       setSkillsInfo({sectionTitle: 'SKILLS', skillName: '', skillPercentage: ''})
    }
    const addNew=()=>{
        
        skillsArr.push({...skillsInfo})
        setSkillArr([...skillsArr])
        setSkillsInfo({sectionTitle: 'SKILLS', skillName: '', skillPercentage: ''})
        notifyDataAdded();
        
    }
    const save=()=>{
        if(skillsInfo.skillName){
            addNew()
        }
        setResumeInformation({...resumeInformation,skillsInfo:[...skillsArr]})
        notifyDataSaved();
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
        if(resumeInformation.skillsInfo?.[0]){
            setSkillsInfo({...resumeInformation.skillsInfo[0]})
            setSkillArr([...resumeInformation.skillsInfo])
        }
    },[])
  return (
    <div className={css.detail}>
     { (skillsArr.length)?<div className={css.chips}>
        {skillsArr.map((item,index)=>{
       return <div key={index} className={`${css.chip} ${(activeskill===item.skillName)?css.active:""}`}>
                <p onClick={(e)=>{
                    e.stopPropagation()
                    setActiveSkill(item.skillName)
                    setSkillsInfo({...item})
                }} name={item.skillName}>skill {index+1} <i onClick={(e)=>{
                    e.stopPropagation()
                    removeSkill(item.skillName)}} name={item.skillName} className="fa-sharp fa-solid fa-xmark"></i></p>
              </div>
    
     })}
     </div>:""}
    <InputControl  onChange={handleOnChange} value={skillsInfo.sectionTitle} name="sectionTitle" type="text" label="Section Title" placeholder="Section title eg:- Skills"/>

    <div className={css.row}>
    <InputControl onChange={handleOnChange} value={skillsInfo.skillName} name="skillName" type="text" label="Skill Name" placeholder="eg:- Java"/>
    <InputControl onChange={handleOnChange} value={skillsInfo.skillPercentage} name="skillPercentage" type="text" label="Percentage" placeholder="Rate your Skill out of 100 eg:-85"/>
    </div>
   
    <button onClick={addNew}>Add New</button>
    <button onClick={save}>Save</button>
  </div>
  )
}

export default SkillsForm
