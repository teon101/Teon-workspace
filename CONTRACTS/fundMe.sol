// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {PriceConverter} from "./PriceConverter.sol;

contract fundme {
    uint256 public minnimumusd = 5e18;

    address[] public funders;
    mapping(address Funders => uint256 ) public addressToAmountFunded;

    function fund() public payable {
        require(msg.value.getConversionRate ) >= minnimumusd, "didn't send enough ETH");
        funders.push(msg.sender);
        addressToAmountFunded[msg.sender] = addressToAmountFunded[msg.sender] + msg.value;
    }
    
   
}