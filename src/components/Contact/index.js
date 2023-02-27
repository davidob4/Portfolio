import Loader from 'react-loaders'
import './index.scss'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_2abuxwf', 
        'template_d6yo6sh', 
        refForm.current, 
        'raJje6FLC_tABR1wx'
        ).then(() => {
            alert('Message has been sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send')
        })
    }

    return (
        <>
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