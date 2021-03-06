// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract SwagBag {
    uint256 public totalWaves;
    uint256 private seed;

    event NewWave(address indexed from, uint256 timestamp, string message);

    struct Wave {
        address waver;
        string message;
        uint256 timestamp;
    }

    Wave[] public waves;

    mapping(address => uint256) public lastWavedAt;

    constructor() payable {
        console.log("We have been contructed!");
        seed = (block.timestamp + block.difficulty) % 100;
    }

    function wave(string memory _message) public {
        // require(
        //     lastWavedAt[msg.sender] + 1 seconds < block.timestamp,
        //     "Please wait 1 day before waving again"
        // );
        lastWavedAt[msg.sender] = block.timestamp;

        totalWaves += 1;
        console.log("%s has waved", msg.sender);

        waves.push(Wave(msg.sender, _message, block.timestamp));

        seed = (block.timestamp + block.difficulty + seed) % 100;
        if (seed <= 50) {
            console.log("%s won!", msg.sender);

            uint256 prizeAmount = 0.00001 ether;
            require(
                prizeAmount <= address(this).balance,
                "trying to withdraw more than the contract balance"
            );
            (bool success, ) = (msg.sender).call{value: prizeAmount}("");
            require(success, "failed to withdraw money from contract");
        }
        emit NewWave(msg.sender, block.timestamp, _message);
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}
