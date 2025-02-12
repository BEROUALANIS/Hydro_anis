
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.7) {
          section.classList.add("animate-fadeIn");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-white to-gray-100 pt-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-float">
            EBH Hydraulics
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Innovative hydraulic solutions for modern engineering challenges
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            About Hydraulics
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600">
                Hydraulics is the science of fluid mechanics that deals with the
                mechanical properties of fluids, particularly the flow of water in
                pipes, rivers, and channels.
              </p>
              <p className="text-gray-600">
                At EBH Hydraulics, we specialize in designing and implementing
                cutting-edge hydraulic systems that power modern machinery and
                equipment across various industries.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Applications</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  • Construction Equipment
                </li>
                <li className="flex items-center text-gray-600">
                  • Manufacturing Systems
                </li>
                <li className="flex items-center text-gray-600">
                  • Agricultural Machinery
                </li>
                <li className="flex items-center text-gray-600">
                  • Marine Applications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "System Design",
                description:
                  "Custom hydraulic system design tailored to your specific needs",
              },
              {
                title: "Maintenance",
                description:
                  "Regular maintenance and repair services for hydraulic systems",
              },
              {
                title: "Consultation",
                description:
                  "Expert consultation for optimizing hydraulic system performance",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Phone className="text-primary" size={24} />
                <span className="text-gray-600">+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-primary" size={24} />
                <span className="text-gray-600">contact@ebhydraulics.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-primary" size={24} />
                <span className="text-gray-600">
                  123 Industrial Park, Business City
                </span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-primary hover:text-opacity-80 transition-colors duration-200"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-opacity-80 transition-colors duration-200"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 EBH Hydraulics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
