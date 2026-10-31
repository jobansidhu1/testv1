import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import vectorImg from '../assets/Vector.png';
import vector1Img from '../assets/Vector1.png';
import vector2Img from '../assets/Vector2.png';
import groupImg from '../assets/Group.png';
import heroImg from '../assets/hero.png';
import authorImg from '../assets/author.png';
import contactImg from '../assets/contact.png';

const servicesData = [
  {
    id: 'wedding',
    title: 'Wedding',
    subtitle: 'Artistic Full-Day Wedding Photography',
    price: '$2999',
    numericPrice: 2999,
    per: 'Per Session / Full Celebration',
    icon: vector1Img,
    heroImage: heroImg,
    tagline: 'Preserving every glance, vow, and unscripted tear with editorial grace.',
    desc: 'Our flagship wedding experience is curated for couples who cherish sincere, emotive imagery. From quiet morning preparations in bespoke suites to emotional golden hour portraits and the exhilarating revelry on the dance floor, we provide complete, artistic coverage of your wedding day.',
    specs: [
      { label: 'Coverage', val: 'Up to 10 Hours' },
      { label: 'Photographers', val: 'Lead + 2nd Shooter' },
      { label: 'Delivered Photos', val: '600+ Artful Images' },
      { label: 'Delivery Time', val: '6–8 Weeks' }
    ],
    inclusions: [
      'Up to 10 hours of continuous wedding day coverage',
      'Two professional documentary lead photographers',
      'Complimentary 60-minute engagement session',
      '600+ hand-curated and individually retouched high-resolution images',
      'Private online gallery with infinite high-res downloads and print store',
      'Sneak peek gallery delivered within 72 hours of your wedding day',
      'Bespoke timeline planning and styling consultation',
      'Full personal printing rights and lifetime archive backup'
    ]
  },
  {
    id: 'portrait',
    title: 'Portrait',
    subtitle: 'Fine Art Editorial Portrait Session',
    price: '$399',
    numericPrice: 399,
    per: 'Per Session',
    icon: vector2Img,
    heroImage: authorImg,
    tagline: 'Tailored editorial portraiture celebrating milestones, artists, and individuals.',
    desc: 'Crafted with natural lighting and an intimate editorial perspective. Whether celebrating an anniversary, creative venture, maternity, or graduating milestone, this session is tailored to elevate your natural beauty in scenic outdoor environments or minimalist studio spaces.',
    specs: [
      { label: 'Session Length', val: '90 Minutes' },
      { label: 'Outfit Looks', val: 'Up to 3 Looks' },
      { label: 'Retouched Photos', val: '50+ High-Res' },
      { label: 'Delivery Time', val: '2 Weeks' }
    ],
    inclusions: [
      '90-minute dedicated on-location or natural-light studio session',
      'Creative direction and mood-board styling consultation',
      'Up to 3 wardrobe changes and lighting adjustments',
      '50+ fully retouched, signature color-graded high-resolution photos',
      'Private download gallery with web-ready & print-ready formats',
      'Expedited delivery within 14 calendar days',
      'Personal and commercial portfolio usage release'
    ]
  },
  {
    id: 'engagement',
    title: 'Engagement',
    subtitle: 'Cinematic Sunset Storytelling Session',
    price: '$1999',
    numericPrice: 1999,
    per: 'Per Session',
    icon: groupImg,
    heroImage: contactImg,
    tagline: 'An unforgettable chapter celebrating your engagement in breathtaking landscapes.',
    desc: 'The engagement session is a relaxed, joyful journey designed to capture your authentic connection before the wedding. We scout cinematic coastal cliffs, romantic olive groves, or architectural landmarks at sunset to create heirloom portraits.',
    specs: [
      { label: 'Session Length', val: '3 Hours' },
      { label: 'Locations', val: 'Up to 2 Scenic Spots' },
      { label: 'Delivered Photos', val: '150+ Images' },
      { label: 'Delivery Time', val: '3 Weeks' }
    ],
    inclusions: [
      'Up to 3 hours of golden hour and sunset coverage',
      'Access to 2 curated outdoor or destination locations',
      '150+ signature edited high-resolution digital photographs',
      'Wardrobe style guide and location scouting guide included',
      'Private downloadable gallery for sharing with family & friends',
      'Full personal print release and online gallery store credit',
      '50% of session fee credited if full wedding collection is booked'
    ]
  }
];

const Services = ({ initialService = 'wedding', onNavigate }) => {
  const [activeServiceId, setActiveServiceId] = useState(initialService);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('form'); // 'form' | 'processing' | 'success'
  const [paymentData, setPaymentData] = useState({
    cardholderName: 'Sarah Jenkins',
    cardNumber: '4242 •••• •••• 4242',
    expDate: '09/28',
    cvc: '888',
    postalCode: '90210'
  });

  useEffect(() => {
    if (initialService) {
      setActiveServiceId(initialService);
    }
  }, [initialService]);

  const activeService =
    servicesData.find((s) => s.id === activeServiceId) || servicesData[0];

  const handleOpenPayment = () => {
    setPaymentStatus('form');
    setIsPaymentOpen(true);
  };

  const handleProcessPayment = (e) => {
    e.preventDefault();
    setPaymentStatus('processing');
    setTimeout(() => {
      setPaymentStatus('success');
    }, 1200);
  };

  const handlePaymentInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="page-wrapper services-page">
      {/* ── NAVBAR ── */}
      <Navbar activePage="services" onNavigate={onNavigate} />

      {/* ── HEADER ── */}
      <header className="page-header">
        <div className="page-header-content">
          <img src={vectorImg} alt="Botanical crest" className="page-header-icon" />
          <p className="page-header-label">Collections & Investment</p>
          <h1 className="page-header-title">Photography Services</h1>
          <p className="page-header-sub">Thoughtfully Curated Experiences with Transparent Pricing</p>
        </div>
      </header>

      {/* ── SERVICE SELECTION TABS ── */}
      <section className="services-tabs-bar">
        <div className="services-tabs-inner">
          {servicesData.map((svc) => (
            <button
              key={svc.id}
              type="button"
              className={`service-tab-btn ${activeService.id === svc.id ? 'active' : ''}`}
              onClick={() => setActiveServiceId(svc.id)}
            >
              <img src={svc.icon} alt="" className="tab-branch-icon" />
              <span className="tab-title">{svc.title}</span>
              <span className="tab-price">{svc.price}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ── DETAILED SERVICE SHOWCASE ── */}
      <section className="service-detail-showcase">
        <div className="service-detail-container">
          {/* Left Column: Core Details & Booking CTA */}
          <div className="service-detail-left">
            <div className="service-detail-header-card">
              <img src={activeService.icon} alt={activeService.title} className="service-vector-icon" />
              <h2 className="service-detail-title">{activeService.title}</h2>
              <p className="service-detail-subtitle">{activeService.subtitle}</p>
              <p className="service-detail-tagline">{activeService.tagline}</p>
              <p className="service-detail-desc">{activeService.desc}</p>

              {/* Specs Pills */}
              <div className="service-specs-grid">
                {activeService.specs.map((item) => (
                  <div className="spec-pill" key={item.label}>
                    <span className="spec-label">{item.label}</span>
                    <span className="spec-val">{item.val}</span>
                  </div>
                ))}
              </div>

              {/* Amount Display */}
              <div className="service-pricing-box">
                <span className="pricing-label">Total Investment</span>
                <div className="pricing-amount">{activeService.price}</div>
                <span className="pricing-per">{activeService.per}</span>
              </div>

              {/* Booking CTA Button */}
              <div className="service-cta-actions">
                <button
                  type="button"
                  className="btn-book-service"
                  onClick={handleOpenPayment}
                >
                  Book {activeService.title} Service
                </button>
                <p className="service-secure-note">
                  🔒 Instant booking confirmation • Demo payment panel
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Inclusions & Experience */}
          <div className="service-detail-right">
            <div className="service-inclusions-card">
              <h3 className="inclusions-heading">What Is Included In This Collection</h3>
              <ul className="inclusions-list">
                {activeService.inclusions.map((item, idx) => (
                  <li key={idx} className="inclusion-item">
                    <span className="check-bullet">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="service-guarantee-box">
                <h4 className="guarantee-title">The Tessa Morgan Promise</h4>
                <p className="guarantee-text">
                  Every collection includes transparent pricing with no hidden charges, complete print release rights, full backup equipment on set, and personal assistance crafting your celebration’s photo timeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES COMPARISON SECTION ── */}
      <section className="services-comparison-section">
        <p className="services-label">Compare All Options</p>
        <h2 className="services-heading">Explore All Collections</h2>

        <div className="services-grid">
          {servicesData.map((svc) => (
            <div
              className={`service-card ${activeService.id === svc.id ? 'card-selected' : ''}`}
              key={svc.id}
              onClick={() => {
                setActiveServiceId(svc.id);
                window.scrollTo({ top: 380, behavior: 'smooth' });
              }}
              style={{ cursor: 'pointer' }}
            >
              <img src={svc.icon} alt={svc.title} className="service-vector-icon" />
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-per">{svc.per}</p>
              <p className="service-price">{svc.price}</p>
              <button
                type="button"
                className="btn-outline"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveServiceId(svc.id);
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
              >
                {activeService.id === svc.id ? 'Viewing Details' : 'View Details'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── DUMMY PAYMENT PANEL MODAL ── */}
      {isPaymentOpen && (
        <div className="payment-modal-backdrop" onClick={() => setIsPaymentOpen(false)}>
          <div
            className="payment-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="payment-modal-close"
              onClick={() => setIsPaymentOpen(false)}
              aria-label="Close modal"
            >
              ✕
            </button>

            {paymentStatus === 'form' && (
              <div className="payment-form-content">
                <div className="payment-header-area">
                  <img src={vectorImg} alt="" className="payment-icon" />
                  <p className="payment-badge">Secure Booking Panel</p>
                  <h3 className="payment-title">Book {activeService.title} Collection</h3>
                  <p className="payment-sub">Demo Payment Simulation</p>
                </div>

                <div className="payment-summary-bar">
                  <div className="summary-left">
                    <span className="summary-label">Selected Service:</span>
                    <strong className="summary-service-name">
                      {activeService.title} Photography
                    </strong>
                  </div>
                  <div className="summary-right">
                    <span className="summary-label">Total Amount:</span>
                    <strong className="summary-amount">{activeService.price}</strong>
                  </div>
                </div>

                <form className="payment-form" onSubmit={handleProcessPayment}>
                  <div className="payment-field">
                    <label className="field-label">Cardholder Name</label>
                    <input
                      type="text"
                      name="cardholderName"
                      value={paymentData.cardholderName}
                      onChange={handlePaymentInputChange}
                      required
                      className="payment-input"
                    />
                  </div>

                  <div className="payment-field">
                    <label className="field-label">Card Number</label>
                    <div className="card-input-wrapper">
                      <input
                        type="text"
                        name="cardNumber"
                        value={paymentData.cardNumber}
                        onChange={handlePaymentInputChange}
                        required
                        className="payment-input"
                      />
                      <span className="card-brand-badge">VISA / MC</span>
                    </div>
                  </div>

                  <div className="payment-row">
                    <div className="payment-field">
                      <label className="field-label">Exp. Date</label>
                      <input
                        type="text"
                        name="expDate"
                        value={paymentData.expDate}
                        onChange={handlePaymentInputChange}
                        required
                        className="payment-input"
                      />
                    </div>
                    <div className="payment-field">
                      <label className="field-label">CVC Code</label>
                      <input
                        type="text"
                        name="cvc"
                        value={paymentData.cvc}
                        onChange={handlePaymentInputChange}
                        required
                        className="payment-input"
                      />
                    </div>
                    <div className="payment-field">
                      <label className="field-label">Zip Code</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={paymentData.postalCode}
                        onChange={handlePaymentInputChange}
                        required
                        className="payment-input"
                      />
                    </div>
                  </div>

                  <div className="demo-notice-box">
                    ℹ️ <strong>Demo Simulation:</strong> This is a secure prototype payment panel. No live charges will be placed on any financial card.
                  </div>

                  <button type="submit" className="btn-confirm-pay">
                    Pay {activeService.price} & Confirm Booking
                  </button>
                </form>
              </div>
            )}

            {paymentStatus === 'processing' && (
              <div className="payment-processing-content">
                <div className="payment-spinner"></div>
                <h3 className="processing-title">Processing Secure Payment...</h3>
                <p className="processing-text">
                  Verifying booking reservation for {activeService.title} Collection ({activeService.price})
                </p>
              </div>
            )}

            {paymentStatus === 'success' && (
              <div className="payment-success-content">
                <div className="success-icon-badge">✓</div>
                <h3 className="success-heading">Payment Successful!</h3>
                <p className="success-subheading">
                  Your reservation for the <strong>{activeService.title} Collection</strong> is officially confirmed.
                </p>

                <div className="receipt-box">
                  <div className="receipt-row">
                    <span>Booking Reference:</span>
                    <strong>#TM-{Math.floor(100000 + Math.random() * 900000)}</strong>
                  </div>
                  <div className="receipt-row">
                    <span>Service Booked:</span>
                    <strong>{activeService.title} Photography</strong>
                  </div>
                  <div className="receipt-row">
                    <span>Amount Paid:</span>
                    <strong className="receipt-amount">{activeService.price}.00 USD</strong>
                  </div>
                  <div className="receipt-row">
                    <span>Payment Status:</span>
                    <strong style={{ color: '#2e7d32' }}>Paid in Full (Demo Verified)</strong>
                  </div>
                  <div className="receipt-row">
                    <span>Confirmation Sent To:</span>
                    <strong>client@weddingstory.com</strong>
                  </div>
                </div>

                <p className="success-note">
                  A complete welcome consultation packet, contract duplicate, and calendar booking hold have been generated and dispatched.
                </p>

                <div className="success-action-btns">
                  <button
                    type="button"
                    className="btn-outline"
                    onClick={() => setIsPaymentOpen(false)}
                  >
                    Close Window
                  </button>
                  <button
                    type="button"
                    className="btn-confirm-pay"
                    style={{ margin: 0 }}
                    onClick={() => {
                      setIsPaymentOpen(false);
                      onNavigate?.('home');
                    }}
                  >
                    Return to Home
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── FOOTER ── */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Services;

