import Image from 'next/image';

export default function TeamSection() {
  return (
    <section>
      <div className="container mil-p-120-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 col-xl-4">
            <div className="mil-mb-90">
              <h2 className="mil-up mil-mb-60">Đội ngũ <br />Phát triển</h2>
              <p className="mil-up mil-mb-30">Chúng tôi là team “nghiện deadline nhưng vẫn chill”, sống vì concept đẹp và không ngủ vì ý tưởng hay.
              Designer mê chụp đồ ăn hơn selfie, content creator nghĩ tagline ngay cả khi đang order trà sữa, và planner có khả năng biến mọi insight thành chiến dịch triệu views.</p>
              <p className="mil-up mil-mb-60">Không ngồi văn phòng để “cho có”, chúng tôi sống cùng từng brand như một phần của nó – đôi khi còn lo cho brand nhiều hơn người yêu cũ của bạn!

</p>
                                                  <div className="mil-up"><a href="/team" className="mil-button mil-arrow-place mil-mb-60 mil-accent-cursor"><span>Xem thêm</span></a></div>
              <h4 className="mil-up"><span className="mil-thin">Chúng tôi</span> phát triển <br /><span className="mil-thin">thương hiệu</span> F&B.</h4>
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