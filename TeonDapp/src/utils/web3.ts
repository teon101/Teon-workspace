import { ethers, Contract, BrowserProvider, Signer, InterfaceAbi, JsonFragment } from "ethers";

const contractAddress = "0xde15618339f754841fa2d354a74f395f63b14b5fd29eb98a8b4e235a0789e7dd";

// Explicitly typed ABI using JsonFragment array
const contractABI: ReadonlyArray<JsonFragment> = [
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
  {
    inputs: [{ internalType: "string", name: "_newName", type: "string" }],
    name: "changeName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "greet",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  }
] as const;

export async function getContract(signer?: Signer): Promise<Contract> {
  if (typeof window === 'undefined') {
    throw new Error("Window object not available (server-side rendering)");
  }

  if (!window.ethereum) {
    throw new Error("Ethereum provider not found. Please install MetaMask.");
  }

  try {
    const provider = new BrowserProvider(window.ethereum);
    const usedSigner = signer ?? await provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI as InterfaceAbi, usedSigner);
  } catch (error) {
    console.error("Error creating contract instance:", error);
    throw new Error("Failed to initialize contract");
  }
}
