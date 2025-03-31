import { ethers } from "ethers";

const contractAddress = "0xde15618339f754841fa2d354a74f395f63b14b5fd29eb98a8b4e235a0789e7dd"; // Replace with your actual contract address

const contractABI = [
  { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "string", "name": "oldName", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "newName", "type": "string" }
    ],
    "name": "NameChanged",
    "type": "event"
  },
  {
    "inputs": [{ "internalType": "string", "name": "_newName", "type": "string" }],
    "name": "changeName",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "greet",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  }
];

export async function getContract(signer: ethers.Signer | null = null) {
  const provider = new ethers.BrowserProvider(window.ethereum);
  if (signer) return new ethers.Contract(contractAddress, contractABI, signer);
  return new ethers.Contract(contractAddress, contractABI, provider);
}
