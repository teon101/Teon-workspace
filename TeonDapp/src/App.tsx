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
      console.error("Error loading greeting:", error);
    }
  }

  async function changeUserName() {
    if (!newName) {
      alert("Please enter a name first!");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum!);
      const signer = await provider.getSigner();
      const contract = await getContract(signer);
      const tx = await contract.changeName(newName);
      await tx.wait();
      alert("Name changed successfully!");
    } catch (error) {
      console.error("Error changing name:", error);
      alert("Error changing name");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      {/* Your JSX here */}
    </div>
  );
}
