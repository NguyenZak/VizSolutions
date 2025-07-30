import Link from 'next/link';

export default function ContactContent() {
  return (
    <>
      {/* Banner nhỏ cho contact */}
      <div className="mil-inner-banner mil-p-0-120">
        <div className="mil-banner-content mil-center mil-up">
          <div className="container">
            <ul className="mil-breadcrumbs mil-center mil-mb-60">
              <li><Link href="/">Homepage</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
            <h1 className="mil-mb-60">Get in touch!</h1>
            <a href="#contact" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
              <span>Send message</span>
            </a>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mil-map-frame mil-up">
        <div className="mil-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1396.5769090312324!2d-73.6519672!3d45.5673453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91f8abc30e0ff%3A0xfc6d9cbb49022e9c!2sManoir%20Saint-Joseph!5e0!3m2!1sen!2sua!4v1685485811069!5m2!1sen!2sua" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      {/* Contact form */}
      <section id="contact">
        <div className="container mil-p-120-90">
                      <h3 className="mil-center mil-up mil-mb-120">Let&apos;s <span className="mil-thin">Talk</span></h3>
          <form className="row align-items-center">
            <div className="col-lg-6 mil-up">
              <input type="text" placeholder="What&apos;s your name" />
            </div>
            <div className="col-lg-6 mil-up">
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="col-lg-12 mil-up">
              <textarea placeholder="Tell us about our project"></textarea>
            </div>
            <div className="col-lg-8">
              <p className="mil-up mil-mb-30"><span className="mil-accent">*</span> We promise not to disclose your personal information to third parties.</p>
            </div>
                            <div className="col-lg-4">
                  <div className="mil-adaptive-right mil-up mil-mb-30">
                    <button type="submit" className="mil-button mil-arrow-place mil-accent-cursor">
                      <span>Send message</span>
                    </button>
                  </div>
                </div>
          </form>
        </div>
      </section>
    </>
  );
}