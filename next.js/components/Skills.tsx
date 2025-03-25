import { FaCode, FaChartLine, FaCube, FaTools } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Frontend Development */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <FaCode className="text-4xl text-blue-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Frontend Development</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Next.js</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>JavaScript (ES6+)</li>
            </ul>
          </div>

          {/* Backend Development */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <FaCode className="text-4xl text-yellow-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Backend Development</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Solidity</li>
              <li>Node.js & Express.js</li>
            </ul>
          </div>

          {/* Web3 Development */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <FaCube className="text-4xl text-green-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Web3 Development</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Blockchain Development</li>
              <li>Smart Contracts (Solidity, Remix, Hardhat)</li>
              <li>IPFS (For NFT Metadata Storage)</li>
            </ul>
          </div>

          {/* Trading & Finance */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <FaChartLine className="text-4xl text-red-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Trading & Finance</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Forex Trading</li>
              <li>Technical Analysis (Indicators, Trendlines, Fibonacci)</li>
              <li>AI-powered Trading Strategies</li>
            </ul>
          </div>

          {/* Other Skills */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <FaTools className="text-4xl text-purple-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Other Skills</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Git & GitHub</li>
              <li>UI/UX Design (Figma, Adobe XD)</li>
              <li>Docker & AWS</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
