// @ts-nocheck
import { FaCode, FaWrench, FaReact, FaEthereum } from "react-icons/fa";
import ContactForm from "../components/ContactForm"; 
import Skills from "@/components/Skills";
import Image from "next/image";
import SocialFooter from "../components/SocialFooter";
import AnimatedSection from "../components/AnimatedSection";
import SmoothScrollLink from "../components/SmoothScrollLink";
import { useState } from "react";

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // Tech Stack Badge Component
  const TechBadge = ({ icon: Icon, label }: { icon: React.ComponentType, label: string }) => (
    <div className="flex items-center bg-zinc-700 rounded-full px-3 py-1 text-xs text-zinc-300 gap-2">
      <Icon className="w-3 h-3" />
      <span>{label}</span>
    </div>
  );

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
              Frontend & Web3 Developer | Designer
            </h2>
            <p className="text-lg text-zinc-300 max-w-xl">
              I craft clean, responsive websites with modern technologies that help businesses grow and reach their goals. I also build smart contracts on different blockchains and testnets—delivering high-performance solutions that don't just look good, they work. Whether it's interactive UIs or Web3 development, I bring ideas to life. Always learning. Always evolving. No limits. Let's build something legendary.
            </p>
            <div className="flex gap-4 pt-4">
              <SmoothScrollLink
                href="#projects"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                View My Work
              </SmoothScrollLink>
              <SmoothScrollLink
                href="#contact"
                className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
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
        <section className="bg-[#0D0D0D] text-gray-300 py-12 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-lg leading-relaxed hover:text-gray-100 mb-4">
              I started coding in 2023, building modern web applications with clean, user-friendly interfaces. I specialize in frontend and Web3 development, making sure my work stands out in both design and functionality.
            </p>
            <p className="text-lg leading-relaxed hover:text-gray-100 mb-4">
              My journey in web development has been a constant evolution. Learning new tech, keeping up with trends, and pushing boundaries—that's just how I roll.
            </p>
            <p className="text-lg leading-relaxed hover:text-gray-100">
              Aside from coding, I'm deep into forex trading. I analyze market trends, refine trading strategies, and aim for consistency. My goal? To merge AI with trading and build smart tools for better market insights. 
              This ain't just a portfolio. This is next level.
            </p>
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
            <div className="flex items-center gap-4 mb-4">
              <div className="text-indigo-400 text-3xl">
                <FaCode />
              </div>
              <h3 className="text-xl font-semibold text-white">Portfolio Website</h3>
            </div>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed mb-4">
              🚀 A fully responsive, next-level portfolio setup with Next.js, Tailwind, and React. Not your typical beginner site, and definitely not your average "Hello World" project. 💻🔥
            </p>
            <div className="flex gap-2 mb-4">
              <TechBadge icon={FaReact} label="React" />
              <TechBadge icon={FaCode} label="Next.js" />
              <TechBadge icon={FaWrench} label="Tailwind" />
            </div>
            <div className="flex gap-4">
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
            <div className="flex items-center gap-4 mb-4">
              <div className="text-indigo-400 text-3xl">
                <FaEthereum />
              </div>
              <h3 className="text-xl font-semibold text-white">Web3 Tool in Progress</h3>
            </div>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed mb-4">
              A new Web3 tool in progress—stay tuned for a revolutionary blockchain solution that simplifies complex interactions.
            </p>
            <div className="flex gap-2 mb-4">
              <TechBadge icon={FaEthereum} label="Blockchain" />
              <TechBadge icon={FaWrench} label="Web3" />
            </div>
            <div className="flex gap-4">
              <SmoothScrollLink href="#" className="text-indigo-400 hover:text-indigo-300 text-sm">
                Learn More
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
        <h2 className="text-3xl font-bold mb-8 border-b border-zinc-800 pb-2">
          Got an idea? Let's build something legendary. Hit me up ⬇
        </h2>
        <div className="bg-zinc-800 p-6 rounded-lg max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="text-center text-green-400 py-6">
              Thanks for your message! I'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-zinc-300 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-zinc-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-zinc-300 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
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
          )}
        </div>
      </AnimatedSection>

      {/* Social Icons */}
      <SocialFooter />
    </div>
  );
}
