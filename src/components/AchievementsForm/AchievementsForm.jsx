import React, { useEffect, useRef, useState } from 'react'
import css from '../FormsCss/Form.module.css'
import InputControl from '../InputControl/InputControl'
import { toast } from 'react-toastify';

const AchievementForm = ({resumeInformation,setResumeInformation}) => {
    
    const [achievementInfo,setAchievementInfo]=useState({
        sectionTitle:"ACHIEVEMENTS",
        achievements:""
    })
    const [achievementsArr,setAchievementsArr]=useState([])
    const [activeAchievement,setActiveAchievement]=useState(null)
    const removeAchievement=(achievements)=>{
        setAchievementsArr(achievementsArr.filter((item)=>{return item.achievements!=achievements}))
        setResumeInformation({...resumeInformation,achievementInfo:[...achievementsArr.filter((item)=>{return item.achievements!=achievements})]})
        setAchievementInfo({
        sectionTitle:"ACHIEVEMENTS",
        achievements:""
    })
     }
    const handleOnChange=(e)=>{
            setAchievementInfo({...achievementInfo,[e.target.name]:e.target.value})
    }
    const addNew=()=>{
        
        achievementsArr.push({...achievementInfo})
        setAchievementsArr([...achievementsArr])
        setAchievementInfo({
        sectionTitle:"ACHIEVEMENTS",
        achievements:""
    })
        notifyDataAdded()
    }
    const save=()=>{
        if(achievementInfo.achievements){
            addNew()
        }
        setResumeInformation({...resumeInformation,achievementInfo:[...achievementsArr]})
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
        if(resumeInformation.achievementInfo){
            setAchievementInfo({...resumeInformation.achievementInfo[0]})
            setAchievementsArr([...resumeInformation.achievementInfo])
        }
    },[])
  return (
    <div className={css.detail}>
      { (achievementsArr.length)?<div className={css.chips}>
        {achievementsArr.map((item,index)=>{
       return <div key={index} className={`${css.chip} ${(activeAchievement===item.achievements)?css.active:""}`}>
                <p onClick={(e)=>{
                    e.stopPropagation()
                    setActiveAchievement(item.achievements)
                    setAchievementInfo({...item})
                }} name={item.achievements}>skill {index+1} <i onClick={(e)=>{
                    e.stopPropagation()
                    removeAchievement(item.achievements)}} name={item.achievements} className="fa-sharp fa-solid fa-xmark"></i></p>
              </div>
    
     })}
     </div>:""}
    <InputControl value={achievementInfo.sectionTitle} onChange={handleOnChange} name="sectionTitle" type="text" label="Section Title" placeholder="Section title eg:- Achievements"/>


    <div>
        <textarea value={achievementInfo.achievements} name="achievements" onChange={handleOnChange}  cols="65" rows="5" placeholder='Enter your Achievement'></textarea>
    </div>
      
    <button onClick={addNew}>Add New</button>
    <button onClick={save}>Save</button>
    
  </div>
  )
}

export default AchievementForm
