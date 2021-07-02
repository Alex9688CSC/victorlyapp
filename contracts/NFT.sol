// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

contract NFT is ERC721 {
  uint public nextTokenId;
  address public admin;

  constructor() ERC721('My Players NFT', 'PLAYERSNFT') {
    admin = msg.sender;
  }

  function mint(address to) external {
    require(msg.sender == admin, 'only admin');
    //first token
    _safeMint(to, nextTokenId);
    nextTokenId++;
  }

  function _baseURI() internal view override returns (string memory) {
    return 'https://victorapi.herokuapp.com/api/token/';
  }
  

}
