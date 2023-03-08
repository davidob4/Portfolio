import Loader from 'react-loaders'
import './index.scss'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import emailjs from '@emailjs/browser'
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_2abuxwf', 
        'template_d6yo6sh', 
        refForm.current, 
        'raJje6FLC_tABR1wx'
        ).then(() => {
            toast.success('Message has been sent!', {
                position: toast.POSITION.TOP_CENTER,
                onClose: () => window.location.reload(false)
            });
        },
        () => {
            toast.error('Failed to send', {
                position: toast.POSITION.TOP_CENTER
            });
        })
    }

    return (
        <>
            <ToastContainer autoClose={4000}/>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        Contact me
                    </h1>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='halfs'>
                                    <input type='text' name='name' placeholder='Name' required></input>
                                </li>
                                <li className='halfs'>
                                    <input type='email' name='email' placeholder='Your Email' required></input>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required />
                                </li>
                                <li>
                                    <input type='submit' className='button' name='send' value='SEND'></input>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="ball-zig-zag"></Loader>
        </>
    )
}

export default Contact