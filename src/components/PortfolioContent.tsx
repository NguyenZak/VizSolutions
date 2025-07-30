import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioContent() {
  return (
    <>
      {/* Banner nhỏ cho portfolio */}
      <div className="mil-inner-banner">
        <div className="mil-banner-content mil-up">
          <div className="mil-animation-frame">
            <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="6" data-value-2="1.4"></div>
          </div>
          <div className="container">
            <ul className="mil-breadcrumbs mil-mb-60">
              <li><Link href="/">Homepage</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
            </ul>
            <h1 className="mil-mb-60">Designing a <br /> Better <span className="mil-thin">World Today</span></h1>
            <a href="#portfolio" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
              <span>Our works</span>
            </a>
          </div>
        </div>
      </div>

      {/* Portfolio grid */}
      <section id="portfolio">
        <div className="container mil-portfolio mil-p-120-60">
          <div className="mil-lines-place"></div>
          <div className="mil-lines-place mil-lines-long"></div>
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <a href="/project-1" className="mil-portfolio-item mil-more mil-mb-60">
                <div className="mil-cover-frame mil-vert mil-up mil-drag">
                  <div className="mil-cover">
                    <Image src="/img/works/1.jpg" alt="cover" width={600} height={400} />
                  </div>
                </div>
                <div className="mil-descr">
                  <div className="mil-labels mil-up mil-mb-15">
                    <div className="mil-label mil-upper mil-accent">Branding</div>
                    <div className="mil-label mil-upper">may 24 2023</div>
                  </div>
                  <h4 className="mil-up">Interior design studio</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-6">
              <a href="/project-2" className="mil-portfolio-item mil-more mil-parallax mil-mb-60" data-value-1="60" data-value-2="-60">
                <div className="mil-cover-frame mil-hori mil-up mil-drag">
                  <div className="mil-cover">
                    <Image src="/img/works/2.jpg" alt="cover" width={600} height={400} />
                  </div>
                </div>
                <div className="mil-descr">
                  <div className="mil-labels mil-up mil-mb-15">
                    <div className="mil-label mil-upper mil-accent">Design</div>
                    <div className="mil-label mil-upper">may 24 2023</div>
                  </div>
                  <h4 className="mil-up">Home Security Camera</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-6">
              <a href="/project-3" className="mil-portfolio-item mil-more mil-parallax mil-mb-60" data-value-1="60" data-value-2="-60">
                <div className="mil-cover-frame mil-hori mil-up mil-drag">
                  <div className="mil-cover">
                    <Image src="/img/works/3.jpg" alt="cover" width={600} height={400} />
                  </div>
                </div>
                <div className="mil-descr">
                  <div className="mil-labels mil-up mil-mb-15">
                    <div className="mil-label mil-upper mil-accent">Design</div>
                    <div className="mil-label mil-upper">may 24 2023</div>
                  </div>
                  <h4 className="mil-up">Kemia Honest Skincare</h4>
                </div>
              </a>
            </div>
            {/* ...Thêm các item khác tương tự... */}
          </div>
        </div>
      </section>
    </>
  );
}