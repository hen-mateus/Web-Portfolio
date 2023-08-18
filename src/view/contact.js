import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
            <div className="container contact-container color-white d-flex align-items-center">
                <div class="flex-column">
                    <p className='titulo contact-bmargin'>Contact</p>
                    <p className='contact-bmargin-2'>I'm currently looking for opportunities. Whether its a Full-Time Job or a Freelance work. Send me a message, I'll try to get back to you as soon as possible.</p>
                    <a href="mailto:henriquemateus.prof@gmail.com" className='border border-white box-effect rounded bg-transparent box-effect text-decoration-none text-reset py-3 px-5'><FontAwesomeIcon icon={faEnvelope} className='me-2'/> E-mail</a>
                </div>
            </div >
    );
}