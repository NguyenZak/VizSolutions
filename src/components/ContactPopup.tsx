'use client';

import { useState, useEffect } from 'react';

export default function ContactPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Hiển thị popup sau 3 giây khi trang load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý submit form ở đây
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Ẩn popup sau 2 giây
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close" onClick={handleClose}>
          <i className="fas fa-times"></i>
        </button>
        
        {!isSubmitted ? (
          <div className="popup-content">
            <div className="popup-header">
              <h3>Chào mừng bạn đến với <br /> ViZ Solutions!</h3>
              <p>Để nhận tư vấn miễn phí và báo giá chi tiết, vui lòng để lại thông tin của bạn</p>
            </div>
            
            <form onSubmit={handleSubmit} className="popup-form">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Tên của bạn"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Số điện thoại"
                />
              </div>
              
              <button type="submit" className="submit-btn">
                <i className="fas fa-paper-plane"></i>
                Gửi thông tin
              </button>
            </form>
          </div>
        ) : (
          <div className="popup-content">
            <div className="popup-success">
              <i className="fas fa-check-circle"></i>
              <h3>Cảm ơn bạn!</h3>
              <p>Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 