import { useState } from 'react'
import './index.scss'
import Animated from '../Animated'

const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = ['D', 'a', 'v', 'i', 'd']
    
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br />I'm &nbsp;
                <Animated letterClass={letterClass} 
                strArray={nameArray}
                />
                </h1>

                <h2>React / NodeJS<br />C#<br />Java</h2>

                <h className='Dev'>Developer</h>
            </div>
        </div>
    )
}

export default Home