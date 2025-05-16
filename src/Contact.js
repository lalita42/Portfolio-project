import React from 'react';

export default function Contact() {
  return (
    <>
      <section className="w3l-about-breadcrumb text-center">
        <div className="breadcrumb-bg breadcrumb-bg-about py-5">
          <div className="container py-lg-5 mt-5">
            <div className="banner-info-grid mt-5">
              <h2 className="w3l-title-breadcrumb">Contact Us</h2>
            </div>
            <ul className="breadcrumbs-custom-path">
              <li><a href="/">Home</a></li>
              <li className="active">
                <span className="fa fa-angle-right mx-2" aria-hidden="true"></span>Contact
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w3l-contacts-12">
        <div className="contact-top pt-5">
          <div className="container py-lg-5 py-2">
            <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4">
              <h3 className="w3l-title-main">Want to get in touch?</h3>
            </div>
            <div className="d-grid cont-main-top">
              <div className="contacts12-main">
                <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="main-input">
                  <div className="top-inputs d-grid">
                    <input type="text" placeholder="Name" name="w3lName" id="w3lName" required />
                    <input type="email" name="email" placeholder="Email" id="w3lSender" required />
                  </div>
                  <input type="text" placeholder="Phone Number" name="phone" id="phone" required />
                  <textarea placeholder="Message" name="w3lMessage" id="w3lMessage" required></textarea>
                  <div className="text-end">
                    <button type="submit" className="btn btn-primary btn-style">Submit Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="map mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7281066703!2d-0.24168144921176335!3d51.5287718408761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1569921526194!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            />
          </div>
        </div>
      </section>
    </>
  );
}
