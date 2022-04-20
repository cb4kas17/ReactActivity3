import React from 'react'
import styles from './card.module.css'
function Card({children, className}) {
  return (
    <div className={`${className} ${styles.card}`}>{children}</div>
  )
}

export default Card