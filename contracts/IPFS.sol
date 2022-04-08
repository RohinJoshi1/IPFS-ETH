//SPDX-Lincense-Identifier:MIT
pragma solidity ^0.6.6;

contract IPFS {
    string ipfshash;
    function sendHash(string memory x) public{
        ipfshash=x;
    }
    function getHash() public view returns(string memory){
        return ipfshash;
    }
}
