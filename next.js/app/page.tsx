// @ts-nocheck
import { FaCode, FaWrench } from "react-icons/fa";
import ContactForm from "../components/ContactForm"; 
import Skills from "@/components/Skills";
import Image from "next/image";
import SocialFooter from "../components/SocialFooter";
import AnimatedSection from "../components/AnimatedSection";
import api from "../app/api/sendEmail";
import SmoothScrollLink from "../components/SmoothScrollLink";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <AnimatedSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <section className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] py-12">
          <div className="md:w-1/2 space-y-4">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-zinc-300 to-zinc-500 text-transparent bg-clip-text">
                Hi, I'm <span className="text-indigo-400">TEON</span>
              </h1>
              <p className="text-sm text-zinc-500 mt-1 tracking-wider">
                Treasure-Emmanuel Ogenekome Nfawa
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl text-zinc-400">
              Frontend/Web3 Developer & Designer
            </h2>
            <p className="text-lg text-zinc-300 max-w-xl">
              I create beautiful, responsive websites with modern technologies
              that help businesses grow and reach their goals.I also creates smart contract on blockchains and different testnets.....don't play
            </p>
            <div className="flex gap-4 pt-4">
              <SmoothScrollLink
                href="#projects"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md transition duration-300 ease-in-out"
              >
                View My Work
              </SmoothScrollLink>
              <SmoothScrollLink
                href="#contact"
                className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 rounded-md transition duration-300 ease-in-out"
              >
                Contact Me
              </SmoothScrollLink>
            </div>
          </div>

          {/* Profile Image */}
          <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-zinc-700 bg-zinc-800">
              <Image
                src="/profilepic.jpg"
                alt="Profile Picture"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-full"
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection id="about" className="py-12">
        <h2 className="text-3xl font-bold mb-8 border-b border-zinc-800 pb-2">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8"></div>
        <section className="bg-[#0D0D0D] text-gray-300 py-12 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-lg leading-relaxed transition-all duration-300 hover:text-gray-100 mb-4">
              I'm a passionate developer with expertise in building modern web applications. 
              With a strong foundation in frontend technologies, I create responsive and 
              user-friendly interfaces that deliver exceptional user experiences.
            </p>
            <p className="text-lg leading-relaxed transition-all duration-300 hover:text-gray-100 mb-4">
              My journey in web development began several years ago, and I've been honing my 
              skills ever since. I love learning new technologies and keeping up with the latest 
              trends in the industry.
            </p>
            <p className="text-lg leading-relaxed transition-all duration-300 hover:text-gray-100">
              In addition to web development, I am also deeply involved in forex trading. I analyze market 
              trends, develop trading strategies, and continuously refine my approach to achieve 
              consistency in trading. My goal is to merge my technical skills with financial markets, 
              possibly building AI-powered trading tools in the future.calm down am still learning okk
            </p>
            <p>Actually this is my first project,if u are thinking disis the first thing i hv done in as my project u are 100% wrong ,this projectu see now or reading is something Ai can't do althoug i used em to fix somethigngs </p>
          </div>
        </section>
        <Skills />
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" className="py-12">
        <h2 className="text-3xl font-bold mb-8 border-b border-zinc-800 pb-2">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-zinc-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="text-indigo-400 text-3xl">
                <FaCode />
              </div>
              <h3 className="text-xl font-semibold text-white">Portfolio Website</h3>
            </div>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
              A fully responsive portfolio built with Next.js and Tailwind CSS, designed to showcase my skills, projects, and experience.its not any kind of site with just html shit, this is on a different level
            </p>
            <p className="text-zinc-500 text-xs mt-3">🛠 Tech Used: Next.js, Tailwind CSS, React</p>
            <div className="flex gap-4 mt-4">
              <SmoothScrollLink href="#" className="text-indigo-400 hover:text-indigo-300 text-sm">
                View Project
              </SmoothScrollLink>
              <SmoothScrollLink 
                href="https://github.com/teon101/Teon-workspace" 
                className="text-indigo-400 hover:text-indigo-300 text-sm"
              >
                GitHub
              </SmoothScrollLink>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-zinc-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="text-indigo-400 text-3xl">
                <FaWrench />
              </div>
              <h3 className="text-xl font-semibold text-white">Coming Soon</h3>
            </div>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
              An exciting new project is in the works! Stay tuned for updates and upcoming features. 
            </p>
            <p className="text-zinc-500 text-xs mt-3">🛠 Tech Stack: To be revealed soon...</p>
            <div className="flex gap-4 mt-4">
              <SmoothScrollLink href="#" className="text-indigo-400 hover:text-indigo-300 text-sm">
                View Project
              </SmoothScrollLink>
              <SmoothScrollLink 
                href="https://github.com/teon101/Teon-workspace" 
                className="text-indigo-400 hover:text-indigo-300 text-sm"
              >
                GitHub
              </SmoothScrollLink>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-12">
        <h2 className="text-3xl font-bold mb-8 border-b border-zinc-800 pb-2">Get In Touch</h2>
        <div className="bg-zinc-800 p-6 rounded-lg max-w-2xl mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-zinc-300 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-zinc-300 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-zinc-300 mb-1">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </AnimatedSection>

      {/* Social Icons */}
      <SocialFooter />
    </div>
  );
}
