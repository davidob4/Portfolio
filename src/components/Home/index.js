import { useState } from 'react'
import './index.scss'
import CV from '../../assets/images/David_Ochinca-Beregoi_CV_page-0001.jpg'
import CVPDF from '../../assets/David_Ochinca-Beregoi_CV.pdf'
import pic from '../../assets/images/unnamed.jpg'
import { useHref } from 'react-router-dom'

const Home = () => {

    const OpenCV = () => {
        window.open(CVPDF, '_blank');
    }
    
    return(
        <div className="container home-page">

            <div className='cv-name'>
                <div className="text-zone">
                    <h1>Hi, <br />I'm David</h1>
                    <h6>React / NodeJS<br />C#<br />Java</h6>
                </div>
                
                <img src={CV} onClick={OpenCV}/>
            </div>

            
        </div>
    )
}

export default Home