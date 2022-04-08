var ethers = require('ethers');
var url = 'https://rinkeby.infura.io/v3/9c1d9b1e3b4d40b4801f8d24f1a19590';
var provider = new ethers.providers.JsonRpcProvider(url);
var address  = '0xfDC0b5221aaea7438BB42ba949DF1e7C31477777';
var abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "x",
				"type": "string"
			}
		],
		"name": "sendHash",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getHash",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
var contract = new ethers.Contract(address,abi,provider);

contract.getHash().then((result) =>{
  document.getElementById("btn").onclick = function () {
		location.href = "https://ipfs.io/ipfs/"+result;
  	};
});