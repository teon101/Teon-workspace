// @ts-nocheck
import { FaCode, FaWrench } from "react-icons/fa";
import Skills from "@/components/Skills";
import Image from "next/image";
import SocialFooter from "../components/SocialFooter";
import AnimatedSection from "../components/AnimatedSection";
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
          {/* ... hero section content remains the same ... */}
        </section>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection id="about" className="py-12">
        {/* ... about section content remains the same ... */}
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" className="py-12">
        <h2 className="text-3xl font-bold mb-8 border-b border-zinc-800 pb-2">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 - Fixed unclosed p tag */}
          <div className="bg-zinc-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="text-indigo-400 text-3xl">
                <FaCode />
              </div>
              <h3 className="text-xl font-semibold text-white">Portfolio Website</h3>
            </div>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
              🚀 This ain't just another random portfolio with basic HTML. This is a whole different level—fully responsive, next-level setup with Next.js, Tailwind, and React. Not your typical beginner site, and definitely not your average "Hello World" project. 💻🔥
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
            {/* ... project 2 content remains the same ... */}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-12">
        {/* ... contact section content remains the same ... */}
      </AnimatedSection>

      {/* Social Icons */}
      <SocialFooter />
    </div>
  );
}
