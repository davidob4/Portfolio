import { useState } from 'react'
import './index.scss'
import Animated from '../Animated'
import CV from '../../assets/images/David_Ochinca-Beregoi_CV_page-0001.jpg'
import CVPDF from '../../assets/David_Ochinca-Beregoi_CV.pdf'
import pic from '../../assets/images/unnamed.jpg'
import { useHref } from 'react-router-dom'

const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = ['D', 'a', 'v', 'i', 'd']

    const DownloadCV = () => {
        window.open(CVPDF, '_blank');
    }
    
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br />I'm&nbsp;
                <Animated letterClass={letterClass} 
                strArray={nameArray}
                />
                </h1>

                <h2>React / NodeJS<br />C#<br />Java</h2>

                <h className='Dev'>Developer</h>

                <img src={CV} onClick={DownloadCV} />
                
            </div>
            
            
            
            
        </div>
    )
}

export default Home