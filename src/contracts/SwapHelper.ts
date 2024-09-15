/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface SwapHelperInterface extends utils.Interface {
  functions: {
    "MAX_PRICE_LIMIT()": FunctionFragment;
    "MIN_PRICE_LIMIT()": FunctionFragment;
    "Swap(bool,int256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "MAX_PRICE_LIMIT" | "MIN_PRICE_LIMIT" | "Swap"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MAX_PRICE_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_PRICE_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "Swap",
    values: [boolean, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_PRICE_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_PRICE_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "Swap", data: BytesLike): Result;

  events: {};
}

export interface SwapHelper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SwapHelperInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    MAX_PRICE_LIMIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_PRICE_LIMIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    Swap(
      zeroForOne: boolean,
      amountToSwap: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  MAX_PRICE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_PRICE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

  Swap(
    zeroForOne: boolean,
    amountToSwap: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    MAX_PRICE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_PRICE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

    Swap(
      zeroForOne: boolean,
      amountToSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    MAX_PRICE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_PRICE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

    Swap(
      zeroForOne: boolean,
      amountToSwap: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_PRICE_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_PRICE_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    Swap(
      zeroForOne: boolean,
      amountToSwap: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}