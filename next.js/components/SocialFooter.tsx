
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const SocialFooter = () => {
  return (
    <div className="flex justify-center gap-4 mt-8">
      <a
        href="https://github.com/teon101"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-400 transition duration-300"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://twitter.com/@teon101"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600 transition duration-300"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="https://linkedin.com/in/Treasure Nfawa"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900 transition duration-300"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://instagram.com/teon_x5"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700 transition duration-300"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://wa.me/08027990152"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-700 transition duration-300"
      >
        <FaWhatsapp size={24} />
      </a>
      <a
        href="https://www.tiktok.com/@teon_x1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black dark:text-white hover:text-gray-500 transition duration-300"
      >
        <SiTiktok size={24} />
      </a>
      <p>
      <a
  href="https://t.me/@Teon100"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-500 hover:text-blue-700 transition duration-300"
>
  <FaTelegram size={24} />
</a></p>
    </div>
  );
};

export default SocialFooter;
