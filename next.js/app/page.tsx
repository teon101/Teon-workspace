

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
    <div className="space-y-24"></div>
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
             I craft clean, responsive websites with modern technologies that help businesses grow and reach their goals. I also build smart contracts on different blockchains and testnets—delivering high-performance solutions that don’t just look good, they work. Whether it’s interactive UIs or Web3 development, I bring ideas to life.
              Always learning. Always evolving. No limits. Let’s build something legendary.
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
             I'm a passionate developer who builds modern web applications with clean, user-friendly interfaces.
              I specialize in frontend and Web3 development, making sure my work stands out in both design and functionality.
            </p>
            <p className="text-lg leading-relaxed transition-all duration-300 hover:text-gray-100 mb-4">
             My journey in web development started a while back, and I’ve been leveling up ever since. Learning new tech,
              keeping up with trends, and pushing boundaries—that’s just how I roll.
            </p>
            <p className="text-lg leading-relaxed transition-all duration-300 hover:text-gray-100">
              Aside from coding, I’m deep into forex trading. I analyze market trends, refine trading strategies, and aim for consistency. My goal? To merge AI with trading and build smart tools for better market insights. 
              Relax, I’m still learning, but trust me, we’re getting there.
              And if you think this portfolio is my first project, you're 100% wrong. What you’re looking at is something AI can't just generate. Yeah, I used AI for small tweaks, but the real work? 
              That’s all me.
            </p>
            <p>And if you think this is just some basic portfolio—nah, this is next level. I’m always evolving. 🔥 </p>
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
                🚀 This ain’t just another random portfolio with basic HTML. This is a whole different level—fully responsive, next-level setup with Next.js, Tailwind, and React. Not your typical beginner site, and definitely not your average “Hello World” project. 💻🔥  
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
              <h3 className="text-xl font-semibold text-white">Working on my next build—expect something next-level soon</h3>
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
        <h2 className="text-3xl font-bold mb-8 border-b border-zinc-800 pb-2">Let’s build something great. Hit me up ⬇</h2>
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
