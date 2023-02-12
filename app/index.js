import { ethers } from 'ethers';
import deploy from './deploy';
import addContract from './addContract';
import './index.scss';

let contracts = 0;

// newContract function to deploy new contract and add to the DOM
// using the addContract function from addContract.js file
// and the createHTML function from createContract.js file

async function newContract() {
	const beneficiary = document.getElementById('beneficiary').value;
	const arbiter = document.getElementById('arbiter').value;
	const value = ethers.BigNumber.from(document.getElementById('wei').value);
	const contract = await deploy(arbiter, beneficiary, value);
	addContract(++contracts, contract, arbiter, beneficiary, value);
}

document.getElementById('deploy').addEventListener('click', newContract);
