import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="container mil-p-120-60">
          <div className="row justify-content-between">
            <div className="col-md-4 col-lg-4 mil-mb-60">
              <div className="mil-muted mil-logo mil-up mil-mb-30">
                <Image 
                  src="/img/logo.svg" 
                  alt="Logo" 
                  width={350} 
                  height={100} 
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
              <p className="mil-light-soft mil-up mil-mb-30">Chúng tôi sẽ liên lạc lại sớm nhất có thể</p>
              <form className="mil-subscribe-form mil-up">
                <input type="text" placeholder="Nhập email của bạn" />
                <button type="submit" className="mil-button mil-icon-button-sm mil-arrow-place"></button>
              </form>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-end">
                <div className="col-md-6 col-lg-7">
                  <nav className="mil-footer-menu mil-mb-60">
                    <ul>
                      <li className="mil-up mil-active">
                        <Link href="/">Trang chủ</Link>
                      </li>
                      <li className="mil-up">
                        <Link href="/portfolio">Dự án đã thực hiện</Link>
                      </li>
                      <li className="mil-up">
                        <Link href="/services">Dịch vụ</Link>
                      </li>
                      <li className="mil-up">
                        <Link href="/contact">Liên hệ</Link>
                      </li>
                      <li className="mil-up">
                        <Link href="/blog">Bài viết</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-md-6 col-lg-5">
                  <ul className="mil-menu-list mil-up mil-mb-60">
                    <li><a href="#" className="mil-light-soft">Chính sách bảo mật</a></li>
                    <li><a href="#" className="mil-light-soft">Điều khoản và điều kiện</a></li>
                    <li><a href="#" className="mil-light-soft">Chính sách cookie</a></li>
                    <li><a href="#" className="mil-light-soft">Tuyển dụng</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between flex-sm-row-reverse">
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-between">
                <div className="col-md-6 col-lg-5 mil-mb-60">
                  <h6 className="mil-muted mil-up mil-mb-30">Hà Nội</h6>
                  <p className="mil-light-soft mil-up">47 Vũ Trọng Phụng - Phường Thanh Xuân - Hà Nội <span className="mil-no-wrap">0876698333</span></p>
                </div>
                <div className="col-md-6 col-lg-5 mil-mb-60">
                  <h6 className="mil-muted mil-up mil-mb-30">Thái Nguyên</h6>
                  <p className="mil-light-soft mil-up">Thành phố Thái Nguyên <span className="mil-no-wrap">0965009692</span></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-6 mil-mb-60">
              <div className="mil-vert-between">
                <div className="mil-mb-30">
                  <ul className="mil-social-icons mil-up">
                    <li><a href="#" target="_blank" className="social-icon"> <i className="fab fa-facebook"></i></a></li>
                    <li><a href="#" target="_blank" className="social-icon"> <i className="fab fa-instagram"></i></a></li>
                    <li><a href="#" target="_blank" className="social-icon"> <i className="fab fa-tiktok"></i></a></li>
                    <li><a href="#" target="_blank" className="social-icon"> <i className="fab fa-youtube"></i></a></li>
                  </ul>
                </div>
                <p className="mil-light-soft mil-up">© Copyright 2023 - Mil. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}