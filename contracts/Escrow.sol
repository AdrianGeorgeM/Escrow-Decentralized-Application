// SPDX-License-Identifier: MIT
pragma solidity 0.7.5;

// Contract to hold funds in escrow until the transaction is approved by the arbiter
contract Escrow {
    address public arbiter;
    address payable public beneficiary;
    address public depositor;

    bool public isApproved;

    // Constructor function to set the arbiter, beneficiary and depositor addresses
    constructor(address _arbiter, address payable _beneficiary) payable {
        arbiter = _arbiter;
        beneficiary = _beneficiary;
        depositor = msg.sender;
    }

    event Approved(uint);

    // Function to approve the transaction and transfer the funds to the beneficiary

    function approve() external {
        require(msg.sender == arbiter);
        uint balance = address(this).balance;
        beneficiary.transfer(balance);
        emit Approved(balance);
        isApproved = true;
    }
}
