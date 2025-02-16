
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import HomeCarousel from "@/components/HomeCarousel";
import { Facebook, Instagram, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
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

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Direct access to typed arrays from translations
  const applications = t("about", "applications");
  const services = t("services", "items");
  const footerCompany = t("footer", "company");
  const footerSocial = t("footer", "social");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-skyblue-light/20 to-white dark:from-skyblue-dark/10 dark:to-gray-900 pt-16"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary dark:text-white mb-6 animate-float">
              {t("hero", "title")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              {t("hero", "subtitle")}
            </p>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="group inline-flex items-center gap-2 bg-primary dark:bg-skyblue-dark text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200"
            >
              {t("hero", "cta")}
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
          <HomeCarousel />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary dark:text-white text-center mb-12 animate-fade-in">
            {t("about", "title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <p className="text-gray-600 dark:text-gray-300">
                {t("about", "description1")}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {t("about", "description2")}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {t("about", "description3")}
              </p>
              <img
                src="https://th.bing.com/th/id/R.69ffaff4b531824a2d99b0aa0e40d229?rik=TOtT2OUxJ80yiQ&riu=http%3a%2f%2fmetropolitanind.com%2fwp-content%2fuploads%2f2018%2f05%2fwater-treatment-radium-removal-system-airport-road.jpg&ehk=D036tdAQt8izWRkhMW%2fVzpJlteFEf3e%2bv05iMbXnBqo%3d&risl=&pid=ImgRaw&r=0"
                alt="Hydraulic System"
                className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 text-primary dark:text-white">
                {t("about", "keyApplications")}
              </h3>
              <ul className="space-y-3">
                {applications.map((application, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:translate-x-1 transition-transform duration-200"
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
          <h2 className="text-3xl font-bold text-primary dark:text-white text-center mb-12 animate-fade-in">
            {t("services", "title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img
                  src={[
                    "https://th.bing.com/th/id/R.84fb6b8e872240d6516ac95d3ee57f5a?rik=R96iHmpMORSCSg&riu=http%3a%2f%2fwww.mc-generale-hydraulique.com%2fmedias%2fimages%2fdsc0717.jpg&ehk=aMaEION6bdsE5SUZryg9gefrvjFrkuaKzDEVXofSIcQ%3d&risl=&pid=ImgRaw&r=0",
                    "https://th.bing.com/th/id/R.04f3f6aa29a4c6e80e0462425b6dc7de?rik=2Kpp%2fK7yXUQo4g&pid=ImgRaw&r=0",
                    "https://th.bing.com/th/id/OIP.mki-srLMJxQIARa2iMRk5gHaE-?pid=ImgDet&w=474&h=318&rs=1",
                  ][index]}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-[1.02] transition-transform duration-300"
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
          <h2 className="text-3xl font-bold text-primary dark:text-white text-center mb-12 animate-fade-in">
            {t("contact", "title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-center space-x-4 hover:translate-x-1 transition-transform duration-200">
                <Phone className="text-primary dark:text-white" size={24} />
                <span className="text-gray-600 dark:text-gray-300">+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-4 hover:translate-x-1 transition-transform duration-200">
                <Mail className="text-primary dark:text-white" size={24} />
                <span className="text-gray-600 dark:text-gray-300">contact@ebhydraulics.com</span>
              </div>
              <div className="flex items-center space-x-4 hover:translate-x-1 transition-transform duration-200">
                <MapPin className="text-primary dark:text-white" size={24} />
                <span className="text-gray-600 dark:text-gray-300">
                  123 Industrial Park, Business City
                </span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-primary dark:text-white hover:text-opacity-80 transition-colors duration-200 hover:scale-110"
                  title={footerSocial.facebook}
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-primary dark:text-white hover:text-opacity-80 transition-colors duration-200 hover:scale-110"
                  title={footerSocial.instagram}
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-primary dark:bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-lg font-semibold">{footerCompany.title}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors duration-200">
                    {footerCompany.about}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors duration-200">
                    {footerCompany.careers}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors duration-200">
                    {footerCompany.privacy}
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "150ms" }}>
              <h3 className="text-lg font-semibold">Social Media</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
                  title={footerSocial.facebook}
                >
                  <Facebook size={20} />
                  Facebook
                </a>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
                  title={footerSocial.instagram}
                >
                  <Instagram size={20} />
                  Instagram
                </a>
              </div>
            </div>
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <p className="text-sm">{t("footer", "disclaimer")}</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p>{t("footer", "rights")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
