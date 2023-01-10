import React, { forwardRef, Fragment, useEffect, useState } from 'react'
import './resume.css'

const Resume =forwardRef( ({resumeInformation,selectedColor,setSelectedColor},downloadRef) => {
    const fonts = ["Arial", "Verdana", "Times New Roman", "Courier New", "Georgia", "Palatino",
     "Garamond", "Comic Sans MS", "Trebuchet MS", "Arial Black", "Impact", "serif",
      "sans-serif", "monospace", "cursive", "fantasy"];

    const [resumeFont,setResumeFont]=useState("serif")

    useEffect(()=>{
        downloadRef.current.style.setProperty("--color",selectedColor)
    },[selectedColor])
    useEffect(()=>{
        downloadRef.current.style.setProperty("--font",resumeFont)
    },[resumeFont])
    
  return (
    <div >
      <div className='colorPicker'>
        <div>
      <label htmlFor="pickcolor">Change Resume Color: </label>
        <input value={selectedColor} onChange={(e)=>{
            setSelectedColor(e.target.value)
        }} style={{marginRight:'1.5rem',padding:0}} id='pickcolor' type="color" />
      
      </div>

      
      <div>
      <label htmlFor="fonts">Change Resume Fonts: </label>
        <select style={{margin:0,padding:"0rem"}} onChange={(e)=>{
            setResumeFont(e.target.value);
        }} name="fonts" id="fonts">
            
            {fonts.map((font)=>{
                return <option key={font} value={font}>{font}</option>
            })}
        </select>
        </div>
      </div>

      <main ref={downloadRef} className="main-content" >
            
            <section className="left-section">
                <div className="left-content">
                    <div className="profile-details">
                        {(resumeInformation?.basicInfo?.profilePhoto)?<div className="profile">
                            <img className="profile-image" src={resumeInformation?.basicInfo?.profilePhoto} alt="Error404"/>
                        </div>:<></>}
                        <h2 className="name">{resumeInformation?.basicInfo?.name}</h2>
                        <h4 className="designation">{resumeInformation?.basicInfo?.title}</h4>
                        <hr/>
                        
                        <div className="contact-item">
                            <div className="social-media">
                                {(resumeInformation?.basicInfo?.linkedin)?<li className="icon"><a target="_blank"
                                        href={resumeInformation?.basicInfo?.linkedin}><i
                                            className="fa-brands fa-linkedin"> linkedin</i></a></li>:<></>}
                                {(resumeInformation?.basicInfo?.github)?<li className="icon"><a target="_blank" href={resumeInformation?.basicInfo?.github}><i
                                            className="fa-brands fa-github"> github</i></a></li>:<></>}
                                
                                
                            </div>
                            <div className="personal-details">
                                <li className="icon"><a href=""><i className="fa-solid fa-envelope"> </i></a> {resumeInformation?.basicInfo?.email}</li>
                                <li className="icon"><a href=""><i className="fa-solid fa-phone"> </i></a> {resumeInformation?.basicInfo?.phone}</li>
                                <li className="icon"><a target="_blank"
                                        href="#"><i
                                            className="fa-solid fa-location-dot"> </i></a> {resumeInformation?.basicInfo?.currentCIty}</li>
    
                            </div>
                            <div className="skills">
                                <h2 className="skill-tittle">{resumeInformation?.skillsInfo?.[0].sectionTitle}</h2>
                                <div className="skills-content">
                                    {resumeInformation?.skillsInfo?.map((item,i)=>{
                                        return <Fragment key={i}>
                                                <div className="skill-item">
                                                    <div className="skill-name">
                                                        <h3>{item.skillName}</h3>
                                                    </div>
                                                    <div className="skill-progress">
                                                        <div className="progress-bar" style={{width: `${item.skillPercentage}%`}}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Fragment>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            {/* <!-- right section --> */}
        <div style={{width: "100%"}} >
            <section className="right-section">
                <div className="right-main-content">
                    <section className="about sec">
                        <h2 className="right-tittle">CAREER OBJECTIVE</h2>
                        <div className="info">
    
                            <p className="para">{resumeInformation?.aboutMeInfo?.[0].careerObjective}</p>
                            </div>
                    </section>
                    {(resumeInformation?.workExpInfo?.[0].companyName)?<section className="work-sec">
                        <h2 className="right-tittle">{resumeInformation?.workExpInfo?.[0].sectionTitle}</h2>
                        <div className="work-content">
                           {resumeInformation?.workExpInfo?.map((item,i)=>{
                            return <div key={i} className="work">
                                        <h3>{item.companyName}</h3>
                                        <h6>{item.location}</h6>
                                        <br />
                                        <h5>Designation: {item.title}</h5>
                                        
                                        <p className="para">
                                            Experience from {item.startDate} to {item.endDate}</p>
                                            {(item.certificate)?<a href={item.certificate}><i class="fa-solid fa-certificate">certificate</i></a>:<></>}

                                            
                                            <br />
                                            
                                        <p className='para'>{item.description}</p>
                                        <hr />
                                    </div>
                            
                            
                           })} 
                        </div>
                    </section>:<section></section>}
                    <section className="education sec">
                        <h2 className="right-tittle">{resumeInformation?.educationInfo?.sectionTitle}</h2>
                        <div className="education-content">
                            <div className="univetsity">
                                <div className="degree">
                                    <h3>{resumeInformation?.educationInfo?.degreeTitle}</h3>
                                    <p className="para">{resumeInformation?.educationInfo?.collegeName},
                                     Date of completion : {resumeInformation?.educationInfo?.dateOfCompletionCollege}</p>
                                </div>
                                <div className="cgpa">
                                    <h3>CGPA</h3>
                                    <p>{resumeInformation?.educationInfo?.cgpa}</p>
                                </div>
                            </div>
                            <div className="12th">
                                <div className="school">
                                    <h3>12th from {resumeInformation?.educationInfo?.school12Board} Board</h3>
                                    <p className="para">{resumeInformation?.educationInfo?.schoolName12},
                                        Date of completion : {resumeInformation?.educationInfo?.dateOfCompletionSchool12}</p>
                                </div>
                                <div className="percentage">
                                    <h3>Percentage</h3>
                                    <p>{resumeInformation?.educationInfo?.percentage12}%</p>
                                </div>
                            </div>
                            <div className="10th">
                                <div className="school">
    
                                    <h3>10th from{resumeInformation?.educationInfo?.school10Board}</h3>
                                    <p className="para">{resumeInformation?.educationInfo?.schoolName10},
                                        Date of completion : {resumeInformation?.educationInfo?.dateOfCompletionSchool10}</p>
                                </div>
                                <div className="percentage">
                                    <h3>Percentage</h3>
                                    <p>{resumeInformation?.educationInfo?.percentage10}%</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="project">
                        <h2 className="right-tittle">{resumeInformation?.projectInfo?.[0].sectionTitle}</h2>
                        {resumeInformation?.projectInfo?.map((item,i)=>{
                            return <div key={i} className="IOT">
                            <a href={item.hostedProjectLink} target="_blank"><h3>{item.projectTitle}</h3></a>{(item.githubLInk)?<a target="_blank" href={item.githubLInk}><i
                                            className="fa-brands fa-github">Github link</i></a>:<></>}
                            <p className="para"><i className="fa-regular fa-circle"></i> {item.projectDescription}</p>
                        </div>
                        })}
                        
                    </section>
                    <section className="achivements">
                        <h2 className="right-tittle">{resumeInformation?.achievementInfo?.[0].sectionTitle}</h2>
                        <div className="items">
                            
                            {resumeInformation?.achievementInfo?.map((item,i)=>{
                                return <p key={i} className="para"><i className="fa-regular fa-circle"></i> {item.achievements}</p>
                            })}
                        </div>
                    </section>
                    <section className="about">
                        <h2 className="right-tittle">{resumeInformation?.aboutMeInfo?.[0].sectionTitle}</h2>
                        <div className="aboutme">
                            <div className="language">
                                <h3>Languages</h3>
                                {resumeInformation?.aboutMeInfo?.map((item,i)=>{
                                    return <p key={i} className="para"><i className="fa-regular fa-circle"></i> {item.language}</p>
                                })}
                               
    
                            </div>
                            <div className="softskills">
                                <h3>Softskills</h3>
                                {resumeInformation?.aboutMeInfo?.map((item,i)=>{
                                    return <p key={i} className="para"><i className="fa-regular fa-circle"></i> {item.softSkill}</p>
                                })}
                                
                                
                            </div>
                            <div className="hobbies">
                                <h3>Hobbies</h3>
                                {resumeInformation?.aboutMeInfo?.map((item,i)=>{
                                    return <p key={i} className="para"><i className="fa-regular fa-circle"></i> {item.hobbies}</p>
                                })}
                                
                                
                            </div>
                        </div>
                    </section>
                   
                    
    
                </div>
            </section>
        </div>
    
    </main>
    </div>
  )
})

export default Resume
