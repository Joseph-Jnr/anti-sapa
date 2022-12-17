import React from 'react'
import './Button.css'

const Button = ({icon, text, btnClass, href}) => {
  return (
    <a href={href} className={`btn ${btnClass}`}>{icon} {text}</a>
  )
}

export default Button