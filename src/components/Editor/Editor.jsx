import React, { useState } from 'react'
import AboutMeForm from '../AboutMeForm/AboutMeForm'
import AchievementForm from '../AchievementsForm/AchievementsForm'
import BasicInfoForm from '../BasicInfoForm/BasicInfoForm'
import EducationForm from '../EducationForm/EducationForm'

import ProjectForm from '../ProjectForm/ProjectForm'

import SkillsForm from '../SkillsForm/SkillsForm'
import WorkExperienceForm from '../WorkExperienceForm/WorkExperienceForm'
import css from './Editor.module.css'

const Editor = ({resumeInformation,setResumeInformation}) => {
    const sections={
        basicInfo:"Basic Info",
        workExp:"Work Experience",
        project:"Projects",
        education:"Education",
        achievements:"Achievements",
        skills:"Skills",
        aboutMe:"About Me"
    }
    
    const [activeSection,setActiveSection]=useState(Object.keys(sections)[0])

   

    const generateForm=()=>{
        switch (activeSection) {
            case "basicInfo":
                return <BasicInfoForm resumeInformation={resumeInformation} setResumeInformation={setResumeInformation}/>
            case "workExp":
                return <WorkExperienceForm resumeInformation={resumeInformation} setResumeInformation={setResumeInformation}/>
            case "project":
                return <ProjectForm resumeInformation={resumeInformation} setResumeInformation={setResumeInformation}/>
            case "education":
                return <EducationForm resumeInformation={resumeInformation} setResumeInformation={setResumeInformation}/>
            case "achievements":
                return <AchievementForm resumeInformation={resumeInformation} setResumeInformation={setResumeInformation}/>
            case "skills":
                return <SkillsForm resumeInformation={resumeInformation} setResumeInformation={setResumeInformation}/>
            case "aboutMe":
                return <AboutMeForm resumeInformation={resumeInformation} setResumeInformation={setResumeInformation}/>
           
                
        
        }
    }
  return (
        <div>
            <div className={css.container}>
                <div className={css.header}>
                    {Object.keys(sections).map((sec)=>{
                        return <div name={sec} className={`${css.section} ${(activeSection===sec)?css.active:""}`} 
                        key={sec}
                        onClick={()=>{
                            setActiveSection(sec)
                        }}
                        >{sections[sec]}</div>
                    })}
                </div>
                <div className={css.body}>
                        {generateForm()}
                    
                </div>
            
            </div>
           
        </div>
  )
}

export default Editor
