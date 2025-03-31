import { ethers, Contract, BrowserProvider, Signer, InterfaceAbi } from "ethers";

const contractAddress = "0xde15618339f754841fa2d354a74f395f63b14b5fd29eb98a8b4e235a0789e7dd";

// Explicitly typed ABI
const contractABI: InterfaceAbi = [
  { 
    inputs: [], 
    stateMutability: "nonpayable", 
    type: "constructor" 
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "string", name: "oldName", type: "string" },
      { indexed: false, internalType: "string", name: "newName", type: "string" }
    ],
    name: "NameChanged",
    type: "event"
  },
  // ... rest of your ABI entries
] as const; // 'as const' ensures TypeScript treats this as a literal type

export async function getContract(signer?: Signer): Promise<Contract> {
  if (typeof window === 'undefined') {
    throw new Error("Window object not available");
  }

  if (!window.ethereum) {
    throw new Error("Ethereum provider not found");
  }

  const provider = new BrowserProvider(window.ethereum);
  const usedSigner = signer ?? await provider.getSigner();
  return new ethers.Contract(contractAddress, contractABI, usedSigner);
}
