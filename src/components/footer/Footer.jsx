import React from 'react'
import './footer.scss'
import { Github, Linkedin, Twitter, Mail } from 'feather-icons-react/build/IconComponents';


const Footer = () => {
  let year = new Date();
  year = year.getFullYear();
  return (

    <footer >
      <p>"You can't look at a sleeping cat and feel tense." - Jane Pauley</p>
      <div className='container--footer'>
        <a href='https://www.linkedin.com/company/educam%C3%A1s/' target='_blank' aria-label="Open Linkedin profile" className='container--icon'> <Linkedin className='icon' /> </a>
        <a href='https://github.com/MauricioSantos12' target='_blank' className='container--icon' aria-label="Open Github profile"> <Github className='icon' /> </a>
        <a href='https://twitter.com/educamas' target='_blank' className='container--icon' aria-label="Open Twitter profile"> <Twitter className='icon' /> </a>
        <a href="mailto:mauricio.santosr12@gmail.com" target='_blank' className='container--icon' aria-label="Open Mail to contact me"> <Mail className='icon' /> </a>
      </div>
      <div className='container--copy'>
        <p className="copy">Copyright {year} &copy; </p>
        <p className="copy">
            <a href="https://www.linkedin.com/company/educam%C3%A1s/" target="_blank"> {' '} Educamás</a>
        </p>
      </div>
    </footer>
    
  )
}

export default Footer