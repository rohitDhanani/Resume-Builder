import React from 'react'
import css from './InputControl.module.css'

const InputControl = ({label,...props}) => {
  return (
    <div className={css.container}>
        
      {label && <label>{label}</label>}
      <input {...props} />
    </div>
  )
}

export default InputControl
