import React, { useEffect, useState } from 'react'
import css from '../FormsCss/Form.module.css'
import InputControl from '../InputControl/InputControl'
import { toast } from 'react-toastify';

const ProjectForm = ({resumeInformation,setResumeInformation}) => {
    const [projectInfo,setProjectInfo]=useState({sectionTitle: 'PROJECTS', projectTitle: '', githubLInk: '', hostedProjectLink: '', projectDescription: ''})
    const [projectArr,setProjectArr]=useState([])
    const [activeProject,setActiveProject]=useState(null)
    const handleOnChange=(e)=>{
        setProjectInfo({...projectInfo,[e.target.name]:e.target.value})
        
    }
    const removeProject=(projectTitle)=>{
        setProjectArr(projectArr.filter((item)=>{return item.projectTitle!=projectTitle}))
        setResumeInformation({...resumeInformation,projectInfo:[...projectArr.filter((item)=>{return item.projectTitle!=projectTitle})]})
        setProjectInfo({sectionTitle: 'PROJECTS', projectTitle: '', githubLInk: '', hostedProjectLink: '', projectDescription: ''})
     }
     const save=()=>{
        if(projectInfo.projectTitle){
            addNew()
        }
        setResumeInformation({...resumeInformation,projectInfo:[...projectArr]})
        notifyDataSaved()
    }
    const addNew=()=>{
        
        projectArr.push({...projectInfo})
        setProjectArr([...projectArr])
        setProjectInfo({sectionTitle: 'PROJECTS', projectTitle: '', githubLInk: '', hostedProjectLink: '', projectDescription: ''})
        notifyDataAdded()
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
        if(resumeInformation.projectInfo){
            setProjectInfo({...resumeInformation.projectInfo[0]})
            setProjectArr([...resumeInformation.projectInfo])
        }
    },[])
  return (
    <div className={css.detail}>
    { (projectArr.length)?<div className={css.chips}>
        {projectArr.map((item,index)=>{
       return <div key={index} className={`${css.chip} ${(activeProject===item.projectTitle)?css.active:""}`}>
                <p onClick={(e)=>{
                    e.stopPropagation()
                    setActiveProject(item.projectTitle)
                    setProjectInfo({...item})
                }} name={item.projectTitle}>Project {index+1} <i onClick={(e)=>{
                    e.stopPropagation()
                    removeProject(item.projectTitle)}} name={item.projectTitle} className="fa-sharp fa-solid fa-xmark"></i></p>
              </div>
    
     })}
     </div>:""}
    <InputControl value={projectInfo.sectionTitle} onChange={handleOnChange} name="sectionTitle" type="text" label="Section Title" placeholder="Section title eg:- Projects"/>
    <InputControl value={projectInfo.projectTitle} onChange={handleOnChange} name="projectTitle" type="text" label="Project Title" placeholder="Enter your project title eg:- Chat App"/>
    <div className={css.row}>
    <InputControl value={projectInfo.githubLInk} onChange={handleOnChange} name="githubLInk" type="text" label="Github Link" placeholder="Enter Github Link"/>
    <InputControl value={projectInfo.hostedProjectLink} onChange={handleOnChange} name="hostedProjectLink" type="text" label="Hosted Project Link" placeholder="Enter Hosted Project Link"/>
    </div>
    <div>
        <textarea value={projectInfo.projectDescription} name="projectDescription" onChange={handleOnChange}  cols="65" rows="10" placeholder='Enter Project Description'></textarea>
    </div>
      
    <button onClick={addNew}>Add New</button>
    <button onClick={save}>Save</button>
    
  </div>
  )
}

export default ProjectForm
