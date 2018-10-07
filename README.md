# search3 dApp

## Installing ganache-cli
npm install -g ganache-cli

## Install ganache
npm install ganache-core

## Install http-server
npm install http-server -g

## Install and Setup meta-mask on chrome

MAKE SURE YOU USE THE OLD VERSION OF METAMASK

Click through to make first account (just make up random stuff for mnemonic phrases, this will be thrown away)

Then import a new account using below credentials

# Execution Flow

## Bash commands

```bash
ganache-cli --deterministic
http-server src/
```

## Metamask

Set MetaMask to localhost:8545

## Load webserver

127.0.0.1:8080

## MetaMask Credentials

Balances
(0) 0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1 (~100 ETH)

(1) 0xffcf8fdee72ac11b5c542428b35eef5769c409f0 (~100 ETH)

(2) 0x22d491bde2303f2f43325b2108d26f1eaba1e32b (~100 ETH)

(3) 0xe11ba2b4d45eaed5996cd0823791e0c93114882d (~100 ETH)

(4) 0xd03ea8624c8c5987235048901fb614fdca89b117 (~100 ETH)

(5) 0x95ced938f7991cd0dfcb48f0a06a40fa1af46ebc (~100 ETH)

Private keys
(0) 0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d

(1) 0x6cbed15c793ce57650b9877cf6fa156fbef513c4e6134f022a85b1ffdd59b2a1

(2) 0x6370fd033278c143179d81c5526140625662b8daa446c22ee2d73db3707e620c

(3) 0x646f1ce2fdad0e6deeeb5c7e8e5543bdde65e86029e2fd9fc169899c440a7913

(4) 0xadd53f9a7e588d003326d1cbf9e4a43c061aadd9bc938c843a79e7b4fd2ad743

(5) 0x395df67f0c2d2d9fe1ad08d1bc8b6627011959b79c53d7dd6a3536a33ab8a4fd



## Compiling Solidity via web3
```js
code = fs.readFileSync('/Users/[PATH_TO_SOL_FILE]').toString()
solc = require('solc')
compiledCode = solc.compile(code)
bytecode = compiledCode.contracts[':ReferralTree'].bytecode
abi = compiledCode.contracts[':ReferralTree'].interface
```

## Sample Interaction

```js
abiDefinition = JSON.parse(compiledCode.contracts[':ReferralTree'].interface
Contract = _web3.eth.contract(abiDefinition)
byteCode = compiledCode.contracts[':ReferralTree'].bytecode

deployedContract = Contract.new(question,{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
deployedContract.address

contractInstance = Contract.at(deployedContract.address)
contractInstance.attemptAnswer("I think the answer is 1", {from: "0x5b1869d9a4c187f2eaa108f3062412ecf0526b24"})

web3.eth.getTransactionReceipt(hashString [, callback])

web3.eth.sendTransaction({from: web3.eth.accounts[0], to: "0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab", value:3})

web3.eth.getBlock("earliest",
  function(e, d) {
    transactions.push.apply(transactions, d.transactions)
  }
)

web3.eth.getBlock("latest",
  function(e, d) {
    transactions.push.apply(transactions, d.transactions)
  }
)

for (var i = 0; i <= 10; i++) {
  web3.eth.getBlock(i,
    function(e, d) {
      transactions.push.apply(transactions, d.transactions)
    }
  )
}

transactions.forEach(
  function(e) {
    web3.eth.getTransactionReceipt(e,
      function(err, f) {
        console.log(f.contractAddress)
      }
    )
  }
)
```

## View
- List all existing contracts
-

## Fund
- Financial pay in to a search

## Join
- Submit an answer to a search

## Initiate
- Create a new contract
