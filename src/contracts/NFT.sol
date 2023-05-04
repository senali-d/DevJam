// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

error NFT_SOLD_OUT();
error SEND_MORE_MONEY();
error ONLY_OWNER_CAN_CALL()
error NOT_ENOUGH_BALANCE();
error TRANSFER_FAILED();

contract NFT is ERC1155 { 
    //events
    event OneNftMinted(address indexed minter, uint nftPrice);
    event mutlipleNftMinted(address indexed minter, uint nftPrice, uint numberOfNFTs);
    event WithdrawMoney(address withdrawAddress, uint amount);
    
    // variable to store maximum number of NFT 
    uint public maxSupply;
    // counter to keep track how many NFT are minted
    uint public counter;
    // variable to store the NFT Price;
    uint public nftPrice;
    // variable to store launchpad Address
    address payable public launchpadAddress;
    // variable to store owner Address
    address payable public owner;

    /**
     * @dev contructor to set the _uri(metadata), maxSupply , Price of NFT 
     * @param _uri get the metadata of NFT
     * @param _maxSupply get the maxSupply, total number of NFT
     * @param _nftPrice get the price of NFT
     */
    constructor(string memory _uri, uint256 _maxSupply , uint _nftPrice, address _launchpadAddress, address _creatorAddress) ERC1155(_uri){
        _setURI(_uri);
        maxSupply = _maxSupply;
        nftPrice = _nftPrice;
        launchpadAddress = payable(_launchpadAddress);
        owner = payable(_creatorAddress);
    }

    modifier onlyOwner() {
        if(msg.sender != owner){
            revert ONLY_OWNER_CAN_CALL();
        }
        _;
    }

    /**
     * @dev nftMint() function to mint and sell 1 NFT
     */
    function nftMint() public payable{
        if(counter + 1 > maxSupply){
            revert NFT_SOLD_OUT();
        }
        if(msg.value < nftPrice) {
            revert SEND_MORE_MONEY();
        }
        ++counter;
        _mint(msg.sender, 0 , 1, "");
        emit OneNftMinted(msg.sender, msg.value);
    }

    /**
     * @dev multipleNftMint() function to mint and sell as many NFT user want NFT
     * @param _num get the amount of NFT user want to mint and BUY
     */
    function multipleNftMint(uint _num) public payable{
        if(counter + _num > maxSupply){
            revert NFT_SOLD_OUT();
        }
        if(msg.value < nftPrice * _num) {
            revert SEND_MORE_MONEY();
        }
        counter += _num;
        _mint(msg.sender, 0 , _num, "");
        emit mutlipleNftMinted(msg.sender, msg.value, _num);
    }

    /**
     * @notice withdraw(): function to withdraw contract balance 
     * @param _amount : amount courseowner want to withdraw
     * @param _withdrawAddress : address courseowner wants to withdraw to
     */
    function withdraw(uint _amount, address _withdrawAddress) public payable onlyOwner{
        if(getContractBalance() < _amount){
            revert NOT_ENOUGH_BALANCE();
        }

        // sending money to launchpad contract
        uint commissionAmount = (_amount * 5) / 100; 
        (bool success, ) = launchpadAddress.call{value: commissionAmount }("");
        if(!success){
            revert TRANSFER_FAILED();
        }

        // sending money to content creator
        (bool success1, ) = _withdrawAddress.call{value: _amount - commissionAmount}("");
        if(!success1){
            revert TRANSFER_FAILED();
        }

        // emit the WithdrawMoney
        emit WithdrawMoney(_withdrawAddress, _amount);
    }

    function setNftPrice(uint _newNftPrice) public onlyOwner() {
        nftPrice = _newNftPrice;
    }

    //-------------------- view functions -------------------------------

    // get the balance of the contract
    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // get the address of this contract
    function getAddressOfCourseContract() public view returns (address) {
        return address(this);
    }

    // get the address of contract owner
    function getAddressOfOwner() public view returns (address) {
        return owner;
    }

    // receive function is used to receive Ether when msg.data is empty
    receive() external payable {}

    // Fallback function is used to receive Ether when msg.data is NOT empty
    fallback() external payable {}
}