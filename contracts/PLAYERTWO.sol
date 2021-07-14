// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

contract playertwo is Ownable, ERC721 {
  uint public TokenId;
  address public admin;

  constructor() ERC721('Playertwo NFT', 'PlayertwoNFT') {
    admin = msg.sender;
  }

  function mint(address to, uint tokenid) external {
    require(msg.sender == admin, 'only admin');
    _safeMint(to, tokenid);
    TokenId++;
  }

  function _baseURI() internal view override returns (string memory) {
    return 'https://victorapi.herokuapp.com/api/playertwo/';
  }
  

}
