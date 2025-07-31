import Image from 'next/image';
import Link from 'next/link';

export default function PartnersSection() {
  const partners = [
    {
      id: 1,
      name: "Partner 1",
      logo: "/img/partners/1.svg",
      alt: "Đối tác 1"
    },
    {
      id: 2,
      name: "Partner 2", 
      logo: "/img/partners/2.svg",
      alt: "Đối tác 2"
    },
    {
      id: 3,
      name: "Partner 3",
      logo: "/img/partners/3.svg", 
      alt: "Đối tác 3"
    },
    {
      id: 4,
      name: "Partner 4",
      logo: "/img/partners/4.svg",
      alt: "Đối tác 4"
    },
    {
      id: 5,
      name: "Partner 5",
      logo: "/img/partners/5.svg",
      alt: "Đối tác 5"
    },
    {
      id: 6,
      name: "Partner 6",
      logo: "/img/partners/6.svg",
      alt: "Đối tác 6"
    },
    {
      id: 7,
      name: "Partner 7",
      logo: "/img/partners/7.svg",
      alt: "Đối tác 7"
    },
    {
      id: 8,
      name: "Partner 8",
      logo: "/img/partners/8.svg",
      alt: "Đối tác 8"
    },
    {
      id: 9,
      name: "Partner 9",
      logo: "/img/partners/9.svg",
      alt: "Đối tác 9"
    },
    {
      id: 10,
      name: "Partner 10",
      logo: "/img/partners/10.svg",
      alt: "Đối tác 10"
    },
    {
      id: 11,
      name: "Partner 11",
      logo: "/img/partners/11.svg",
      alt: "Đối tác 11"
    },
    {
      id: 12,
      name: "Partner 12",
      logo: "/img/partners/12.svg",
      alt: "Đối tác 12"
    },
    {
      id: 13,
      name: "Partner 13",
      logo: "/img/partners/13.svg",
      alt: "Đối tác 13"
    },
    {
      id: 14,
      name: "Partner 14",
      logo: "/img/partners/14.svg",
      alt: "Đối tác 14"
    },
    {
      id: 15,
      name: "Partner 15",
      logo: "/img/partners/15.svg",
      alt: "Đối tác 15"
    },
    {
      id: 16,
      name: "Partner 16",
      logo: "/img/partners/16.svg",
      alt: "Đối tác 16"
    },
    {
      id: 17,
      name: "Partner 17",
      logo: "/img/partners/17.svg",
      alt: "Đối tác 17"
    },
    {
      id: 18,
      name: "Partner 18",
      logo: "/img/partners/18.svg",
      alt: "Đối tác 18"
    },
    {
      id: 19,
      name: "Partner 19",
      logo: "/img/partners/19.svg",
      alt: "Đối tác 19"
    },
    {
      id: 20,
      name: "Partner 20",
      logo: "/img/partners/20.svg",
      alt: "Đối tác 20"
    },
    {
      id: 21,
      name: "Partner 21",
      logo: "/img/partners/21.svg",
      alt: "Đối tác 21"
    },
    {
      id: 22,
      name: "Partner 22",
      logo: "/img/partners/22.svg",
      alt: "Đối tác 22"
    },
    {
      id: 23,
      name: "Partner 23",
      logo: "/img/partners/23.svg",
      alt: "Đối tác 23"
    },
    {
      id: 24,
      name: "Partner 24",
      logo: "/img/partners/24.svg",
      alt: "Đối tác 24"
    },
    {
      id: 25,
      name: "Partner 25",
      logo: "/img/partners/25.svg",
      alt: "Đối tác 25"
    },
    {
      id: 26,
      name: "Partner 26",
      logo: "/img/partners/26.svg",
      alt: "Đối tác 26"
    },
    {
      id: 27,
      name: "Partner 27",
      logo: "/img/partners/27.svg",
      alt: "Đối tác 27"
    },
    {
      id: 28,
      name: "Partner 28",
      logo: "/img/partners/28.svg",
      alt: "Đối tác 28"
    },
    {
      id: 29,
      name: "Partner 29",
      logo: "/img/partners/29.svg",
      alt: "Đối tác 29"
    },
    {
      id: 30,
      name: "Partner 30",
      logo: "/img/partners/30.svg",
      alt: "Đối tác 30"
    },
    {
      id: 31,
      name: "Partner 31",
      logo: "/img/partners/31.svg",
      alt: "Đối tác 31"
    },
    {
      id: 32,
      name: "Partner 32",
      logo: "/img/partners/32.svg",
      alt: "Đối tác 32"
    },
    {
      id: 33,
      name: "Partner 33",
      logo: "/img/partners/33.svg",
      alt: "Đối tác 33"
    },
    {
      id: 34,
      name: "Partner 34",
      logo: "/img/partners/34.svg",
      alt: "Đối tác 34"
    },
    {
      id: 35,
      name: "Partner 35",
      logo: "/img/partners/35.svg",
      alt: "Đối tác 35"
    },
    {
      id: 36,
      name: "Partner 36",
      logo: "/img/partners/36.svg",
      alt: "Đối tác 36"
    },
    {
      id: 37,
      name: "Partner 37",
      logo: "/img/partners/37.svg",
      alt: "Đối tác 37"
    },
    {
      id: 38,
      name: "Partner 38",
      logo: "/img/partners/38.svg",
      alt: "Đối tác 38"
    },
    {
      id: 39,
      name: "Partner 39",
      logo: "/img/partners/39.svg",
      alt: "Đối tác 39"
    },
    {
      id: 40,
      name: "Partner 40",
      logo: "/img/partners/40.svg",
      alt: "Đối tác 40"
    },
    {
      id: 41,
      name: "Partner 41",
      logo: "/img/partners/41.svg",
      alt: "Đối tác 41"
    },
    {
      id: 42,
      name: "Partner 42",
      logo: "/img/partners/42.svg",
      alt: "Đối tác 42"
    },

  ];

  return (
    <section id="partners" className="mil-soft-bg">
      <div className="container mil-p-120-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-xl-5">
            <div className="mil-mb-90">
              <h2 className="mil-up mil-mb-60">Đối Tác <br /> <span className="mil-thin">Của ViZ-Solutions</span></h2>
              <p className="mil-up mil-mb-30">Chúng tôi tự hào được hợp tác với những đối tác uy tín trong ngành F&B, những thương hiệu đã tin tưởng và đồng hành cùng chúng tôi trong hành trình sáng tạo.</p>
              <p className="mil-up mil-mb-30">Với mạng lưới đối tác đa dạng từ chuỗi nhà hàng, quán cà phê, đến các thương hiệu đồ uống, chúng tôi hiểu rõ nhu cầu và thách thức của từng phân khúc thị trường.</p>
              <p className="mil-up mil-mb-60">Mỗi đối tác đều mang đến cho chúng tôi cơ hội học hỏi, phát triển và tạo ra những giải pháp truyền thông hiệu quả, phù hợp với đặc thù riêng của từng thương hiệu.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mil-partners-photo mil-mb-90">
                <div className="mil-partners-grid">
                  {partners.map((partner) => (
                    <div key={partner.id} className="mil-partner-item">
                      <div className="mil-partner-logo">
                        <Image
                          src={partner.logo}
                          alt={partner.alt}
                          width={75}
                          height={75}
                          style={{
                            maxWidth: '100%',
                            height: 'auto',
                            objectFit: 'contain'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
} 