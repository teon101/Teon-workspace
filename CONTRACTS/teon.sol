
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Teonstorage {
   address public owner = msg.sender;
   
   uint256  myFavoriteNumber; // 0

   struct person{
       string name;
      uint256 favoriteNumber ;
       
  }
  
  mapping(string =>uint256) listofpeople ; 
  
function store(uint256 _favoriteNumber, string memory _name ) external {
    require(msg.sender == owner,"Only the contract creator is allowed to interact with this smart contract" );
     listofpeople[_name]=_favoriteNumber;
   }

function retrive()  view public returns (uint){
  return myFavoriteNumber ;
}

function addperson(string memory _name, uint256 _favoriteNumber) external {
       require(msg.sender == owner,"Only the contract creator is allowed to interact with this smart contract" );
      listofpeople[_name]=_favoriteNumber;
   }
}