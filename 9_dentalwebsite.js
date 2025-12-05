import React from 'react'

// Navbar Component
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow fixed-top">
      <div style={{ maxWidth: "100%", margin: "0 auto", width: "100%", padding: "0 20px" }}>
        <a className="navbar-brand fw-bold fs-3" href="#">
          Dr. Ashish Dental Care
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section id="home" className="bg-light text-dark text-center py-5" style={{ paddingTop: "100px" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 20px" }}>
        <h1 className="display-4 fw-bold text-primary">Welcome to Dr. Ashish Dental Clinic</h1>
        <p className="lead fs-3">Your Smile, Our Passion</p>
        <img
          src="https://petpros.net/wp-content/uploads/2017/01/blog_0217_01.jpg"
          alt="Dental Clinic"
          className="img-fluid rounded shadow mt-4"
          style={{ maxHeight: "400px", display: "block", margin: "20px auto" }}
        />
        <br /><br />
        <a href="#contact" className="btn btn-primary btn-lg px-5">Book Appointment Now</a>
      </div>
    </section>
  );
}

// About Doctor Component
function AboutDoctor() {
  return (
    <section id="about" className="py-5 bg-white">
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 20px" }}>
        <h2 className="text-center text-primary mb-5">Meet Dr. Ashish Chudasama</h2>
        <div className="row align-items-center justify-content-center g-4">
          <div className="col-lg-5 col-md-6">
            <img
              src="https://www.lonetreevet.com/blog/wp-content/uploads/2018/01/LoneTree_iStock-648520656-1024x683.jpg"
              alt="Dr Ashish"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-5 col-md-6">
            <h5 className="text-success">BDS, MDS - Dental Surgeon (8+ Years Experience)</h5>
            <p className="fs-5 mt-4">
              Specialist in painless dental treatment with latest technology.
            </p>
            <ul className="list-unstyled fs-5 mt-4">
              <li>✓ Modern & Painless Treatment</li>
              <li>✓ Root Canal Expert</li>
              <li>✓ Braces & Aligners</li>
              <li>✓ Teeth Whitening</li>
              <li>✓ Dental Implants</li>
              <li>✓ 1000+ Happy Patients</li>
              <li>✓ Emergency Service Available</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Component
function Services() {
  const services = [
    {
      title: "Teeth Cleaning",
      description: "Professional cleaning & polishing for bright smile"
    },
    {
      title: "Root Canal Treatment",
      description: "Painless RCT with advanced rotary system"
    },
    {
      title: "Braces & Aligners",
      description: "Metal, Ceramic & Invisible Aligners available"
    },
    {
      title: "Teeth Whitening",
      description: "Advanced bleaching for sparkling white teeth"
    },
    {
      title: "Dental Implants",
      description: "Permanent solution for missing teeth"
    },
    {
      title: "Checkup & Consultation",
      description: "Free consultation and complete dental checkup"
    }
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 20px" }}>
        <h2 className="text-center text-primary mb-5 fw-bold">Our Services</h2>
        <div className="row g-4 justify-content-center">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="card h-100 shadow border-0">
                <div className="card-body text-center">
                  <h4 className="card-title text-success">{service.title}</h4>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact & Appointment Component
function ContactForm() {
  const appointmentServices = [
    "Teeth Cleaning",
    "Root Canal",
    "Braces",
    "Checkup",
    "Whitening",
    "Implants"
  ];

  return (
    <section id="contact" className="py-5 bg-primary text-white">
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 20px" }}>
        <h2 className="text-center mb-5">Book Your Appointment Today</h2>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="bg-white text-dark p-4 rounded-4 shadow">
              <div className="mb-3">
                <input type="text" className="form-control form-control-lg" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control form-control-lg" placeholder="Phone Number" />
              </div>
              <div className="mb-3">
                <select className="form-select form-select-lg">
                  <option>Select Service</option>
                  {appointmentServices.map((service, index) => (
                    <option key={index}>{service}</option>
                  ))}
                </select>
              </div>
              <button className="btn btn-success btn-lg w-100">
                Book Appointment
              </button>
            </div>

            <div className="text-center mt-4">
              <p className="fs-4 mb-1">Call / WhatsApp: <strong>+91 95740 50845</strong></p>
              <p>Address: Near Railway Station, Bhavnagar, Gujarat</p>
              <p>Timings: Mon-Sat | 10 AM - 1 PM & 5 PM - 9 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <p className="mb-0">© 2025 Dr. Ashish Dental Care | Made with ❤️ by Ashish Chudasama</p>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutDoctor />
      <Services />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;