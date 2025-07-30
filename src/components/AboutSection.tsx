'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about">
      <div className="container mil-p-120-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-xl-5">
            <div className="mil-mb-90">
              <h2 className="mil-up mil-mb-60">Khám phá <br /> <span className="mil-thin">ViZ-Solutions</span></h2>
              <p className="mil-up mil-mb-30">ViZ Solutions là agency truyền thông chuyên biệt cho ngành F&B – nơi sáng tạo gặp công nghệ, nơi thương hiệu ẩm thực được kể bằng ngôn ngữ của cảm xúc</p>
              <p className="mil-up mil-mb-30">Chúng tôi không chỉ tạo ra chiến dịch đẹp mắt, mà còn đảm bảo mỗi nội dung đều chạm đúng vị khách hàng. Từ chiến lược thương hiệu, concept truyền thông cho đến hình ảnh, video, và digital performance – mọi thứ đều được cá nhân hóa để phù hợp với DNA riêng của từng thương hiệu.</p>
              <p className="mil-up mil-mb-30">Với đội ngũ trẻ, bắt trend nhanh, tư duy đột phá và hiểu rõ thị trường F&B Việt Nam, ViZ là đối tác đáng tin cậy để biến mọi ý tưởng táo bạo thành hiện thực.</p>
              <p className="mil-up mil-mb-60">Khám phá ViZ – Khơi nguồn cảm hứng, bứt phá giới hạn, tạo dấu ấn riêng cho thương hiệu F&B của bạn.</p>
              {/* <div className="mil-about-quote">
                <div className="mil-avatar mil-up">
                  <Image src="/img/faces/customers/2.jpg" alt="Founder" width={60} height={60} />
                </div>
                <h6 className="mil-quote mil-up">Passionately Creating <span className="mil-thin">Design Wonders:</span> Unleashing <span className="mil-thin">Boundless Creativity</span></h6>
              </div> */}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="mil-about-photo mil-mb-90">
              <div className="mil-lines-place"></div>
                                              <div className="mil-up mil-img-frame mil-drag" style={{ paddingBottom: '160%' }}>
                                    <Image src="/img/photo/1.jpg" alt="img" width={600} height={960} className="mil-scale" data-value-1="1" data-value-2="1.2" />
                                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 