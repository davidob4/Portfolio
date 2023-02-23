import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => (
    <div className='nav-bar'>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#303236' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#303236' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#303236' />
            </NavLink>
        </nav>
        <ul>
            <li>
               <a target='_blank' 
                  rel='noreferrer' 
                  href='https://www.linkedin.com/in/david-ochinca-beregoi-14460b263'
                >   
                <FontAwesomeIcon icon={faLinkedin} color='#303236' />
               </a> 
               <a target='_blank'
                  rel='noreferrer'
                  href='https://www.github.com/davidob4'
                >
                <FontAwesomeIcon icon={faGithub} color='#303236' />
               </a> 
            </li>
        </ul>
    </div>
)

export default Navbar