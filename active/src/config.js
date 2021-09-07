export const TODO_LIST_ADDRESS = '0xf32CDab2302392D19f744894Df0D7F4507192276'
export const TODO_LIST_ABI = [{
  "contractName": "TodoList",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tasks",
      "outputs": [
        {
          "name": "id",
          "type": "uint256"
        },
        {
          "name": "content",
          "type": "string"
        },
        {
          "name": "completed",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x8d977672"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "taskCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xb6cb58a5"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "content",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "completed",
          "type": "bool"
        }
      ],
      "name": "TaskCreated",
      "type": "event",
      "signature": "0x05d0fb833127fc08168556d0e7ca9554fc3f6bc843b3b7d2bf1c35aea6bab660"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "completed",
          "type": "bool"
        }
      ],
      "name": "TaskCompleted",
      "type": "event",
      "signature": "0xe21fa966ca5cd02748c0752352d18c48165e61cb55b4c29cccf924b5a95fcff1"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_content",
          "type": "string"
        }
      ],
      "name": "createTask",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x111002aa"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "toggleCompleted",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x455f5024"
    }
  ],
  "bytecode": "0x60806040526000805534801561001457600080fd5b5060408051808201909152601c81527f436865636b206f75742064617070756e69766572736974792e636f6d00000000602082015261005b90640100000000610060810204565b61021f565b60008054600190810180835560408051606081018252828152602080820187815282840187905293865284815291909420845181559151805192936100ad93908501929190910190610184565b5060408201518160020160006101000a81548160ff0219169083151502179055509050507f05d0fb833127fc08168556d0e7ca9554fc3f6bc843b3b7d2bf1c35aea6bab660600054826000604051808481526020018060200183151515158152602001828103825284818151815260200191508051906020019080838360005b8381101561014557818101518382015260200161012d565b50505050905090810190601f1680156101725780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a150565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101c557805160ff19168380011785556101f2565b828001600101855582156101f2579182015b828111156101f25782518255916020019190600101906101d7565b506101fe929150610202565b5090565b61021c91905b808211156101fe5760008155600101610208565b90565b6106448061022e6000396000f3fe6080604052600436106100615763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663111002aa8114610066578063455f50241461011b5780638d97767214610145578063b6cb58a5146101f9575b600080fd5b34801561007257600080fd5b506101196004803603602081101561008957600080fd5b8101906020810181356401000000008111156100a457600080fd5b8201836020820111156100b657600080fd5b803590602001918460018302840111640100000000831117156100d857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610220945050505050565b005b34801561012757600080fd5b506101196004803603602081101561013e57600080fd5b5035610344565b34801561015157600080fd5b5061016f6004803603602081101561016857600080fd5b50356104a4565b604051808481526020018060200183151515158152602001828103825284818151815260200191508051906020019080838360005b838110156101bc5781810151838201526020016101a4565b50505050905090810190601f1680156101e95780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b34801561020557600080fd5b5061020e610553565b60408051918252519081900360200190f35b600080546001908101808355604080516060810182528281526020808201878152828401879052938652848152919094208451815591518051929361026d93908501929190910190610559565b5060408201518160020160006101000a81548160ff0219169083151502179055509050507f05d0fb833127fc08168556d0e7ca9554fc3f6bc843b3b7d2bf1c35aea6bab660600054826000604051808481526020018060200183151515158152602001828103825284818151815260200191508051906020019080838360005b838110156103055781810151838201526020016102ed565b50505050905090810190601f1680156103325780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a150565b61034c6105d7565b60008281526001602081815260409283902083516060810185528154815281840180548651600296821615610100026000190190911695909504601f810185900485028601850190965285855290949193858401939092908301828280156103f55780601f106103ca576101008083540402835291602001916103f5565b820191906000526020600020905b8154815290600101906020018083116103d857829003601f168201915b50505091835250506002919091015460ff1615156020918201526040808301805115905260008581526001808452919020835181558383015180519495508594919361044693850192910190610559565b50604091820151600291909101805460ff1916911515919091179055818101518151848152901515602082015281517fe21fa966ca5cd02748c0752352d18c48165e61cb55b4c29cccf924b5a95fcff1929181900390910190a15050565b600160208181526000928352604092839020805481840180548651600296821615610100026000190190911695909504601f810185900485028601850190965285855290949193929091908301828280156105405780601f1061051557610100808354040283529160200191610540565b820191906000526020600020905b81548152906001019060200180831161052357829003601f168201915b5050506002909301549192505060ff1683565b60005481565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061059a57805160ff19168380011785556105c7565b828001600101855582156105c7579182015b828111156105c75782518255916020019190600101906105ac565b506105d39291506105fb565b5090565b60606040519081016040528060008152602001606081526020016000151581525090565b61061591905b808211156105d35760008155600101610601565b9056fea165627a7a7230582025f53d17a779dfaf4ff4496d0268dcf3e9d1abf11eec32f794ea977e134373d70029",
  "deployedBytecode": "0x6080604052600436106100615763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663111002aa8114610066578063455f50241461011b5780638d97767214610145578063b6cb58a5146101f9575b600080fd5b34801561007257600080fd5b506101196004803603602081101561008957600080fd5b8101906020810181356401000000008111156100a457600080fd5b8201836020820111156100b657600080fd5b803590602001918460018302840111640100000000831117156100d857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610220945050505050565b005b34801561012757600080fd5b506101196004803603602081101561013e57600080fd5b5035610344565b34801561015157600080fd5b5061016f6004803603602081101561016857600080fd5b50356104a4565b604051808481526020018060200183151515158152602001828103825284818151815260200191508051906020019080838360005b838110156101bc5781810151838201526020016101a4565b50505050905090810190601f1680156101e95780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b34801561020557600080fd5b5061020e610553565b60408051918252519081900360200190f35b600080546001908101808355604080516060810182528281526020808201878152828401879052938652848152919094208451815591518051929361026d93908501929190910190610559565b5060408201518160020160006101000a81548160ff0219169083151502179055509050507f05d0fb833127fc08168556d0e7ca9554fc3f6bc843b3b7d2bf1c35aea6bab660600054826000604051808481526020018060200183151515158152602001828103825284818151815260200191508051906020019080838360005b838110156103055781810151838201526020016102ed565b50505050905090810190601f1680156103325780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a150565b61034c6105d7565b60008281526001602081815260409283902083516060810185528154815281840180548651600296821615610100026000190190911695909504601f810185900485028601850190965285855290949193858401939092908301828280156103f55780601f106103ca576101008083540402835291602001916103f5565b820191906000526020600020905b8154815290600101906020018083116103d857829003601f168201915b50505091835250506002919091015460ff1615156020918201526040808301805115905260008581526001808452919020835181558383015180519495508594919361044693850192910190610559565b50604091820151600291909101805460ff1916911515919091179055818101518151848152901515602082015281517fe21fa966ca5cd02748c0752352d18c48165e61cb55b4c29cccf924b5a95fcff1929181900390910190a15050565b600160208181526000928352604092839020805481840180548651600296821615610100026000190190911695909504601f810185900485028601850190965285855290949193929091908301828280156105405780601f1061051557610100808354040283529160200191610540565b820191906000526020600020905b81548152906001019060200180831161052357829003601f168201915b5050506002909301549192505060ff1683565b60005481565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061059a57805160ff19168380011785556105c7565b828001600101855582156105c7579182015b828111156105c75782518255916020019190600101906105ac565b506105d39291506105fb565b5090565b60606040519081016040528060008152602001606081526020016000151581525090565b61061591905b808211156105d35760008155600101610601565b9056fea165627a7a7230582025f53d17a779dfaf4ff4496d0268dcf3e9d1abf11eec32f794ea977e134373d70029",
  "sourceMap": "25:764:1:-;;;71:1;47:25;;330:74;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;357:42:1;;;;;;;;;;;;;;;;;;;:10;;;;:42;:::i;:::-;25:764;;408:181;465:9;:12;;;;;;;;;502:32;;;;;;;;;;;;;;;;;;;;;;;;483:16;;;;;;;;;;:51;;;;;;;;:16;;:51;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;545:39;557:9;;568:8;578:5;545:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;545:39:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;408:181;:::o;25:764::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;25:764:1;;;-1:-1:-1;25:764:1;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "25:764:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;408:181;;8:9:-1;5:2;;;30:1;27;20:12;5:2;408:181:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;408:181:1;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;408:181:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;408:181:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;408:181:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;408:181:1;;-1:-1:-1;408:181:1;;-1:-1:-1;;;;;408:181:1;;;593:193;;8:9:-1;5:2;;;30:1;27;20:12;5:2;593:193:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;593:193:1;;;151:34;;8:9:-1;5:2;;;30:1;27;20:12;5:2;151:34:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;151:34:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;151:34:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;47:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;47:25:1;;;;;;;;;;;;;;;;;;;;408:181;465:9;:12;;;;;;;;;502:32;;;;;;;;;;;;;;;;;;;;;;;;483:16;;;;;;;;;;:51;;;;;;;;:16;;:51;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;545:39;557:9;;568:8;578:5;545:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;545:39:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;408:181;:::o;593:193::-;641:17;;:::i;:::-;661:10;;;;:5;:10;;;;;;;;;641:30;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;641:30:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;661:10;;641:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;641:30:1;;;-1:-1:-1;;641:30:1;;;;;;;;;;;;;;;696:15;;;;;;695:16;677:34;;641:30;717:10;;;641:30;717:10;;;;;;:18;;;;;;;;;;641:30;;-1:-1:-1;641:30:1;;717:10;;:18;;;;;;;;;:::i;:::-;-1:-1:-1;717:18:1;;;;;;;;;;;;-1:-1:-1;;717:18:1;;;;;;;;;;765:15;;;;746:35;;;;;;;;;;;;;;;;;;;;;;;;;593:193;;:::o;151:34::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;151:34:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;151:34:1;;;;;;;-1:-1:-1;;151:34:1;;;:::o;47:25::-;;;;:::o;25:764::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;25:764:1;;;-1:-1:-1;25:764:1;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.5.0;\n\ncontract TodoList {\n  uint public taskCount = 0;\n\n  struct Task {\n    uint id;\n    string content;\n    bool completed;\n  }\n\n  mapping(uint => Task) public tasks;\n\n  event TaskCreated(\n    uint id,\n    string content,\n    bool completed\n  );\n\n  event TaskCompleted(\n    uint id,\n    bool completed\n  );\n\n  constructor() public {\n    createTask(\"Check out dappuniversity.com\");\n  }\n\n  function createTask(string memory _content) public {\n    taskCount ++;\n    tasks[taskCount] = Task(taskCount, _content, false);\n    emit TaskCreated(taskCount, _content, false);\n  }\n\n  function toggleCompleted(uint _id) public {\n    Task memory _task = tasks[_id];\n    _task.completed = !_task.completed;\n    tasks[_id] = _task;\n    emit TaskCompleted(_id, _task.completed);\n  }\n\n}\n",
  "sourcePath": "/Users/gregory/code/eth-todo-list/contracts/TodoList.sol",
  "ast": {
    "absolutePath": "/Users/gregory/code/eth-todo-list/contracts/TodoList.sol",
    "exportedSymbols": {
      "TodoList": [
        152
      ]
    },
    "id": 153,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 152,
        "linearizedBaseContracts": [
          152
        ],
        "name": "TodoList",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 61,
            "name": "taskCount",
            "nodeType": "VariableDeclaration",
            "scope": 152,
            "src": "47:25:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 59,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "47:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 60,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "71:1:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "public"
          },
          {
            "canonicalName": "TodoList.Task",
            "id": 68,
            "members": [
              {
                "constant": false,
                "id": 63,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 68,
                "src": "95:7:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 62,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "95:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 65,
                "name": "content",
                "nodeType": "VariableDeclaration",
                "scope": 68,
                "src": "108:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 64,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "108:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 67,
                "name": "completed",
                "nodeType": "VariableDeclaration",
                "scope": 68,
                "src": "128:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 66,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "128:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Task",
            "nodeType": "StructDefinition",
            "scope": 152,
            "src": "77:70:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 72,
            "name": "tasks",
            "nodeType": "VariableDeclaration",
            "scope": 152,
            "src": "151:34:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$68_storage_$",
              "typeString": "mapping(uint256 => struct TodoList.Task)"
            },
            "typeName": {
              "id": 71,
              "keyType": {
                "id": 69,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "159:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "151:21:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$68_storage_$",
                "typeString": "mapping(uint256 => struct TodoList.Task)"
              },
              "valueType": {
                "contractScope": null,
                "id": 70,
                "name": "Task",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 68,
                "src": "167:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Task_$68_storage_ptr",
                  "typeString": "struct TodoList.Task"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 80,
            "name": "TaskCreated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 79,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 74,
                  "indexed": false,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "213:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 73,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "213:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 76,
                  "indexed": false,
                  "name": "content",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "226:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 75,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 78,
                  "indexed": false,
                  "name": "completed",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "246:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 77,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "246:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "207:57:1"
            },
            "src": "190:75:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 86,
            "name": "TaskCompleted",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 85,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 82,
                  "indexed": false,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "294:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 81,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "294:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 84,
                  "indexed": false,
                  "name": "completed",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "307:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 83,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "307:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "288:37:1"
            },
            "src": "269:57:1"
          },
          {
            "body": {
              "id": 93,
              "nodeType": "Block",
              "src": "351:53:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "436865636b206f75742064617070756e69766572736974792e636f6d",
                        "id": 90,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "368:30:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_6bf21434db4ae32d8b6f41fe5650c70c650f4c73d044c30519aadae0093e93e7",
                          "typeString": "literal_string \"Check out dappuniversity.com\""
                        },
                        "value": "Check out dappuniversity.com"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_6bf21434db4ae32d8b6f41fe5650c70c650f4c73d044c30519aadae0093e93e7",
                          "typeString": "literal_string \"Check out dappuniversity.com\""
                        }
                      ],
                      "id": 89,
                      "name": "createTask",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 119,
                      "src": "357:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 91,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "357:42:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92,
                  "nodeType": "ExpressionStatement",
                  "src": "357:42:1"
                }
              ]
            },
            "documentation": null,
            "id": 94,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 87,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "341:2:1"
            },
            "returnParameters": {
              "id": 88,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "351:0:1"
            },
            "scope": 152,
            "src": "330:74:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 118,
              "nodeType": "Block",
              "src": "459:130:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "465:12:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 99,
                      "name": "taskCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61,
                      "src": "465:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 101,
                  "nodeType": "ExpressionStatement",
                  "src": "465:12:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 110,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 102,
                        "name": "tasks",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 72,
                        "src": "483:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$68_storage_$",
                          "typeString": "mapping(uint256 => struct TodoList.Task storage ref)"
                        }
                      },
                      "id": 104,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 103,
                        "name": "taskCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61,
                        "src": "489:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "483:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$68_storage",
                        "typeString": "struct TodoList.Task storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 106,
                          "name": "taskCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61,
                          "src": "507:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 107,
                          "name": "_content",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 96,
                          "src": "518:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 108,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "528:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 105,
                        "name": "Task",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68,
                        "src": "502:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Task_$68_storage_ptr_$",
                          "typeString": "type(struct TodoList.Task storage pointer)"
                        }
                      },
                      "id": 109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "502:32:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$68_memory",
                        "typeString": "struct TodoList.Task memory"
                      }
                    },
                    "src": "483:51:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Task_$68_storage",
                      "typeString": "struct TodoList.Task storage ref"
                    }
                  },
                  "id": 111,
                  "nodeType": "ExpressionStatement",
                  "src": "483:51:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 113,
                        "name": "taskCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61,
                        "src": "557:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 114,
                        "name": "_content",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 96,
                        "src": "568:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 115,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "578:5:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 112,
                      "name": "TaskCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 80,
                      "src": "545:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_bool_$returns$__$",
                        "typeString": "function (uint256,string memory,bool)"
                      }
                    },
                    "id": 116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "545:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 117,
                  "nodeType": "EmitStatement",
                  "src": "540:44:1"
                }
              ]
            },
            "documentation": null,
            "id": 119,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createTask",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 97,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 96,
                  "name": "_content",
                  "nodeType": "VariableDeclaration",
                  "scope": 119,
                  "src": "428:22:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 95,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "428:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "427:24:1"
            },
            "returnParameters": {
              "id": 98,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "459:0:1"
            },
            "scope": 152,
            "src": "408:181:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 150,
              "nodeType": "Block",
              "src": "635:151:1",
              "statements": [
                {
                  "assignments": [
                    125
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 125,
                      "name": "_task",
                      "nodeType": "VariableDeclaration",
                      "scope": 150,
                      "src": "641:17:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$68_memory_ptr",
                        "typeString": "struct TodoList.Task"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 124,
                        "name": "Task",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 68,
                        "src": "641:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Task_$68_storage_ptr",
                          "typeString": "struct TodoList.Task"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 129,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 126,
                      "name": "tasks",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 72,
                      "src": "661:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$68_storage_$",
                        "typeString": "mapping(uint256 => struct TodoList.Task storage ref)"
                      }
                    },
                    "id": 128,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 127,
                      "name": "_id",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121,
                      "src": "667:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "661:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Task_$68_storage",
                      "typeString": "struct TodoList.Task storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "641:30:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 130,
                        "name": "_task",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125,
                        "src": "677:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Task_$68_memory_ptr",
                          "typeString": "struct TodoList.Task memory"
                        }
                      },
                      "id": 132,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "completed",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 67,
                      "src": "677:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 135,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "695:16:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 133,
                          "name": "_task",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 125,
                          "src": "696:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Task_$68_memory_ptr",
                            "typeString": "struct TodoList.Task memory"
                          }
                        },
                        "id": 134,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "completed",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 67,
                        "src": "696:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "677:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 137,
                  "nodeType": "ExpressionStatement",
                  "src": "677:34:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 138,
                        "name": "tasks",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 72,
                        "src": "717:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$68_storage_$",
                          "typeString": "mapping(uint256 => struct TodoList.Task storage ref)"
                        }
                      },
                      "id": 140,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 139,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121,
                        "src": "723:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "717:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$68_storage",
                        "typeString": "struct TodoList.Task storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 141,
                      "name": "_task",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125,
                      "src": "730:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$68_memory_ptr",
                        "typeString": "struct TodoList.Task memory"
                      }
                    },
                    "src": "717:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Task_$68_storage",
                      "typeString": "struct TodoList.Task storage ref"
                    }
                  },
                  "id": 143,
                  "nodeType": "ExpressionStatement",
                  "src": "717:18:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 145,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121,
                        "src": "760:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 146,
                          "name": "_task",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 125,
                          "src": "765:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Task_$68_memory_ptr",
                            "typeString": "struct TodoList.Task memory"
                          }
                        },
                        "id": 147,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "completed",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 67,
                        "src": "765:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 144,
                      "name": "TaskCompleted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 86,
                      "src": "746:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_bool_$returns$__$",
                        "typeString": "function (uint256,bool)"
                      }
                    },
                    "id": 148,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "746:35:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 149,
                  "nodeType": "EmitStatement",
                  "src": "741:40:1"
                }
              ]
            },
            "documentation": null,
            "id": 151,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toggleCompleted",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 122,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121,
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "scope": 151,
                  "src": "618:8:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 120,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "618:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "617:10:1"
            },
            "returnParameters": {
              "id": 123,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "635:0:1"
            },
            "scope": 152,
            "src": "593:193:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 153,
        "src": "25:764:1"
      }
    ],
    "src": "0:790:1"
  },
  "legacyAST": {
    "absolutePath": "/Users/gregory/code/eth-todo-list/contracts/TodoList.sol",
    "exportedSymbols": {
      "TodoList": [
        152
      ]
    },
    "id": 153,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 152,
        "linearizedBaseContracts": [
          152
        ],
        "name": "TodoList",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 61,
            "name": "taskCount",
            "nodeType": "VariableDeclaration",
            "scope": 152,
            "src": "47:25:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 59,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "47:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 60,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "71:1:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "public"
          },
          {
            "canonicalName": "TodoList.Task",
            "id": 68,
            "members": [
              {
                "constant": false,
                "id": 63,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 68,
                "src": "95:7:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 62,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "95:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 65,
                "name": "content",
                "nodeType": "VariableDeclaration",
                "scope": 68,
                "src": "108:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 64,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "108:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 67,
                "name": "completed",
                "nodeType": "VariableDeclaration",
                "scope": 68,
                "src": "128:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 66,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "128:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Task",
            "nodeType": "StructDefinition",
            "scope": 152,
            "src": "77:70:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 72,
            "name": "tasks",
            "nodeType": "VariableDeclaration",
            "scope": 152,
            "src": "151:34:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$68_storage_$",
              "typeString": "mapping(uint256 => struct TodoList.Task)"
            },
            "typeName": {
              "id": 71,
              "keyType": {
                "id": 69,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "159:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "151:21:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$68_storage_$",
                "typeString": "mapping(uint256 => struct TodoList.Task)"
              },
              "valueType": {
                "contractScope": null,
                "id": 70,
                "name": "Task",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 68,
                "src": "167:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Task_$68_storage_ptr",
                  "typeString": "struct TodoList.Task"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 80,
            "name": "TaskCreated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 79,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 74,
                  "indexed": false,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "213:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 73,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "213:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 76,
                  "indexed": false,
                  "name": "content",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "226:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 75,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 78,
                  "indexed": false,
                  "name": "completed",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "246:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 77,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "246:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "207:57:1"
            },
            "src": "190:75:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 86,
            "name": "TaskCompleted",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 85,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 82,
                  "indexed": false,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "294:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 81,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "294:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 84,
                  "indexed": false,
                  "name": "completed",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "307:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 83,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "307:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "288:37:1"
            },
            "src": "269:57:1"
          },
          {
            "body": {
              "id": 93,
              "nodeType": "Block",
              "src": "351:53:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "436865636b206f75742064617070756e69766572736974792e636f6d",
                        "id": 90,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "368:30:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_6bf21434db4ae32d8b6f41fe5650c70c650f4c73d044c30519aadae0093e93e7",
                          "typeString": "literal_string \"Check out dappuniversity.com\""
                        },
                        "value": "Check out dappuniversity.com"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_6bf21434db4ae32d8b6f41fe5650c70c650f4c73d044c30519aadae0093e93e7",
                          "typeString": "literal_string \"Check out dappuniversity.com\""
                        }
                      ],
                      "id": 89,
                      "name": "createTask",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 119,
                      "src": "357:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 91,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "357:42:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92,
                  "nodeType": "ExpressionStatement",
                  "src": "357:42:1"
                }
              ]
            },
            "documentation": null,
            "id": 94,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 87,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "341:2:1"
            },
            "returnParameters": {
              "id": 88,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "351:0:1"
            },
            "scope": 152,
            "src": "330:74:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 118,
              "nodeType": "Block",
              "src": "459:130:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "465:12:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 99,
                      "name": "taskCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61,
                      "src": "465:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 101,
                  "nodeType": "ExpressionStatement",
                  "src": "465:12:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 110,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 102,
                        "name": "tasks",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 72,
                        "src": "483:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$68_storage_$",
                          "typeString": "mapping(uint256 => struct TodoList.Task storage ref)"
                        }
                      },
                      "id": 104,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 103,
                        "name": "taskCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61,
                        "src": "489:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "483:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$68_storage",
                        "typeString": "struct TodoList.Task storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 106,
                          "name": "taskCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61,
                          "src": "507:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 107,
                          "name": "_content",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 96,
                          "src": "518:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 108,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "528:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 105,
                        "name": "Task",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68,
                        "src": "502:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Task_$68_storage_ptr_$",
                          "typeString": "type(struct TodoList.Task storage pointer)"
                        }
                      },
                      "id": 109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "502:32:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$68_memory",
                        "typeString": "struct TodoList.Task memory"
                      }
                    },
                    "src": "483:51:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Task_$68_storage",
                      "typeString": "struct TodoList.Task storage ref"
                    }
                  },
                  "id": 111,
                  "nodeType": "ExpressionStatement",
                  "src": "483:51:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 113,
                        "name": "taskCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61,
                        "src": "557:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 114,
                        "name": "_content",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 96,
                        "src": "568:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 115,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "578:5:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 112,
                      "name": "TaskCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 80,
                      "src": "545:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_bool_$returns$__$",
                        "typeString": "function (uint256,string memory,bool)"
                      }
                    },
                    "id": 116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "545:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 117,
                  "nodeType": "EmitStatement",
                  "src": "540:44:1"
                }
              ]
            },
            "documentation": null,
            "id": 119,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createTask",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 97,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 96,
                  "name": "_content",
                  "nodeType": "VariableDeclaration",
                  "scope": 119,
                  "src": "428:22:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 95,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "428:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "427:24:1"
            },
            "returnParameters": {
              "id": 98,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "459:0:1"
            },
            "scope": 152,
            "src": "408:181:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 150,
              "nodeType": "Block",
              "src": "635:151:1",
              "statements": [
                {
                  "assignments": [
                    125
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 125,
                      "name": "_task",
                      "nodeType": "VariableDeclaration",
                      "scope": 150,
                      "src": "641:17:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$68_memory_ptr",
                        "typeString": "struct TodoList.Task"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 124,
                        "name": "Task",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 68,
                        "src": "641:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Task_$68_storage_ptr",
                          "typeString": "struct TodoList.Task"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 129,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 126,
                      "name": "tasks",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 72,
                      "src": "661:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$68_storage_$",
                        "typeString": "mapping(uint256 => struct TodoList.Task storage ref)"
                      }
                    },
                    "id": 128,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 127,
                      "name": "_id",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121,
                      "src": "667:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "661:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Task_$68_storage",
                      "typeString": "struct TodoList.Task storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "641:30:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 130,
                        "name": "_task",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125,
                        "src": "677:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Task_$68_memory_ptr",
                          "typeString": "struct TodoList.Task memory"
                        }
                      },
                      "id": 132,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "completed",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 67,
                      "src": "677:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 135,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "695:16:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 133,
                          "name": "_task",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 125,
                          "src": "696:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Task_$68_memory_ptr",
                            "typeString": "struct TodoList.Task memory"
                          }
                        },
                        "id": 134,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "completed",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 67,
                        "src": "696:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "677:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 137,
                  "nodeType": "ExpressionStatement",
                  "src": "677:34:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 138,
                        "name": "tasks",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 72,
                        "src": "717:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$68_storage_$",
                          "typeString": "mapping(uint256 => struct TodoList.Task storage ref)"
                        }
                      },
                      "id": 140,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 139,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121,
                        "src": "723:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "717:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$68_storage",
                        "typeString": "struct TodoList.Task storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 141,
                      "name": "_task",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125,
                      "src": "730:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$68_memory_ptr",
                        "typeString": "struct TodoList.Task memory"
                      }
                    },
                    "src": "717:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Task_$68_storage",
                      "typeString": "struct TodoList.Task storage ref"
                    }
                  },
                  "id": 143,
                  "nodeType": "ExpressionStatement",
                  "src": "717:18:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 145,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121,
                        "src": "760:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 146,
                          "name": "_task",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 125,
                          "src": "765:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Task_$68_memory_ptr",
                            "typeString": "struct TodoList.Task memory"
                          }
                        },
                        "id": 147,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "completed",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 67,
                        "src": "765:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 144,
                      "name": "TaskCompleted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 86,
                      "src": "746:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_bool_$returns$__$",
                        "typeString": "function (uint256,bool)"
                      }
                    },
                    "id": 148,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "746:35:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 149,
                  "nodeType": "EmitStatement",
                  "src": "741:40:1"
                }
              ]
            },
            "documentation": null,
            "id": 151,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toggleCompleted",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 122,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121,
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "scope": 151,
                  "src": "618:8:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 120,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "618:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "617:10:1"
            },
            "returnParameters": {
              "id": 123,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "635:0:1"
            },
            "scope": 152,
            "src": "593:193:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 153,
        "src": "25:764:1"
      }
    ],
    "src": "0:790:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.0+commit.1d4f565a.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {
        "0x05d0fb833127fc08168556d0e7ca9554fc3f6bc843b3b7d2bf1c35aea6bab660": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "id",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "content",
              "type": "string"
            },
            {
              "indexed": false,
              "name": "completed",
              "type": "bool"
            }
          ],
          "name": "TaskCreated",
          "type": "event",
          "signature": "0x05d0fb833127fc08168556d0e7ca9554fc3f6bc843b3b7d2bf1c35aea6bab660"
        },
        "0xe21fa966ca5cd02748c0752352d18c48165e61cb55b4c29cccf924b5a95fcff1": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "id",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "completed",
              "type": "bool"
            }
          ],
          "name": "TaskCompleted",
          "type": "event",
          "signature": "0xe21fa966ca5cd02748c0752352d18c48165e61cb55b4c29cccf924b5a95fcff1"
        }
      },
      "links": {},
      "address": "0xf32CDab2302392D19f744894Df0D7F4507192276",
      "transactionHash": "0x33790ae402226069f982d3677c26ea39caa3369cc30baee747b8f484ab401076"
    }
  },
  "schemaVersion": "3.0.1",
  "updatedAt": "2019-01-30T16:21:17.188Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}
]