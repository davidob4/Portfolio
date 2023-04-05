import React from 'react'
import './index.scss'
import securecChatPng from '../../assets/images/secureChat.png'

const Projects = () => {
  return (
    <div className='container projects-page'>
        <div className='projects'>
            <div className='project securechat'>
                <h2>Secure Chat</h2>
                <i>(currently unsecureChat while E2E encryption is being implemented)</i>
                <a href="https://davidob4.github.io/secureChat/" target='_blank'><img className='secureChatPng' src={securecChatPng} /></a>
                <h4>Make and account and search "David" and begin chatting!</h4>
            </div>
        </div>
        <i className='moreComing'>More Coming</i>
    </div>
  )
}

export default Projects