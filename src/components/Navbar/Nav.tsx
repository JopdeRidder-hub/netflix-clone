import React, { useState, useEffect } from 'react'
import "./Nav.css"

function Nav() {
  const [show, handleShow] = useState(false)

  const transitionNavBar = () => {
    if (window.scrollY > 100){
      return handleShow(true)
    }return handleShow(false)

  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => {window.removeEventListener("scroll", transitionNavBar)}
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className='nav__contents'>
        <img className='nav__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png?20170904093427" alt='Logo'/>
        <img className='nav__avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''/>
        </div>
    </div>
  )
}

export default Nav