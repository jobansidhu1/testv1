import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import contactImg from '../assets/contact.png';
import vectorImg from '../assets/Vector.png';
import vector3Img from '../assets/Vector3.png';

const Contact = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    serviceType: 'Wedding Photography',
    location: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="page-wrapper contact-page">
      {/* ── NAVBAR ── */}
      <Navbar activePage="contact" onNavigate={onNavigate} />

      {/* ── CONTACT HERO HEADER ── */}
      <header className="page-header">
        <div className="page-header-content">
          <img src={vectorImg} alt="Botanical crest" className="page-header-icon" />
          <p className="page-header-label">Inquire & Connect</p>
          <h1 className="page-header-title">Get In Touch</h1>
          <p className="page-header-sub">Let’s Create Something Truly Timeless</p>
        </div>
      </header>

      {/* ── MAIN CONTACT SECTION ── */}
      <section className="contact-main-section">
        <div className="contact-wrapper">
          {/* Form Side */}
          <div className="contact-form-side">
            <p className="contact-label">Reserve Your Date</p>
            <h2 className="contact-heading">We’d Love to Hear Your Story</h2>

            {isSubmitted ? (
              <div className="contact-success-box">
                <img src={vector3Img} alt="Success" className="story-banner-vector-img" style={{ marginBottom: '12px' }} />
                <h3 className="contact-success-title">Thank You, {formData.name || 'Friend'}!</h3>
                <p className="contact-success-text">
                  Your inquiry has been warmly received. I take immense joy in learning about each love story and will respond with my full wedding guide within 24–48 hours.
                </p>
                <button
                  type="button"
                  className="btn-outline"
                  style={{ marginTop: '20px' }}
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="YOUR FULL NAME *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="EMAIL ADDRESS *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </div>

                <div className="form-group-row">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="PHONE NUMBER"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-input"
                  />
                  <input
                    type="text"
                    name="eventDate"
                    placeholder="ESTIMATED WEDDING DATE"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>

                <div className="form-group-row">
                  <input
                    type="text"
                    name="location"
                    placeholder="CEREMONY / RECEPTION LOCATION"
                    value={formData.location}
                    onChange={handleChange}
                    className="contact-input"
                  />
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="contact-input contact-select"
                  >
                    <option value="Wedding Photography">Wedding Collection</option>
                    <option value="Engagement Session">Engagement Session</option>
                    <option value="Portrait Session">Editorial Portrait</option>
                    <option value="Destination Wedding">Destination Wedding</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="TELL ME ABOUT YOUR VISION, STYLE & CELEBRATION *"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="contact-textarea"
                ></textarea>

                <div>
                  <button type="submit" className="btn-outline">
                    Send Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Image & Info Side */}
          <div className="contact-side-info">
            <div className="contact-side-img-wrap">
              <img src={contactImg} alt="Romantic couple embrace" className="contact-img" />
            </div>

            <div className="contact-info-card">
              <h3 className="contact-info-title">Studio Direct</h3>
              <p className="contact-info-item">
                <span>Location:</span> Santa Barbara, CA & Available Worldwide
              </p>
              <p className="contact-info-item">
                <span>Email:</span> hello@tessamorganphoto.com
              </p>
              <p className="contact-info-item">
                <span>Hours:</span> Monday – Friday | 9am – 6pm PST
              </p>
              <p className="contact-info-item">
                <span>Instagram:</span> @tessamorgan.photography
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="contact-faq-section">
        <div className="contact-faq-inner">
          <p className="services-label">Frequently Asked Questions</p>
          <h2 className="services-heading">Everything You Need To Know</h2>

          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">When should we book our wedding photography?</h3>
              <p className="faq-answer">
                Most couples reserve their date 9 to 18 months in advance. Because I accept a limited number of commissions per season, early booking is recommended.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Do you travel for destination weddings?</h3>
              <p className="faq-answer">
                Yes, absolutely! Approximately half of my celebrations take place outside of California. Custom travel arrangements and quotes are prepared upon inquiry.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">When will we receive our full image gallery?</h3>
              <p className="faq-answer">
                A curated sneak peek gallery is delivered within 72 hours of your wedding day, and the complete high-resolution collection is delivered in 6 to 8 weeks.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Can we order bespoke heirloom albums?</h3>
              <p className="faq-answer">
                Yes! Every collection can be paired with our handcrafted linen and Italian leather heirloom albums, designed personally by Tessa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Contact;

