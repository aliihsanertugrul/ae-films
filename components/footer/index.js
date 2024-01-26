import React from 'react'
import styles from "./styles.module.css"
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        Decorated by
        <Link href="http://linkedin.com/in/ali-ihsan-ertugrul-617a36297" target='_blank'>Ali ihsan Ertugrul</Link>
    </footer>
  )
}

export default Footer