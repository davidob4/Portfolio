import './index.scss'
import Animated from '../Animated'
import { useState } from 'react'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    About me
                </h1>

                <span className='tags top-tag'>&lt;p&gt;</span>
                <p>
                    I'm a determined and ambitious software developer looking for a role in an established IT company, 
                    with the opportunity to work with the latest technologies on challenging and diverse projects
                </p>
                <span className='tags bottom-tag'>&lt;/p&gt;</span>
                <br />
                <span className='tags top-tag'>&lt;p&gt;</span>
                <p>
                    I have excellent experience working with HTML, CSS, React, NodeJS, C#, and Java.
                    I have many projects completed using C#, and applications using React and NodeJS 
                    which you can find on my github.
                </p>
                <span className='tags bottom-tag'>&lt;/p&gt;</span>
                <br />
                <span className='tags top-tag'>&lt;p&gt;</span>
                <p>
                    When I am not coding, I enjoy playing the violin and playing football with friends.
                </p>
                <span className='tags bottom-tag'>&lt;/p&gt;</span>   
            </div>
        </div>
    )
}

export default About;