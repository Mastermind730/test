import Link from "next/link";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-screen h-fit lg:h-3/5 bg-gray-900 text-white flex flex-col lg:flex-row items-center justify-evenly py-4 ">
      <section className="flex flex-col w-full lg:w-2/4 space-y-4 h-4/6 lg:pr-8 px-14 lg:px-0 sm-auto">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl xl:text-2xl font-bold mb-4" style={{ color: "#9e983e" }}>
            Designed By : <span style={{ color: "#f0f2f2", fontWeight: "normal" }}>Prajwal Santosh Lonari</span>
          </h2>
          <h2 className="text-2xl xl:text-2xl font-bold mb-2" style={{ color: "#0397ce" }}>
            Developed with <span className="heart-beat">❤️</span> by webmasters
          </h2>
          <DeveloperNamesList />
          <ContactUs />
        </div>
      </section>
      <section className="explore-section flex flex-col w-full lg:w-1/4 space-y-4 h-4/6 px-14 lg:px-0 lg:mt-0 sm:mt-8">
        <h2 className="text-2xl space-y-">Explore</h2>
        <hr className="mb-4" />
        <ul className="flex flex-col space-y-2 text-lg">
          <FooterLinkItem href="/" label="Home" />
          <FooterLinkItem href="/about" label="About" />
          <FooterLinkItem href="/gallery" label="Gallery" />
          <FooterLinkItem href="https://www.acm.org/" label="ACM - Home" />
          <FooterLinkItem href="https://india.acm.org/" label="ACM India - Home" />
          <FooterLinkItem href="https://xrds.acm.org/" label="ACM - XRDS" />
          <FooterLinkItem href="https://dl.acm.org/" label="ACM Digital Library" />
        </ul>
        <p>
          
        </p>
      </section>
    </footer>
  );
};

const DeveloperNamesList = () => {
  const developers = [
    "Sourav Narvekar",
    "Ketan Sonar",
    "Lalit Deore",
    "Swapnil Walave",
    "Hrutvik Khatkar",
    "Sameer Sambhare",
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center">
      {developers.map((developer, index) => (
        <div key={index}>
          <DeveloperName name={developer} />
        </div>
      ))}
    </div>
  );
};

const DeveloperName = ({name}:{name:string}) => {
  return (
    <div className="text-lg shadow-md p-2 rounded-md fade-in flex justify-center items-center bg-gray-800 hover:bg-gray-700 transition duration-300">
      {name}
    </div>
  );
};

const ContactUs = () => {
  return (
    
    <div className="mt-4">
    <h2 className="text-2xl font-bold mb-2">CONTACT US</h2>
    <p>Pimpri Chinchwad College of Engineering.</p>
    <p>Near Akurdi Railway Station Rd, Sector No. 26, Pradhikaran, Nigdi, Pimpri-Chinchwad, Maharashtra 411044</p>
    <p>Email: <Link href="mailto:acm@pccoepune.org" className="text-blue-500">acm@pccoepune.org</Link></p>
    <div className="flex space-x-4 mt-4">
      
     
      <Link href="https://www.instagram.com/pccoeacm/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
        <FaInstagram size={30} />
      </Link>
      <Link href="https://www.linkedin.com/company/pccoe-acm-student-chapter" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
        <FaLinkedin size={30} />
      </Link>
    </div>
  </div>
  );
};

interface FooterLinkItemProps {
  href: string;
  label: string;
}

const FooterLinkItem: React.FC<FooterLinkItemProps> = ({ href, label }) => {
  return (
    <li className="footer-link">
      <Link className="text-gray-400 hover:text-white transition duration-300" href={href}>
        {"> "} {label}
      </Link>
    </li>
  );
};

export default Footer;
