import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      position: 'Creative Director',
      image: '/img/faces/1.jpg',
      bio: 'Passionate about creating innovative digital experiences.',
    },
    {
      name: 'Michael Chen',
      position: 'Lead Developer',
      image: '/img/faces/2.jpg',
      bio: 'Expert in modern web technologies and architecture.',
    },
    {
      name: 'Emily Rodriguez',
      position: 'UI/UX Designer',
      image: '/img/faces/3.jpg',
      bio: 'Creating beautiful and intuitive user interfaces.',
    },
    {
      name: 'David Kim',
      position: 'Project Manager',
      image: '/img/faces/4.jpg',
      bio: 'Ensuring projects are delivered on time and within budget.',
    },
  ];

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="mil-banner relative py-32 bg-gray-50">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="mil-suptitle text-lg font-medium text-gray-600 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Us
            </motion.p>
            <motion.h1
              className="mil-h1 mil-mb-30 text-6xl lg:text-7xl font-light leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our
              <br />
              <span className="mil-accent">Story</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mil-h2 mil-mb-30 text-5xl lg:text-6xl font-light leading-tight">
                We Create
                <br />
                <span className="mil-accent">Digital</span>
                <br />
                Experiences
              </h2>
              <p className="mil-text-lg mil-mb-30 text-xl text-gray-600 leading-relaxed">
                Founded in 2015, Ashley has been at the forefront of digital innovation, 
                helping businesses transform their digital presence and achieve remarkable 
                growth through creative solutions and cutting-edge technology.
              </p>
              <p className="mil-text-lg mil-mb-30 text-xl text-gray-600 leading-relaxed">
                Our team of passionate professionals combines creativity with technical 
                expertise to deliver exceptional results that exceed expectations. We 
                believe in the power of collaboration and innovation to solve complex 
                challenges and create meaningful impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/img/photo/2.jpg"
                alt="About Us"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mil-h2 mil-mb-30 text-5xl lg:text-6xl font-light leading-tight">
              Our
              <br />
              <span className="mil-accent">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We constantly push boundaries to create cutting-edge solutions.',
                icon: '🚀',
              },
              {
                title: 'Excellence',
                description: 'We strive for perfection in every project we undertake.',
                icon: '⭐',
              },
              {
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and client partnership.',
                icon: '🤝',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-8 bg-white rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="mil-h4 mil-bold text-2xl text-black mb-4">{value.title}</h3>
                <p className="mil-text-lg text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mil-h2 mil-mb-30 text-5xl lg:text-6xl font-light leading-tight">
              Meet Our
              <br />
              <span className="mil-accent">Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
                  />
                </div>
                <h3 className="mil-h4 mil-bold text-2xl text-black mb-2">{member.name}</h3>
                <p className="mil-text-lg text-gray-600 mb-4">{member.position}</p>
                <p className="mil-text-sm text-gray-500">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 