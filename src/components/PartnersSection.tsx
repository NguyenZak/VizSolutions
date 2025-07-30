import Image from 'next/image';

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
    }
  ];

  return (
    <section className="mil-partners-section mil-soft-bg">
      <div className="container mil-p-120-90">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="mil-text-center mil-mb-90">
              <h2 className="mil-h2 mil-mb-30">Đối Tác Của Chúng Tôi</h2>
              <p className="mil-light-soft mil-up">
                Chúng tôi tự hào được hợp tác với những đối tác uy tín trong ngành
              </p>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="mil-partners-grid">
              {partners.map((partner) => (
                <div key={partner.id} className="mil-partner-item">
                  <div className="mil-partner-logo">
                    <Image
                      src={partner.logo}
                      alt={partner.alt}
                      width={120}
                      height={120}
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
    </section>
  );
} 