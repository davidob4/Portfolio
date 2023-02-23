import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import './index.scss';

const Layout = () => {
    return (
        <div className='App'>
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

                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>

            </div>

            

        </div>
    )
}

export default Layout