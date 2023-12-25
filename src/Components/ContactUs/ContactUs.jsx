import React from 'react'
import './ContactUs.css'
import ContactUsForm from '../ContactUsForm/ContactUsForm'
export default function ContactUs() {
  return (
    <section className='contact-us'>
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className='img-contact-box'>
                        <img className='img-fit' src="/images/img-8.jpg" alt="animal" />
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <ContactUsForm/>
                </div>

            </div>
        </div>
    </section>
  )
}
