'use client';

import Image from 'next/image';

export default function ServicesSection() {
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
                <span className="mil-suptitle mil-light-soft mil-suptitle-right mil-up">Đội ngũ marketing chuyên nghiệt giúp doanh nghiệp của bạn<br /> phát triển và tiến tới thành công.</span>
              </div>
            </div>
            <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
              <span className="mil-text-image"><Image src="/img/photo/2.jpg" alt="team" width={400} height={300} /></span>
              <h2 className="mil-h1 mil-muted mil-center"><span className="mil-thin">Ý tưởng</span> Khác biệt </h2>
            </div>
            <div className="mil-complex-text justify-content-center mil-up">
              <h2 className="mil-h1 mil-muted mil-center"><span className="mil-thin">Dành cho</span> F&B </h2>
                                          <a href="/services" className="mil-services-button mil-button mil-arrow-place mil-accent-cursor"><span>Làm như thế nào?</span></a>
            </div>
          </div>
          <div className="row mil-services-grid m-0">
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <a href="/service" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">Xây dựng & <br />Định vị Thương hiệu F&B</h5>
                <p className="mil-light-soft mil-mb-30">Từ đặt tên, thiết kế nhận diện đến xây dựng concept thương hiệu – ViZ giúp bạn tạo nên một “bản sắc” rõ nét và khác biệt giữa thị trường đầy cạnh tranh.</p>
                <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <a href="/service" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">Sáng tạo Nội dung <br />& Kể chuyện thương hiệu</h5>
                <p className="mil-light-soft mil-mb-30">húng tôi tạo ra những câu chuyện truyền cảm hứng thông qua hình ảnh, video, thiết kế và ngôn từ – tất cả được cá nhân hóa theo từng thương hiệu và đối tượng khách hàng mục tiêu.</p>
                <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <a href="/service" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">Chiến lược <br />Truyền thông Đa kênh</h5>
                <p className="mil-light-soft mil-mb-30">ViZ thiết kế chiến dịch truyền thông phủ sóng đa nền tảng (Facebook, Instagram, TikTok, v.v), đảm bảo mỗi thông điệp đều chạm đúng người, đúng lúc, đúng cách.</p>
                <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <a href="/service" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">Tối ưu Hiệu suất số <br />(Digital Performance)</h5>
                <p className="mil-light-soft mil-mb-30">Không chỉ sáng tạo, chúng tôi còn theo dõi – đo lường – tối ưu hiệu quả chiến dịch bằng dữ liệu thực tế, đảm bảo hiệu suất và ROI cho từng đồng ngân sách.</p>
                <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 