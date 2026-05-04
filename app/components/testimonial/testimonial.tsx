'use client';
import './testimonial.css';

export default function Testimonials() {
  const testimonialsRow1 = [
    {
      id: 1,
      name: 'Tunde Olatunji',
      role: 'CEO, TechStart',
      avatar: 'https://i.pravatar.cc/150?img=12',
      text: 'Managing payments has always been a hassle until I came across TechSolutions. The dashboard is user-friendly, and I find it easy to track all my payments now.'
    },
    {
      id: 2,
      name: 'Bola Adegoke',
      role: 'Founder, RetailHub',
      avatar: 'https://i.pravatar.cc/150?img=45',
      text: 'TechSolutions has simplified my business process tremendously. Clients appreciate the easy payment options, and I love the quick access to funds. It\'s been a fantastic experience!'
    },
    {
      id: 3,
      name: 'Chigozie Nwankwo',
      role: 'Director, AgriTech',
      avatar: 'https://i.pravatar.cc/150?img=33',
      text: 'I was struggling with managing our IT infrastructure until I found TechSolutions. Their cloud solutions offer gave me peace of mind and helped us focus on growing my online business.'
    },
    {
      id: 4,
      name: 'Amara Okafor',
      role: 'CTO, FinanceHub',
      avatar: 'https://i.pravatar.cc/150?img=28',
      text: 'The transactions are smoother than I expected. Our team has been helpful to add all features we needed. We also share payment links to our clients seamlessly.'
    }
  ];

  const testimonialsRow2 = [
    {
      id: 5,
      name: 'Damilola Johnson',
      role: 'Product Manager, StartupCo',
      avatar: 'https://i.pravatar.cc/150?img=47',
      text: 'Integrating TechSolutions API into our app was a breeze. The API is intuitive, and their support team guided us every step of the way. Our users love the speed and security, making it a win-win for us!'
    },
    {
      id: 6,
      name: 'Kelechi Nnaji',
      role: 'Owner, BoutiqueShop',
      avatar: 'https://i.pravatar.cc/150?img=58',
      text: 'Switching to TechSolutions has been a game-changer for my boutique. The integration was seamless, and my customers love the fast, secure checkout. I\'ve seen a noticeable increase in sales!'
    },
    {
      id: 7,
      name: 'Chinonso Uche',
      role: 'Operations Lead, LogiTech',
      avatar: 'https://i.pravatar.cc/150?img=69',
      text: 'TechSolutions has elevated our business operations with its innovative features. Flexibility and reliability have significantly enhanced our service offerings, allowing us to better serve our clients!'
    },
    {
      id: 8,
      name: 'Ngozi Mbah',
      role: 'Entrepreneur, EduTech',
      avatar: 'https://i.pravatar.cc/150?img=25',
      text: 'The level of professionalism and technical expertise is outstanding. They delivered our project on time and exceeded our expectations. Highly recommend their services!'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Section Header */}
        <div className="testimonials-header">
          <span className="section-label">TESTIMONIALS</span>
          <h2 className="testimonials-title">
            What Our Clients Say About Us
          </h2>
          <p className="testimonials-subtitle">
            Don't just take our word for it. Hear from businesses we've helped transform.
          </p>
        </div>

        {/* Scrolling Rows */}
        <div className="testimonials-scroll-wrapper">
          {/* Row 1 - Scroll Left to Right */}
          <div className="testimonials-row">
            <div className="testimonials-track scroll-left">
              {/* Original cards */}
              {testimonialsRow1.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-header">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="testimonial-avatar"
                    />
                    <div className="testimonial-info">
                      <h4 className="testimonial-name">{testimonial.name}</h4>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
              ))}
              {/* Duplicate cards for seamless loop */}
              {testimonialsRow1.map((testimonial) => (
                <div key={`${testimonial.id}-duplicate`} className="testimonial-card">
                  <div className="testimonial-header">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="testimonial-avatar"
                    />
                    <div className="testimonial-info">
                      <h4 className="testimonial-name">{testimonial.name}</h4>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scroll Right to Left */}
          <div className="testimonials-row">
            <div className="testimonials-track scroll-right">
              {/* Original cards */}
              {testimonialsRow2.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-header">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="testimonial-avatar"
                    />
                    <div className="testimonial-info">
                      <h4 className="testimonial-name">{testimonial.name}</h4>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
              ))}
              {/* Duplicate cards for seamless loop */}
              {testimonialsRow2.map((testimonial) => (
                <div key={`${testimonial.id}-duplicate`} className="testimonial-card">
                  <div className="testimonial-header">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="testimonial-avatar"
                    />
                    <div className="testimonial-info">
                      <h4 className="testimonial-name">{testimonial.name}</h4>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}