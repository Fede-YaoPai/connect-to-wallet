export class MetamaskHelper {
  static async getAccounts(): Promise<Array<string>> {
    return await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  static async getAccount(accountIndex: number): Promise<string | undefined> {
    return (await this.getAccounts())[accountIndex] ?? undefined;
  }

  static async getAccountBalance(accountAddress: string): Promise<string> {
    return await window.ethereum.request({
      method: "eth_getBalance",
      params: [
        accountAddress,
        null
      ]
    });
  }

  static metamaskInstalled(): boolean {
    return typeof window.ethereum !== 'undefined';
  }
}
