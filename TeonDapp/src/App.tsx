import { useState } from 'react';
import { ethers } from 'ethers';
import { getContract } from './utils/web3';

export default function App() {
  const [greeting, setGreeting] = useState('');
  const [newName, setNewName] = useState('');

  async function loadGreeting() {
    try {
      const contract = await getContract();
      const result = await contract.greet();
      setGreeting(result);
    } catch (error) {
      console.error('Error loading greeting:', error);
    }
  }

  async function changeUserName() {
    if (!newName) return alert("Enter a name first!");
    
    try {
      const provider = new ethers.BrowserProvider(window.ethereum!);
      const signer = await provider.getSigner();
      const contract = await getContract(signer);
      const tx = await contract.changeName(newName);
      await tx.wait();
      alert("Name changed successfully!");
    } catch (error) {
      console.error('Error changing name:', error);
      alert("Error changing name");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-3xl font-bold mb-4">Icon's Cool App</h1>
        <p>Current Greeting: {greeting}</p>
        <button 
          onClick={loadGreeting}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded mt-4"
        >
          Load Greeting
        </button>
        <div className="mt-4">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="text-black p-2 rounded w-full"
            placeholder="Enter new name"
          />
          <button
            onClick={changeUserName}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded mt-2 w-full"
          >
            Change Name
          </button>
        </div>
      </div>
    </div>
  );
}
