
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import HomeCarousel from "@/components/HomeCarousel";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-skyblue-light/20 to-white dark:from-skyblue-dark/10 dark:to-gray-900 pt-16"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-primary dark:text-white mb-6 animate-float">
              {t("hero", "title")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              {t("hero", "subtitle")}
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary dark:bg-skyblue-dark text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200"
            >
              {t("hero", "cta")}
            </a>
          </div>
          <HomeCarousel />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary dark:text-white text-center mb-12">
            {t("about", "title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300">
                {t("about", "description1")}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {t("about", "description2")}
              </p>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Hydraulic System"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary dark:text-white">
                {t("about", "keyApplications")}
              </h3>
              <ul className="space-y-3">
                {t("about", "applications").map((application, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    • {application}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary dark:text-white text-center mb-12">
            {t("services", "title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t("services", "items").map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <img
                  src={[
                    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
                    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
                    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
                  ][index]}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary dark:text-white text-center mb-12">
            {t("contact", "title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Phone className="text-primary dark:text-white" size={24} />
                <span className="text-gray-600 dark:text-gray-300">+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-primary dark:text-white" size={24} />
                <span className="text-gray-600 dark:text-gray-300">contact@ebhydraulics.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-primary dark:text-white" size={24} />
                <span className="text-gray-600 dark:text-gray-300">
                  123 Industrial Park, Business City
                </span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-primary dark:text-white hover:text-opacity-80 transition-colors duration-200"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-primary dark:text-white hover:text-opacity-80 transition-colors duration-200"
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
      <footer className="bg-primary dark:bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 EBH Hydraulics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
