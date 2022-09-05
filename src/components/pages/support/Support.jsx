import React from 'react';
import './support.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import BackToHomeButton from "./buttons/BackToHomeButton";


const Support = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Confirm Email Check
        if (form.current[1].value != form.current[2].value) {
            alert("The confirm email does not match.")
            return
        }

        // PUT THESE IN ENV FILE
        emailjs.sendForm(
            'service_rm5ewjq',
            'template_j2e256i',
            form.current,
            'DO4xfjwr8AS14N6ZX'
        );
        e.target.reset()
        alert("Your support request has been sent.")
    };

    let infoLabel = "Please leave a detailed summary of what you need help with along with your return email address and name. We will get back to you as soon as possible."

    return (
            <div className="support-page">

                <div className="left-hand-info-panel">
                    <BackToHomeButton />
                    <label className="page-title-label">Support</label>
                    <label className="page-info-label">{infoLabel}</label>
                </div>

                <form className="support-form" ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li>
                            <input type="text" name='name' placeholder='Name' required />
                        </li>
                        <li>
                            <input type="email" name='email' placeholder='Email' required />
                        </li>
                        <li>
                            <input type="email" name='confirm-email' placeholder='Confirm Email' required />
                        </li>
                        <li>
                            <textarea name="message" rows="7" placeholder='What we can help you with' required ></textarea>
                        </li>
                        <li>
                            <button type='submit' className='support-form-primary-button'>Send Message</button>
                        </li>
                    </ul>
                </form>

            </div>
    )
}

export default Support
