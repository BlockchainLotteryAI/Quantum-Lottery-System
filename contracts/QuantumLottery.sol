// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.19;

contract QuantumLottery {
    address public owner;
    
    constructor() {
        owner = msg.sender;
    }
    
    function testFunction() public pure returns (string memory) {
        return "Quantum Lottery Contract is working!";
    }
}
