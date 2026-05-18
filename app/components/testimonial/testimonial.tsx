'use client';
import './testimonial.css';

export default function Testimonials() {
  const testimonialsRow1 = [
    {
      id: 1,
      name: 'David Mensah',
      role: 'Entreprenuer',
      avatar: '/testimonial.jpg',
      text: 'The Innovation Lab gave me my first real exposure to building digital products. I came in curious and left with practical skills, confidence, and a clearer career direction.'
    },
    {
      id: 2,
      name: 'Precious Adeyemi',
      role: 'Student, Digital Literacy Initiative',
      avatar: '/testimonial-1.jpg',
      text: 'I honestly didn’t know much about technology before joining the programme. The sessions were practical, engaging, and easy to follow. Now I feel more confident using digital tools.'
    },
    {
      id: 3,
      name: 'Michael Johnson',
      role: 'Participant, Founders Academy',
      avatar: '/testimonial-4.jpg',
      text: 'What stood out for me was how practical everything was. We didn’t just learn ideas, we worked on real solutions and got guidance from people already in the industry.'
    },
    {
      id: 4,
      name: 'Chioma Eze',
      role: 'Creative Entrepreneur',
      avatar: '/testimonial-3.jpg',
      text: 'The programme helped me see how technology can support and grow my business. I met amazing people, learned valuable skills, and gained the motivation to keep building.'
    }
  ];

  // const testimonialsRow2 = [
  //   {
  //     id: 5,
  //     name: 'Damilola Johnson',
  //     role: 'Product Manager, StartupCo',
  //     avatar: 'https://i.pravatar.cc/150?img=47',
  //     text: 'Integrating TechSolutions API into our app was a breeze. The API is intuitive, and their support team guided us every step of the way. Our users love the speed and security, making it a win-win for us!'
  //   },
  //   {
  //     id: 6,
  //     name: 'Kelechi Nnaji',
  //     role: 'Owner, BoutiqueShop',
  //     avatar: 'https://i.pravatar.cc/150?img=58',
  //     text: 'Switching to TechSolutions has been a game-changer for my boutique. The integration was seamless, and my customers love the fast, secure checkout. I\'ve seen a noticeable increase in sales!'
  //   },
  //   {
  //     id: 7,
  //     name: 'Chinonso Uche',
  //     role: 'Operations Lead, LogiTech',
  //     avatar: 'https://i.pravatar.cc/150?img=69',
  //     text: 'TechSolutions has elevated our business operations with its innovative features. Flexibility and reliability have significantly enhanced our service offerings, allowing us to better serve our clients!'
  //   },
  //   {
  //     id: 8,
  //     name: 'Ngozi Mbah',
  //     role: 'Entrepreneur, EduTech',
  //     avatar: 'https://i.pravatar.cc/150?img=25',
  //     text: 'The level of professionalism and technical expertise is outstanding. They delivered our project on time and exceeded our expectations. Highly recommend their services!'
  //   }
  // ];

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
          {/* <div className="testimonials-row">
            <div className="testimonials-track scroll-right">
              
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
          </div> */}
        </div>
      </div>
    </section>
  );
}