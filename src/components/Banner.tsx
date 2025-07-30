export default function Banner() {
  return (
    <section className="mil-banner mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="mil-animation-frame">
          <div className="mil-animation mil-position-1 mil-scale" data-value-1="7" data-value-2="1.6"></div>
          <div className="mil-animation mil-position-2 mil-scale" data-value-1="4" data-value-2="1"></div>
          <div className="mil-animation mil-position-3 mil-scale" data-value-1="1.2" data-value-2=".1"></div>
        </div>
        <div className="mil-gradient"></div>
        <div className="container">
          <div className="mil-banner-content mil-up">
            <h1 className="mil-muted mil-mb-60"><span className="mil-thin">Giải pháp</span> Marketing <span className="mil-thin">&</span><br /> Tăng trưởng <span className="mil-thin">F&B</span></h1>
            <div className="row">
              <div className="col-md-7 col-lg-5">
                <p className="mil-light-soft mil-mb-60">ViZ Solutions là công ty chuyên về Marketing & Technology, nơi kết nối giữa cảm xúc và dữ liệu, giữa cảm xúc và công nghệ.<br />
                Chúng tôi đảm bảo sự độc đáo và hiệu quả trong mọi dự án, giúp doanh nghiệp đạt được thành công lớn hơn.</p>
              </div>
            </div>
            <a href="/services" className="mil-button mil-arrow-place mil-btn-space mil-accent-cursor">
              <span>Chúng tôi đã làm gì?</span>
            </a>
            <a href="/portfolio" className="mil-link mil-muted mil-arrow-place mil-accent-cursor">
              <span>Xem dự án đã thực hiện</span>
            </a>
            <div className="mil-circle-text">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve" className="mil-ct-svg mil-rotate" data-value="360">
                <defs>
                  <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                </defs>
                <circle cx="150" cy="100" r="75" fill="none" />
                <g>
                  <use xlinkHref="#circlePath" fill="none" />
                  <text style={{ letterSpacing: '6.5px' }}>
                    <textPath xlinkHref="#circlePath">Scroll down - Scroll down - </textPath>
                  </text>
                </g>
              </svg>
              <a href="#about" className="mil-button mil-arrow-place mil-icon-button mil-arrow-down"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}