import Escrow from './artifacts/contracts/Escrow.sol/Escrow';
import { ethers } from 'ethers';

// create provider to connect to the blockchain network
const provider = new ethers.providers.Web3Provider(ethereum);

//deploy function to deploy new contract and return the contract
export default async function deploy(arbiter, beneficiary, value) {
	await ethereum.request({ method: 'eth_requestAccounts' });
	const signer = provider.getSigner();
	const factory = new ethers.ContractFactory(Escrow.abi, Escrow.bytecode, signer);
	return factory.deploy(arbiter, beneficiary, { value });
}
