export const address="0xECe62cd9B1d5a795C132601FeB5ff69623b6837a"
export const abi= [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "AddBook",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_author",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_year",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "finished",
          "type": "bool"
        }
      ],
      "name": "addBook",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "bookToOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getFinishedBooks",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "author",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "year",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isFinished",
              "type": "bool"
            }
          ],
          "internalType": "struct Library.Book[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getUnfinishedBooks",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "author",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "year",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isFinished",
              "type": "bool"
            }
          ],
          "internalType": "struct Library.Book[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "bookId",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "finished",
          "type": "bool"
        }
      ],
      "name": "setFinished",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]