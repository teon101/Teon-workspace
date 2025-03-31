import { useState } from 'react';
import { ethers } from 'ethers';
import { getContract } from './utils/web3';

export default function App() {
  const [greeting, setGreeting] = useState('');
  const [newName, setNewName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function loadGreeting() {
    setIsLoading(true);
    try {
      const contract = await getContract();
      const result = await contract.greet();
      setGreeting(result);
    } catch (error) {
      console.error("Error loading greeting:", error);
      alert("Failed to load greeting");
    } finally {
      setIsLoading(false);
    }
  }

  async function changeUserName() {
    if (!newName.trim()) {
      alert("Please enter a valid name!");
      return;
    }

    setIsLoading(true);
    try {
      if (!window.ethereum) {
        throw new Error("Ethereum provider not available");
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = await getContract(signer);
      
      const tx = await contract.changeName(newName);
      await tx.wait();
      
      alert("Name changed successfully!");
      setNewName('');
      await loadGreeting(); // Refresh the greeting
    } catch (error) {
      console.error("Error changing name:", error);
      alert(`Error changing name: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-3xl font-bold mb-4">Greeting App</h1>
        
        <p className="mb-4">Current Greeting: {greeting || "Not loaded"}</p>
        
        <button
          onClick={loadGreeting}
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded disabled:opacity-50"
        >
          {isLoading ? "Loading..." : "Load Greeting"}
        </button>
        
        <div className="mt-6">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full p-2 rounded text-gray-800 mb-2"
            placeholder="Enter new name"
            disabled={isLoading}
          />
          
          <button
            onClick={changeUserName}
            disabled={isLoading || !newName.trim()}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded w-full disabled:opacity-50"
          >
            {isLoading ? "Processing..." : "Change Name"}
          </button>
        </div>
      </div>
    </div>
  );
}
