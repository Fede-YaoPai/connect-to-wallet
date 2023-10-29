import { Component } from '@angular/core';
import { MetamaskHelper } from '../../utils/metamask-helper';
import { MetamaskWalletService } from '../../services/metamask-wallet/metamask-wallet.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private metamaskWalletService: MetamaskWalletService) {}

  public async connectToMetamask(): Promise<void> {
    if (MetamaskHelper.metamaskInstalled()) {
      const accountAddress: string | undefined = await MetamaskHelper.getAccount(0);

      if (accountAddress) {
        const balance = await MetamaskHelper.getAccountBalance(accountAddress);

        this.metamaskWalletService.setMetamaskWallet({
          address: accountAddress,
          balance: balance
        });
      }
    } else {
      console.log('Please install MetaMask!');
    }
  }

}
