import Image from 'next/image';

export default function ServicesContent() {
  return (
    <section className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="mil-animation-frame">
          <div className="mil-animation mil-position-1 mil-scale" data-value-1="2.4" data-value-2="1.4" style={{ top: '300px', right: '-100px' }}></div>
          <div className="mil-animation mil-position-2 mil-scale" data-value-1="2" data-value-2="1" style={{ left: '150px' }}></div>
        </div>
        <div className="container mil-p-120-0">
          <div className="mil-mb-120">
            <div className="row">
              <div className="col-lg-10">
                <span className="mil-suptitle mil-light-soft mil-suptitle-right mil-up">
                  Đội ngũ marketing chuyên nghiệt giúp doanh nghiệp của bạn<br /> phát triển và tiến tới thành công.
                </span>
              </div>
            </div>
            <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
              <span className="mil-text-image"><Image src="/img/photo/2.jpg" alt="team" width={200} height={150} /></span>
              <h2 className="mil-h1 mil-muted mil-center">Khác biệt <span className="mil-thin">Ý Tưởng</span></h2>
            </div>
            <div className="mil-complex-text justify-content-center mil-up">
              <h2 className="mil-h1 mil-muted mil-center">Cho bạn <span className="mil-thin">Doanh nghiệp.</span></h2>
              <a href="/services" className="mil-services-button mil-button mil-arrow-place"><span>What we do</span></a>
            </div>
          </div>
          <div className="row mil-services-grid m-0">
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <a href="/service" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">Branding and <br />Identity Design</h5>
                <p className="mil-light-soft mil-mb-30">Our creative agency is a team of professionals focused on helping your brand grow.</p>
                <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <a href="/service" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">Website Design <br />and Development</h5>
                <p className="mil-light-soft mil-mb-30">Our creative agency is a team of professionals focused on helping your brand grow.</p>
                <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <a href="/service" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">Advertising and <br />Marketing Campaigns</h5>
                <p className="mil-light-soft mil-mb-30">Our creative agency is a team of professionals focused on helping your brand grow.</p>
                <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <a href="/service" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">Creative Consulting <br />and Development</h5>
                <p className="mil-light-soft mil-mb-30">Our creative agency is a team of professionals focused on helping your brand grow.</p>
                <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}