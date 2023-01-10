import React, { useRef, useState } from 'react'
import Editor from '../Editor/Editor'
import Resume from '../Resume/Resume'

import { useReactToPrint } from 'react-to-print';
import { toast } from 'react-toastify';
import css from './Body.module.css'

const Body = () => {
    const colors=['red','green','blue','orange','purple']
    const [selectedColor,setSelectedColor]=useState("black")
    const [resumeInformation,setResumeInformation]=useState({})
    const [showResume,setShowResume]=useState(false)
    const downloadRef=useRef()
    const handlePrint = useReactToPrint({
      content: () => downloadRef.current,
    });
    const notify=()=>{
      toast.info('Resume Created!', {
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
  return (
    <div>
      
    <div className={css.container}>
      <p className={css.heading}>Resume Builder</p>
      <div className={css.toolbar}>
        <div className={css.colors}>
            {colors.map((color)=>{
               return <span 
                onClick={()=>{
                  setSelectedColor(color)
                }}
                key={color}
                className={css.color} 
                style={{backgroundColor:color,cursor:"pointer",border:(selectedColor===color)?"2px solid black":"none"}}></span>
            })}
        </div>
        
        
        <button onClick={handlePrint}>Download</button>
      </div>
      <div className={css.main}>
        <Editor resumeInformation={resumeInformation} setResumeInformation={setResumeInformation}/>
      </div>
      <div>
        <button className={css.showResumeBtn} onClick={()=>{
          !showResume && notify()
          setShowResume((prev)=>{return (prev)?false:true})
        }}>{(showResume)?"Hide ":"Show "}Resume</button>
      </div>
    </div>
        {showResume && <Resume ref={downloadRef} setSelectedColor={setSelectedColor} selectedColor={selectedColor} resumeInformation={resumeInformation}/>}
      
    </div>
  )
}

export default Body
