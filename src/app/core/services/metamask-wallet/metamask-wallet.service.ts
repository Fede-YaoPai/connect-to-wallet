import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MetamaskWallet } from '../../models/metamask-wallet.models';

@Injectable({
  providedIn: 'root'
})
export class MetamaskWalletService {

  private readonly _metamaskWallet: BehaviorSubject<MetamaskWallet | null>;
  public readonly metamaskWallet: Observable<MetamaskWallet | null>;

  constructor() {
    this._metamaskWallet = new BehaviorSubject<MetamaskWallet | null>(null);
    this.metamaskWallet = this._metamaskWallet.asObservable();
  }

  public setMetamaskWallet(newValue: MetamaskWallet): void {
    this._metamaskWallet.next(newValue);
  }

  public setMetamaskWalletAddress(newAddress: string): void {
    const currentValue: MetamaskWallet | null = this.getMetamaskWallet();

    if (currentValue) {
      this._metamaskWallet.next({
        ...currentValue,
        address: newAddress
      });
    }
  }

  public setMetamaskWalletBalance(newBalance: string): void {
    const currentValue: MetamaskWallet | null = this.getMetamaskWallet();

    if (currentValue) {
      this._metamaskWallet.next({
        ...currentValue,
        balance: newBalance
      });
    }
  }

  public getMetamaskWallet(): MetamaskWallet | null {
    return this._metamaskWallet.getValue();
  }

  public getMetamaskWalletAddress(): string | null {
    return this.getMetamaskWallet()?.address || null;
  }

  public getMetamaskWalletBalance(): string | null {
    return this.getMetamaskWallet()?.balance || null;
  }
}
