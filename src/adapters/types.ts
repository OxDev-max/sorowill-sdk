export type {
  SignTransactionOptions,
  WalletAdapter,
  WalletConnection,
} from '../wallet';

export class WalletNetworkMismatchError extends Error {
  readonly expectedNetwork: string;
  readonly actualNetwork: string;

  constructor(expectedNetwork: string, actualNetwork: string) {
    super(
      `Wallet network mismatch: expected "${expectedNetwork}" but wallet is connected to "${actualNetwork}". ` +
        'Switch the wallet to the configured network before connecting.',
    );
    this.name = 'WalletNetworkMismatchError';
    this.expectedNetwork = expectedNetwork;
    this.actualNetwork = actualNetwork;
  }
}
