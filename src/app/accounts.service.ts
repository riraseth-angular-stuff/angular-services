import {EventEmitter, Injectable} from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private  loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({name, status});
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
