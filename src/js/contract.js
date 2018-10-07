_web3 = new Web3(web3.currentProvider || new Web3.providers.HttpProvider("http://localhost:8545"));

byteCode = '608060405273ca35b7d915458ef540ade6068dfe2f44e8fa733c6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040516110d33803806110d3833981018060405281019080805182019291905050508060019080519060200190610090929190610271565b5033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550346003819055506000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020604051908101604052806000815250600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090805190602001906101bb929190610271565b5060043390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050600480549050600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050610316565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102b257805160ff19168380011785556102e0565b828001600101855582156102e0579182015b828111156102df5782518255916020019190600101906102c4565b5b5090506102ed91906102f1565b5090565b61031391905b8082111561030f5760008160009055506001016102f7565b5090565b90565b610dae806103256000396000f3006080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063058503d6146100a95780630aa050aa146101165780630ae6049d1461017f5780630dd0f5061461020f5780631922ff39146102b55780633d18b912146102f85780634d853ee514610323578063cc0bbc711461037a578063e8aca46a146103a5578063fcddd056146103e8575b600080fd5b3480156100b557600080fd5b506100d4600480360381019080803590602001909291905050506103f2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561012257600080fd5b5061017d600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610491565b005b34801561018b57600080fd5b506101946104ee565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101d45780820151818401526020810190506101b9565b50505050905090810190601f1680156102015780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561021b57600080fd5b5061023a60048036038101908080359060200190929190505050610590565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561027a57808201518184015260208101905061025f565b50505050905090810190601f1680156102a75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102c157600080fd5b506102f6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610706565b005b34801561030457600080fd5b5061030d610912565b6040518082815260200191505060405180910390f35b34801561032f57600080fd5b5061033861091c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561038657600080fd5b5061038f610941565b6040518082815260200191505060405180910390f35b3480156103b157600080fd5b506103e6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109aa565b005b6103f0610c36565b005b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561045057600080fd5b60048281548110151561045f57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905081600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090805190602001906104e9929190610c48565b505050565b606060018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105865780601f1061055b57610100808354040283529160200191610586565b820191906000526020600020905b81548152906001019060200180831161056957829003601f168201915b5050505050905090565b6060600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105ee57600080fd5b6007600060048481548110151561060157fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106fa5780601f106106cf576101008083540402835291602001916106fa565b820191906000526020600020905b8154815290600101906020018083116106dd57829003601f168201915b50505050509050919050565b6000806000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561076757600080fd5b8392506001600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054039150600290505b6001821180156107c6575062030d405a115b156108d1578273ffffffffffffffffffffffffffffffffffffffff166108fc826003548115156107f257fe5b049081150290604051600060405180830381858888f1935050505015801561081e573d6000803e3d6000fd5b50600281029050600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692506001600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540391506107b4565b816009819055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b6000600354905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561099f57600080fd5b600480549050905090565b600060043390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050803390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020908054610b84929190610cc8565b506020604051908101604052806000815250600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209080519060200190610be8929190610c48565b50600480549050600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b34600360008282540192505081905550565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c8957805160ff1916838001178555610cb7565b82800160010185558215610cb7579182015b82811115610cb6578251825591602001919060010190610c9b565b5b509050610cc49190610d1a565b5090565b828054828255906000526020600020908101928215610d095760005260206000209182015b82811115610d08578254825591600101919060010190610ced565b5b509050610d169190610d3f565b5090565b610d3c91905b80821115610d38576000816000905550600101610d20565b5090565b90565b610d7f91905b80821115610d7b57600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550600101610d45565b5090565b905600a165627a7a723058204d3d3bdfb6011d5f9cb469a33a59b0fc70c7994c4161624ae2696ac349a638180029'

abi = JSON.parse('[{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"viewAnswerMapAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"attempt","type":"string"}],"name":"attemptAnswer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getQuestionLink","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"viewAnswerMapAnswer","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"payOut","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"founder","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewNumTotalNodes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"referralCodeAlsoParentAddr","type":"address"}],"name":"addReferral","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"payIn","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[{"name":"_questionLink","type":"string"}],"payable":true,"stateMutability":"payable","type":"constructor"}]')

Contract = _web3.eth.contract(abi)