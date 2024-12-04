import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import FooterSection from "./FooterSection";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-primary-400 mb-4">
              CSEC ASTU
            </h2>
            <p className="text-gray-300">
              Making tomorrow&apos;s leaders in technology today.
            </p>
          </div>

          <FooterSection title="Quick Links">
            <a
              href="#hero"
              className="block text-gray-300 hover:text-primary-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#divisions"
              className="block text-gray-300 hover:text-primary-400 transition-colors"
            >
              Divisions
            </a>
            <a
              href="#events"
              className="block text-gray-300 hover:text-primary-400 transition-colors"
            >
              Events
            </a>
            <a
              href="#faq"
              className="block text-gray-300 hover:text-primary-400 transition-colors"
            >
              FAQ
            </a>
          </FooterSection>

          <FooterSection title="Contact">
            <a
              href="mailto:contact@csec.astu.edu"
              className="block text-gray-300 hover:text-primary-400 transition-colors"
            >
              contact@csec.astu.edu
            </a>
            <p className="text-gray-300">
              Adama Science and Technology University
              <br />
              Adama, Ethiopia
            </p>
          </FooterSection>

          <FooterSection title="Follow Us">
            <div className="flex space-x-4">
              <a
                href="https://github.com/csec-astu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/csec_astu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/csec-astu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@csec.astu.edu"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </FooterSection>
        </div>

        <div className="border-t border-dark-200 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} CSEC ASTU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
