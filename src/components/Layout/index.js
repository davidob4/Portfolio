import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import './index.scss';

const Layout = () => {

    const toggleTheme = (e) => {
        if(e.target.checked) document.querySelector('body').setAttribute('data-theme', 'dark');
        else document.querySelector('body').setAttribute('data-theme', 'light');
    }

    return (
        <div className='App' id='light'>
            <span className='tags top-tags'>
                <span className='htmls'>&lt;html&gt;</span>
                    <br />
                &lt;body&gt;
            </span>

            <label class="switch-dark">
                <input type="checkbox" className='check-box' onChange={toggleTheme}/>
                <span class="slider"></span>
            </label>

            <Navbar />
            <div className='page'>
                <Outlet />
            </div>

            <span className='tags bottom-tags'>
                &lt;/body&gt;
                    <br />
                <span className='htmls'>&lt;/html&gt;</span>
            </span>
        </div>
    )
}

export default Layout