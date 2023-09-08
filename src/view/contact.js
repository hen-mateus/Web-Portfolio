import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <div className="container contact-container color-white d-flex justify-content-center align-items-center">
            <div class="flex-column text-center">
                <p className='titulo contact-bmargin'>Contact</p>
                <p className='contact-bmargin-2'>Feel free to get in touch with me via email using the button below.</p>
                <a href="mailto:henriquemateus.prof@gmail.com" className='border border-white box-contact rounded bg-transparent text-decoration-none text-reset py-3 px-5'><FontAwesomeIcon icon={faEnvelope} className='me-2' /> E-mail</a>
            </div>
        </div>

    );
}