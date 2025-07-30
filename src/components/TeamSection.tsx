import Image from 'next/image';

export default function TeamSection() {
  return (
    <section>
      <div className="container mil-p-120-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 col-xl-4">
            <div className="mil-mb-90">
              <h2 className="mil-up mil-mb-60">Meet <br />Our Team</h2>
              <p className="mil-up mil-mb-30">We are talented individuals who are passionate about bringing ideas to life. With a diverse range of backgrounds and skill sets, we collaborate to produce effective solutions for our clients.</p>
              <p className="mil-up mil-mb-60">Together, our creative team is committed to delivering impactful work that exceeds expectations.</p>
                                                  <div className="mil-up"><a href="/team" className="mil-button mil-arrow-place mil-mb-60 mil-accent-cursor"><span>Read more</span></a></div>
              <h4 className="mil-up"><span className="mil-thin">We</span> delivering <br /><span className="mil-thin">exceptional</span> results.</h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mil-team-list">
              <div className="mil-lines-place"></div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mil-team-card mil-up">
                    <Image src="/img/faces/1.jpg" alt="team" width={300} height={400} />
                    <div className="mil-description">
                      <div className="mil-secrc-text">
                        <h5 className="mil-muted">
                          <a href="#" className="mil-light">Anna Oldman</a>
                        </h5>
                        <p className="mil-link">Art Director</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mil-team-card mil-up">
                    <Image src="/img/faces/2.jpg" alt="team" width={300} height={400} />
                    <div className="mil-description">
                      <div className="mil-secrc-text">
                        <h5 className="mil-muted">
                          <a href="#" className="mil-light">Emma Newman</a>
                        </h5>
                        <p className="mil-link">Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mil-team-card mil-up">
                    <Image src="/img/faces/3.jpg" alt="team" width={300} height={400} />
                    <div className="mil-description">
                      <div className="mil-secrc-text">
                        <h5 className="mil-muted">
                          <a href="#" className="mil-light">Oscar Freeman</a>
                        </h5>
                        <p className="mil-link">Frontend Dev</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mil-team-card mil-up">
                    <Image src="/img/faces/4.jpg" alt="team" width={300} height={400} />
                    <div className="mil-description">
                      <div className="mil-secrc-text">
                        <h5 className="mil-muted">
                          <a href="#" className="mil-light">Lisa Trueman</a>
                        </h5>
                        <p className="mil-link">UI/UX Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}