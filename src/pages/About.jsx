import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import authorImg from '../assets/author.png';
import vectorImg from '../assets/Vector.png';
import vector1Img from '../assets/Vector1.png';
import vector2Img from '../assets/Vector2.png';
import vector3Img from '../assets/Vector3.png';
import groupImg from '../assets/Group.png';
import belImg from '../assets/bel.png';

const About = ({ onNavigate }) => {
  return (
    <div className="page-wrapper about-page">
      {/* ── NAVBAR ── */}
      <Navbar activePage="about" onNavigate={onNavigate} />

      {/* ── ABOUT HERO HEADER ── */}
      <header className="page-header">
        <div className="page-header-content">
          <img src={vectorImg} alt="Botanical crest" className="page-header-icon" />
          <p className="page-header-label">Meet The Artist</p>
          <h1 className="page-header-title">About Tessa Morgan</h1>
          <p className="page-header-sub">Fine Art Wedding & Portrait Photographer</p>
        </div>
      </header>

      {/* ── DETAILED BIOGRAPHY SECTION ── */}
      <section className="about-bio-section">
        <div className="about-bio-container">
          <div className="about-bio-image-col">
            <div className="about-bio-image-frame">
              <img src={authorImg} alt="Tessa Morgan behind the lens" className="about-bio-img" />
            </div>
          </div>

          <div className="about-bio-text-col">
            <span className="intro-quote">“</span>
            <h2 className="about-bio-heading">Capturing Love in its Truest, Most Artistic Form</h2>
            
            <p className="about-bio-para">
              Hello, I'm Tessa. For over a decade, I have had the privilege of documenting life’s most profound milestones across the globe. My visual signature is rooted in soft natural light, sincere editorial elegance, and authentic, unscripted emotion.
            </p>
            <p className="about-bio-para">
              I believe that wedding photography should be more than a visual record—it should feel like poetry in motion. Long after the flowers have faded and the music has quieted, your photographs will remain as heirlooms to transport you back to how each heartbeat felt.
            </p>
            <p className="about-bio-para">
              Whether you are exchanging vows in an intimate Tuscan vineyard or celebrating beneath a coastal canopy in California, my approach is discreet, calm, and passionately devoted to your story.
            </p>

            <img src={belImg} alt="Floral ornament" className="intro-divider-img" />
            <p className="intro-signature">Tessa.M</p>

            <div style={{ textAlign: 'center', marginTop: '12px' }}>
              <button
                className="btn-outline"
                onClick={() => onNavigate?.('contact')}
              >
                Inquire With Tessa
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY / CORE VALUES ── */}
      <section className="about-philosophy-section">
        <div className="about-philosophy-inner">
          <img src={vector3Img} alt="Ornament" className="story-banner-vector-img" style={{ marginBottom: '8px' }} />
          <p className="services-label">My Philosophy</p>
          <h2 className="services-heading">The Pillars of My Craft</h2>

          <div className="about-cards-grid">
            <div className="about-card">
              <img src={vector1Img} alt="Timeless Elegance" className="service-vector-icon" />
              <h3 className="about-card-title">Timeless Grace</h3>
              <p className="about-card-desc">
                Clean compositions, delicate lighting, and editorial sensitivity that transcends passing trends, enduring beautifully across generations.
              </p>
            </div>

            <div className="about-card">
              <img src={vector2Img} alt="Authentic Emotion" className="service-vector-icon" />
              <h3 className="about-card-title">Pure Intimacy</h3>
              <p className="about-card-desc">
                Quiet glances, unprompted laughter, and joyful tears. I cultivate an effortless space where you can be entirely yourselves.
              </p>
            </div>

            <div className="about-card">
              <img src={groupImg} alt="Bespoke Artistry" className="service-vector-icon" />
              <h3 className="about-card-title">Bespoke Curation</h3>
              <p className="about-card-desc">
                From pre-wedding style consultations to hand-graded galleries and museum-grade printed albums, every detail is custom tailored.
              </p>
            </div>
          </div>
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

      {/* ── CALL TO ACTION BANNER ── */}
      <section className="page-cta-banner">
        <div className="page-cta-content">
          <p className="services-label">Your Next Chapter</p>
          <h2 className="page-cta-title">Let’s Begin Preserving Your Story</h2>
          <p className="page-cta-desc">
            Dates for 2026 & 2027 are limited to ensure each couple receives my wholehearted dedication.
          </p>
          <button
            className="btn-outline"
            onClick={() => onNavigate?.('contact')}
          >
            Check Availability
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default About;

