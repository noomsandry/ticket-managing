import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Ticket } from './shared/interfaces/ticket.interface';
import { User } from './shared/interfaces/user.interface';
import { BackendService } from './shared/services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public readonly users$: Observable<User[]> = this.backendService.users();
  public readonly tickets$: Observable<Ticket[]> = this.backendService.tickets();

  constructor(private readonly backendService: BackendService) {}
}
