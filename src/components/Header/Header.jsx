import React from 'react'
import headerImage from '../../images/headerImage.svg'
import css from './Header.module.css'

const Header = () => {
  return (
    <div className={css.container}>
        <div className={css.left} >
            <p className={css.heading}>Build the perfect <span>Resume</span>!</p>
            <p className={css.heading}> with our easy-to-use online tool. <span>it's Free</span></p>
        </div>
        <div className={css.right}>
            <img src={headerImage} alt=""  />
        </div>
      
    </div>
  )
}

export default Header
