import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import './index.scss';

const Layout = () => {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark')
    }

    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light')
    }

    const toggleTheme = (e) => {
        if(e.target.checked) setDarkMode();
        else setLightMode();
    }

    return (
        <div className='App' id='light'>

            <label class="switch-dark">
                <input type="checkbox" onChange={toggleTheme}/>
                <span class="slider"></span>
            </label>
            
            <Navbar />

            <div className='page'>

                <span className='tags top-tags'>
                    <span className='htmls'>&lt;html&gt;</span>
                    <br />
                    &lt;body&gt;
                </span>

                <Outlet />

                <span className='tags bottom-tags'>
                    &lt;/body&gt;
                    <br />
                    <span className='htmls'>&lt;/html&gt;</span>
                </span>

                

            </div>

            

        </div>
    )
}

export default Layout