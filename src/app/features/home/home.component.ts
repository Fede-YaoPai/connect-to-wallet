import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MetamaskWallet } from 'src/app/core/models/metamask-wallet.models';
import { MetamaskWalletService } from 'src/app/core/services/metamask-wallet/metamask-wallet.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public readonly metamaskWallet$: Observable<MetamaskWallet | null>;

  constructor(private metamaskWalletService: MetamaskWalletService) {
    this.metamaskWallet$ = this.metamaskWalletService.metamaskWallet;
  }


}
