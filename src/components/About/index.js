import './index.scss'
import { useState } from 'react'

const About = () => {
    const [letterAnimation, setLetterClass] = useState('text-animate')
    
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    About me
                </h1>
                <p>
                    I'm a determined and ambitious software developer looking for a role in an established IT company, 
                    with the opportunity to work with the latest technologies on challenging and diverse projects.
                </p>
                <p>
                    I am a proficient fullstack developer and have
                    excellent experience working with HTML, CSS, React, NodeJS, C#, and Java.
                    My projects are on my github, which can be found at the bottom left in the navigation bar.
                </p>
                <p>
                    When I am not coding, I enjoy playing the violin and playing football with friends.
                </p>
            </div>
        </div>
    )
}

export default About;