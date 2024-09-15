/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SwapHelper, SwapHelperInterface } from "../SwapHelper";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "tokenA",
        type: "address",
        internalType: "contract MockERC20",
      },
      {
        name: "tokenB",
        type: "address",
        internalType: "contract MockERC20",
      },
      {
        name: "hook",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "MAX_PRICE_LIMIT",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint160",
        internalType: "uint160",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "MIN_PRICE_LIMIT",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint160",
        internalType: "uint160",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "Swap",
    inputs: [
      {
        name: "zeroForOne",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "amountToSwap",
        type: "int256",
        internalType: "int256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

const _bytecode =
  "0x60806040525f80546001600160a01b031990811673ca6dbbe730e31fdaacaa096821199eeed5ad84ae1790915560018054821673ec9537b6d66c14e872365ab0eae50df7b254d4fc17905560028054909116731f03f235e371202e49194f63c7096f5697848822179055348015610074575f80fd5b50604051610b64380380610b6483398101604081905261009391610600565b816001600160a01b0316836001600160a01b031611156100e257600480546001600160a01b038086166001600160a01b0319928316179092556003805492851692909116919091179055610113565b600480546001600160a01b038085166001600160a01b03199283161790925560038054928616929091169190911790555b60025460405163095ea7b360e01b81526001600160a01b0391821660048201525f1960248201529084169063095ea7b3906044016020604051808303815f875af1158015610163573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610187919061064a565b5060025460405163095ea7b360e01b81526001600160a01b0391821660048201525f1960248201529083169063095ea7b3906044016020604051808303815f875af11580156101d8573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101fc919061064a565b5060015460405163095ea7b360e01b81526001600160a01b0391821660048201525f1960248201529084169063095ea7b3906044016020604051808303815f875af115801561024d573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610271919061064a565b5060015460405163095ea7b360e01b81526001600160a01b0391821660048201525f1960248201529083169063095ea7b3906044016020604051808303815f875af11580156102c2573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102e6919061064a565b5060405163095ea7b360e01b81526001600160a01b0382811660048301525f19602483015284169063095ea7b3906044016020604051808303815f875af1158015610333573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610357919061064a565b5060405163095ea7b360e01b81526001600160a01b0382811660048301525f19602483015283169063095ea7b3906044016020604051808303815f875af11580156103a4573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103c8919061064a565b506040516340c10f1960e01b815233600482015268056bc75e2d6310000060248201526001600160a01b038416906340c10f19906044015f604051808303815f87803b158015610416575f80fd5b505af1158015610428573d5f803e3d5ffd5b50506040516340c10f1960e01b815233600482015268056bc75e2d6310000060248201526001600160a01b03851692506340c10f1991506044015f604051808303815f87803b158015610479575f80fd5b505af115801561048b573d5f803e3d5ffd5b50506040516340c10f1960e01b815230600482015268056bc75e2d6310000060248201526001600160a01b03861692506340c10f1991506044015f604051808303815f87803b1580156104dc575f80fd5b505af11580156104ee573d5f803e3d5ffd5b50506040516340c10f1960e01b815230600482015268056bc75e2d6310000060248201526001600160a01b03851692506340c10f1991506044015f604051808303815f87803b15801561053f575f80fd5b505af1158015610551573d5f803e3d5ffd5b50506040805160a0810182526003546001600160a01b03908116808352600454821660208401819052610bb8948401949094526078606084015295166080909101819052600580546001600160a01b03199081169096179055600680546001600160b81b03191690921761017760a31b1762ffffff60b81b1916600f60bb1b1790915560078054909416179092555061067092505050565b6001600160a01b03811681146105fd575f80fd5b50565b5f805f60608486031215610612575f80fd5b835161061d816105e9565b602085015190935061062e816105e9565b604085015190925061063f816105e9565b809150509250925092565b5f6020828403121561065a575f80fd5b81518015158114610669575f80fd5b9392505050565b6104e78061067d5f395ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c8063542524dd146100435780638c5c2eba14610067578063c7b8e15d1461007c575b5f80fd5b61004b610084565b6040516001600160a01b03909116815260200160405180910390f35b61007a610075366004610318565b6100a6565b005b61004b610149565b6100a3600173fffd8963efd1fc6a506488495d951d5263988d2661035a565b81565b6040805160a0810182526005546001600160a01b03908116825260065480821660208085019190915262ffffff74010000000000000000000000000000000000000000830416848601527701000000000000000000000000000000000000000000000090910460020b60608401526007549091166080830152825133818301528351808203909201825283019092529061014282858584610159565b5050505050565b6100a36401000276a3600161037f565b5f80848015610170575085516001600160a01b0316155b905080156101f157835f136101f15760405162461bcd60e51b815260206004820152603960248201527f55736520737761704e6174697665496e707574282920666f72206e617469766560448201527f2d746f6b656e2065786163742d6f757470757420737761707300000000000000606482015260840160405180910390fd5b5f816101fd575f610206565b6102068561039e565b600154604080516060810182528915158152602081018990529293506001600160a01b0390911691632229d0b49184918b9181018b6102635761025e600173fffd8963efd1fc6a506488495d951d5263988d2661035a565b610273565b6102736401000276a3600161037f565b6001600160a01b031690526040805180820182525f808252602082015290517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b1681526102cc939291908b906004016103e6565b60206040518083038185885af11580156102e8573d5f803e3d5ffd5b50505050506040513d601f19601f8201168201806040525081019061030d919061049a565b979650505050505050565b5f8060408385031215610329575f80fd5b82358015158114610338575f80fd5b946020939093013593505050565b634e487b7160e01b5f52601160045260245ffd5b6001600160a01b03828116828216039081111561037957610379610346565b92915050565b6001600160a01b03818116838216019081111561037957610379610346565b5f600160ff1b82016103b2576103b2610346565b505f0390565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b6001600160a01b0385511681526001600160a01b03602086015116602082015262ffffff6040860151166040820152606085015160020b60608201526001600160a01b03608086015116608082015261046160a0820185805115158252602080820151908301526040908101516001600160a01b0316910152565b82511515610100820152602083015115156101208201526101606101408201525f6104906101608301846103b8565b9695505050505050565b5f602082840312156104aa575f80fd5b505191905056fea264697066735822122016257ab43992d4f0d7b342afb990267cb25d5a264a9086d1efda49a6c1f6a95664736f6c634300081a0033";

type SwapHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SwapHelper__factory extends ContractFactory {
  constructor(...args: SwapHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    tokenA: string,
    tokenB: string,
    hook: string,
    overrides?: Overrides & { from?: string }
  ): Promise<SwapHelper> {
    return super.deploy(
      tokenA,
      tokenB,
      hook,
      overrides || {}
    ) as Promise<SwapHelper>;
  }
  override getDeployTransaction(
    tokenA: string,
    tokenB: string,
    hook: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(tokenA, tokenB, hook, overrides || {});
  }
  override attach(address: string): SwapHelper {
    return super.attach(address) as SwapHelper;
  }
  override connect(signer: Signer): SwapHelper__factory {
    return super.connect(signer) as SwapHelper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapHelperInterface {
    return new utils.Interface(_abi) as SwapHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapHelper {
    return new Contract(address, _abi, signerOrProvider) as SwapHelper;
  }
}