const Web3 = require('web3');
const html = require('nanohtml');
const csjs = require('csjs-inject');
const morphdom = require('morphdom');

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  alert('initial failed');
}

const ABI = require('./abi.json');
const DEFAULT_ADDRESS = '0x0c972a74a9806f249968720035ebda65b653360c';
const contractAddress = localStorage.constract || DEFAULT_ADDRESS;
const myContract = new web3.eth.Contract(ABI, contractAddress);

const css = csjs `
  .box {
    margin: 10px;
  }
  .input {
    margin-top: 10px;
    margin-right: 10px;
    width: 500px;
    font-size: 20px;
  }
  .button {
    margin-top: 10px;
    margin-right: 10px;
    font-size: 20px;
    width: 180px;
    background-color: #4CAF50;
    color: white;
  }
  .result {
    padding: 10px;
    font-size: 40px;
    color: red;
  }
  img {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
  }
`