'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Cursor from '@/components/Cursor';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Frame from '@/components/Frame';
import Footer from '@/components/Footer';
import HiddenElements from '@/components/HiddenElements';

export default function TeamPage() {
  useEffect(() => {
    // Load scripts in order with proper waiting
    const loadScripts = async () => {
      const loadScript = (src: string): Promise<void> => {
        return new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = src;
          script.onload = () => resolve();
          script.onerror = () => reject();
          document.head.appendChild(script);
        });
      };

      try {
        // Load scripts in order
        await loadScript('/js/plugins/jquery.min.js');
        await loadScript('/js/plugins/gsap.min.js');
        await loadScript('/js/plugins/ScrollTrigger.min.js');
        await loadScript('/js/plugins/ScrollTo.min.js');
        await loadScript('/js/plugins/swup.min.js');
        await loadScript('/js/plugins/swiper.min.js');
        await loadScript('/js/plugins/fancybox.min.js');
        await loadScript('/js/plugins/smooth-scroll.js');
        await loadScript('/js/main.js');
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadScripts();
  }, []);

  return (
    <div className="mil-wrapper" id="top">
      <Cursor />
      <Preloader />
      <Header />
      <Frame />
      <div className="mil-content">
        <div id="swupMain" className="mil-main-transition">
          {/* Banner nhỏ cho team */}
          <div className="mil-inner-banner">
            <div className="mil-banner-content mil-up">
              <div className="mil-animation-frame">
                <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="6" data-value-2="1.4"></div>
              </div>
              <div className="container">
                <ul className="mil-breadcrumbs mil-mb-60">
                  <li><Link href="/">Homepage</Link></li>
                  <li><Link href="/team">Team</Link></li>
                </ul>
                <h1 className="mil-mb-60">Meet <span className="mil-thin">Our</span><br /> Creative <span className="mil-thin">Team</span></h1>
                <a href="#team" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
                  <span>Our team</span>
                </a>
              </div>
            </div>
          </div>

          {/* Team section */}
          <section id="team">
            <div className="container mil-p-120-90">
              <div className="row">
                {/* 8 thành viên team, copy nguyên cấu trúc từ team.html */}
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="mil-team-card mil-up mil-mb-30">
                    <img src="/img/faces/1.jpg" alt="Team member" />
                    <div className="mil-description">
                      <div className="mil-secrc-text">
                        <h5 className="mil-muted mil-mb-5"><Link href="/">Anna Oldman</Link></h5>
                        <p className="mil-link mil-light-soft mil-mb-10">Art Director</p>
                        <ul className="mil-social-icons mil-center">
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-behance"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-dribbble"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-twitter"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-github"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="mil-team-card mil-up mil-mb-30">
                    <img src="/img/faces/3.jpg" alt="Team member" />
                    <div className="mil-description">
                      <div className="mil-secrc-text">
                        <h5 className="mil-muted mil-mb-5"><Link href="/">Oscar Freeman</Link></h5>
                        <p className="mil-link mil-light-soft mil-mb-10">Frontend Dev</p>
                        <ul className="mil-social-icons mil-center">
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-behance"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-dribbble"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-twitter"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-github"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="mil-team-card mil-up mil-mb-30">
                    <img src="/img/faces/2.jpg" alt="Team member" />
                    <div className="mil-description">
                      <div className="mil-secrc-text">
                        <h5 className="mil-muted mil-mb-5"><Link href="/">Emma Newman</Link></h5>
                        <p className="mil-link mil-light-soft mil-mb-10">Founder</p>
                        <ul className="mil-social-icons mil-center">
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-behance"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-dribbble"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-twitter"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-github"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="mil-team-card mil-up mil-mb-30">
                    <img src="/img/faces/4.jpg" alt="Team member" />
                    <div className="mil-description">
                      <div className="mil-secrc-text">
                        <h5 className="mil-muted mil-mb-5"><Link href="/">Lisa Trueman</Link></h5>
                        <p className="mil-link mil-light-soft mil-mb-10">UI/UX Designer</p>
                        <ul className="mil-social-icons mil-center">
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-behance"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-dribbble"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-twitter"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-github"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="mil-team-card mil-up mil-mb-30">
                    <img src="/img/faces/5.jpg" alt="Team member" />
                    <div className="mil-description">
                      <div className="mil-secrc-text">
                        <h5 className="mil-muted mil-mb-5"><Link href="/">Tom Oldman</Link></h5>
                        <p className="mil-link mil-light-soft mil-mb-10">Art Director</p>
                        <ul className="mil-social-icons mil-center">
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-behance"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-dribbble"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-twitter"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-github"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="mil-team-card mil-up mil-mb-30">
                    <img src="/img/faces/6.jpg" alt="Team member" />
                    <div className="mil-description">
                      <div className="mil-secrc-text">
                        <h5 className="mil-muted mil-mb-5"><Link href="/">Corey Trueman</Link></h5>
                        <p className="mil-link mil-light-soft mil-mb-10">Art Director</p>
                        <ul className="mil-social-icons mil-center">
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-behance"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-dribbble"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-twitter"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-github"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="mil-team-card mil-up mil-mb-30">
                    <img src="/img/faces/7.jpg" alt="Team member" />
                    <div className="mil-description">
                      <div className="mil-secrc-text">
                        <h5 className="mil-muted mil-mb-5"><Link href="/">Justin Newman</Link></h5>
                        <p className="mil-link mil-light-soft mil-mb-10">Art Director</p>
                        <ul className="mil-social-icons mil-center">
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-behance"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-dribbble"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-twitter"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"> <i className="fab fa-github"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="mil-team-card mil-up mil-mb-30">
                    <img src="/img/faces/8.jpg" alt="Team member" />
                    <div className="mil-description">
                      <div className="mil-secrc-text">
                        <h5 className="mil-muted mil-mb-5"><Link href="/">Spunkie</Link></h5>
                        <p className="mil-link mil-light-soft mil-mb-10">Paw giver</p>
                        <ul className="mil-social-icons mil-center">
                          <li><a href="#." target="_blank" className="social-icon"><i className="fab fa-instagram"></i></a></li>
                          <li><a href="#." target="_blank" className="social-icon"><i className="fab fa-tiktok"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to action section */}
          <section className="mil-soft-bg">
            <div className="container mil-p-120-120">
              <div className="row">
                <div className="col-lg-10">
                  <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">Looking to make your mark? We&apos;ll help you turn <br /> your project into a success story.</span>
                </div>
              </div>
              <div className="mil-center">
                <h2 className="mil-up mil-mb-60">Ready to bring your <span className="mil-thin">ideas to</span> life? <br /> We&apos;re <span className="mil-thin">here to help</span></h2>
                <div className="mil-up"><a href="/contact" className="mil-button mil-arrow-place mil-accent-cursor"><span>Contact us</span></a></div>
              </div>
            </div>
          </section>

          <Footer />
          <HiddenElements />
        </div>
      </div>
    </div>
  );
}