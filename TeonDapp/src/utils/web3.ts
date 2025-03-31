import { ethers, Contract, BrowserProvider, Signer, InterfaceAbi } from "ethers";

declare global {
  interface Window {
    ethereum?: any;
  }
}

const contractAddress = "0xde15618339f754841fa2d354a74f395f63b14b5fd29eb98a8b4e235a0789e7dd"; // Verify this is correct

const contractABI: InterfaceAbi = [
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

export async function getContract(signer?: Signer): Promise<Contract> {
  if (!window.ethereum) {
    throw new Error("Ethereum provider not found. Please install MetaMask.");
  }

  const provider = new BrowserProvider(window.ethereum);
  const usedSigner = signer ?? await provider.getSigner();
  return new Contract(contractAddress, contractABI, usedSigner);
}
