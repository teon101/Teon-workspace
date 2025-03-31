import { useState } from "react";
import { getContract } from "./utils/web3";
import { ethers } from "ethers";
import './App.css';

export default function App() {
  const [account, setAccount] = useState<string | null>(null);
  const [greeting, setGreeting] = useState<string>("");
  const [newName, setNewName] = useState<string>("");

  async function connectWallet() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      setAccount(await signer.getAddress());
    } else {
      alert("MetaMask is required!");
    }
  }

  async function fetchGreeting() {
    const contract = await getContract();
    const result = await contract.greet();
    setGreeting(result);
  }

  async function changeUserName() {
    if (!newName) return alert("Enter a name first!");
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = await getContract(signer);
    const tx = await contract.changeName(newName);
    await tx.wait();
    alert("Name changed successfully!");
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96 text-center">
      <h1 className="text-2xl font-bold mb-4">Teon's Cool App</h1>

        
        <button
          className="w-full bg-blue-600 hover:bg-blue-500 py-2 rounded-md transition mb-3"
          onClick={connectWallet}
        >
          {account ? "Connected" : "Connect Wallet"}
        </button>
        <p className="text-sm text-gray-400 mb-4">{account || "Not connected"}</p>

        <button
          className="w-full bg-green-600 hover:bg-green-500 py-2 rounded-md transition mb-3"
          onClick={fetchGreeting}
        >
          Get Greeting
        </button>
        <p className="mb-4 text-lg">{greeting}</p>

        <input
          className="w-full p-2 rounded-md bg-gray-700 text-white border-none mb-2"
          type="text"
          placeholder="Enter new name"
          onChange={(e) => setNewName(e.target.value)}
        />

        <button
          className="w-full bg-yellow-500 hover:bg-yellow-400 py-2 rounded-md transition"
          onClick={changeUserName}
        >
          Change Name
        </button>
      </div>
    </div>
  );
}
