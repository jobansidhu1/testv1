import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImg from '../assets/hero.png';
import logoImg from '../assets/Logo.png';
import authorImg from '../assets/author.png';
import servicesImg from '../assets/services.png';
import portfolioImg from '../assets/portfolio.png';
import portfoliooImg from '../assets/portfolioo.png';
import clientImg from '../assets/client.png';
import clienttImg from '../assets/clientt.png';
import client3Img from '../assets/client3.png';
import contactImg from '../assets/contact.png';
import vectorImg from '../assets/Vector.png';
import belImg from '../assets/bel.png';
import vector1Img from '../assets/Vector1.png';
import vector2Img from '../assets/Vector2.png';
import vector3Img from '../assets/Vector3.png';
import groupImg from '../assets/Group.png';

const testimonials = [
  {
    quote: "Showcasing your big day in a memorable & unforgettable way.",
    author: "SARAH & LUKE",
    image: clientImg,
  },
  {
    quote: "Capturing our most sacred moments with effortless elegance and timeless emotion.",
    author: "EMMA & OLIVER",
    image: clienttImg,
  },
  {
    quote: "An extraordinary experience from start to finish. The photos took our breath away.",
    author: "CHLOE & DANIEL",
    image: client3Img,
  },
];

const Home = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevTestimonial = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  return (
    <>
      {/* ── NAVBAR ── */}
      <Navbar activePage="home" onNavigate={onNavigate} />

      {/* ── HERO SECTION ── */}
      <section className="hero">
        <img src={heroImg} alt="Wedding couple" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-sub">Your Dream Wedding Awaits</p>
          <h1 className="hero-title">Artistic Wedding Photography</h1>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <section className="intro-section">
        <div className="intro-top">
          <img src={vectorImg} alt="Award Winning Photography" className="intro-vector-icon" />
          <p className="intro-label">Award Winning Photography</p>
          <h2 className="intro-heading">
            Showcasing your big day in a memorable<br />and unforgettable way.
          </h2>
        </div>

        <div className="intro-body">
          <div className="intro-img-wrap">
            <img src={authorImg} alt="Tessa Morgan" className="intro-img" />
          </div>

          <div className="intro-text">
            <span className="intro-quote">“</span>
            <h3 className="intro-name">Hello, My Name is Tessa</h3>
            <p className="intro-para">
              Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique dignissim
              vehicula felis velit ac. Tempus velit morbi accumsan id sit interdum lacus turpis
              ac. Integer malesuada sagittis pharetra eget.
            </p>
            <p className="intro-para">
              Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique dignissim
              vehicula felis velit ac. Tempus velit morbi accumsan id sit interdum lacus turpis
              ac. Integer malesuada sagittis placerat.
            </p>
            <img src={belImg} alt="Flourish ornament" className="intro-divider-img" />
            <p className="intro-signature">Tessa.M</p>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ── */}
      <section className="services-section">
        <p className="services-label">Services</p>
        <h2 className="services-heading">What I Offer</h2>

        <div className="services-grid">
          {[
            { id: 'wedding',    title: 'Wedding',    price: '$2999', icon: vector1Img },
            { id: 'portrait',   title: 'Portrait',   price: '$399',  icon: vector2Img },
            { id: 'engagement', title: 'Engagement', price: '$1999', icon: groupImg },
          ].map((svc) => (
            <div
              className="service-card"
              key={svc.title}
              onClick={() => onNavigate?.('services', svc.id)}
              style={{ cursor: 'pointer' }}
            >
              <img src={svc.icon} alt={svc.title} className="service-vector-icon" />
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-per">Per Session</p>
              <p className="service-price">{svc.price}</p>
              <button
                className="btn-outline"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate?.('services', svc.id);
                }}
              >
                More Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORY BANNER SECTION ── */}
      <section className="story-banner-section">
        <div className="story-banner-bg-wrap">
          <img src={servicesImg} alt="Romantic wedding couple" className="story-banner-bg" />
        </div>
        <div className="story-banner-card">
          <img src={vector3Img} alt="Botanical branch" className="story-banner-vector-img" />
          <h3 className="story-banner-title">Creative, Passionate, Artistic</h3>
          <p className="story-banner-desc">
            Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan id sit interdum lacus turpis ac.
          </p>
        </div>
      </section>

      {/* ── FEATURED STORY / PORTFOLIO SECTION ── */}
      <section className="portfolio-section">
        <p className="portfolio-label">PORTFOLIO</p>
        <h2 className="portfolio-heading">Featured Story</h2>

        <div className="portfolio-content">
          <div className="portfolio-meta">
            <span className="portfolio-number">01</span>
            <h3 className="portfolio-couple">Ricardo & Michelle</h3>
            <p className="portfolio-desc">
              Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac.
            </p>
          </div>

          <div className="portfolio-gallery">
            <div className="portfolio-img-card">
              <img src={portfolioImg} alt="Featured story couple" className="portfolio-img" />
            </div>
            <div className="portfolio-img-card">
              <img src={portfoliooImg} alt="Bride portrait" className="portfolio-img" />
            </div>
          </div>
        </div>

        <div className="portfolio-cta">
          <button className="btn-outline">View Gallery</button>
        </div>
      </section>

      {/* ── CLIENT TESTIMONIALS SECTION ── */}
      <section className="testimonials-section">
        <h2 className="testimonials-heading">Client Testimonials</h2>

        <div className="testimonials-container">
          <button
            className="testimonial-arrow-btn"
            aria-label="Previous testimonial"
            onClick={prevTestimonial}
          >
            &#10094;
          </button>

          <div className="testimonial-card-wrap">
            <div className="testimonial-text-box">
              <span className="testimonial-quote-mark">“</span>
              <p className="testimonial-quote">
                {testimonials[currentSlide].quote}
              </p>
              <p className="testimonial-author">
                {testimonials[currentSlide].author}
              </p>
            </div>
            <div className="testimonial-img-box">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].author}
                className="testimonial-img"
              />
            </div>
          </div>

          <button
            className="testimonial-arrow-btn"
            aria-label="Next testimonial"
            onClick={nextTestimonial}
          >
            &#10095;
          </button>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="stats-section">
        <h2 className="stats-header">
          HELPING COUPLES BRING TO LIFE<br />THEIR WEDDING DREAMS
        </h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3 className="stat-number">12</h3>
            <p className="stat-label">Years Experience</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">10K</h3>
            <p className="stat-label">Photos Delivered</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">300</h3>
            <p className="stat-label">Events Captured</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">6</h3>
            <p className="stat-label">Awards</p>
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="contact-section">
        <div className="contact-wrapper">
          <div className="contact-form-side">
            <p className="contact-label">CONTACT</p>
            <h2 className="contact-heading">Get in Touch</h2>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="NAME" className="contact-input" />
              <input type="email" placeholder="EMAIL" className="contact-input" />
              <textarea placeholder="MESSAGE" rows="4" className="contact-textarea"></textarea>
              <div>
                <button type="submit" className="btn-outline">Send</button>
              </div>
            </form>
          </div>

          <div className="contact-img-side">
            <img src={contactImg} alt="Couple by water" className="contact-img" />
          </div>
        </div>
      </section>

      {/* ── FOOTER SECTION ── */}
      <Footer onNavigate={onNavigate} />
    </>
  );
};

export default Home;
