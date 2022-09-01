import React from 'react';
import './support.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Support = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // PUT THESE IN ENV FILE
        emailjs.sendForm(
            'service_rm5ewjq',
            'template_j2e256i',
            form.current,
            'DO4xfjwr8AS14N6ZX'
        );
        e.target.reset()
    };

    return (
        <>
            <div>
                <h3>Please leave a detailed report</h3>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='What we can help you with' required ></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                    <img src="cid:logo.png" alt="Logo" />
                </form>

            </div>
        </>
    )
}

export default Support
