import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { delay, tap, map } from "rxjs/operators";
import { Ticket } from "../shared/interfaces/ticket.interface";
import { User } from "../shared/interfaces/user.interface";

/**
 * This service acts as a mock back-end.
 * It has some intentional errors that you might have to fix.
 */

function randomDelay() {
  return Math.random() * 4000;
}

@Injectable({
  providedIn:"root"
})
export class BackendService {
  public storedTickets: Ticket[] = [
    {
      id: 1,
      completed: false,
      assigneeId: 111,
      description: "Install a monitor arm",
      order: 0,
    },
    {
      id: 2,
      completed: true,
      assigneeId: 111,
      description: "Move the desk to the new location",
      order: 0,
    },
  ];

  public storedUsers: User[] = [
    { id: 111, name: "Victor" },
    { id: 112, name: "Marc" },
    { id: 113, name: "Laurent" },
  ];

  private lastId: number = 2;

  private findUserById = (id) =>
    this.storedUsers.find((user: User) => user.id === +id);
  private findTicketById = (id) =>
    this.storedTickets.find((ticket: Ticket) => ticket.id === +id);

  public tickets(): Observable<Ticket[]> {
    return of(this.storedTickets).pipe(delay(randomDelay()));
  }

  public ticket(id: number): Observable<Ticket> {
    return of(this.findTicketById(id)).pipe(delay(randomDelay()));
  }

  public users(): Observable<User[]> {
    return of(this.storedUsers).pipe(delay(randomDelay()));
  }

  public user(id: number): Observable<User> {
    return of(this.findUserById(id)).pipe(delay(randomDelay()));
  }

  public newTicket(payload: {
    description: string;
    assigneeId: number;
  }): Observable<Ticket> {
    const newTicket: Ticket = {
      id: ++this.lastId,
      completed: false,
      assigneeId: payload.assigneeId,
      description: payload.description,
      order: this.lastId,
    };

    return of(newTicket).pipe(
      delay(randomDelay()),
      tap((ticket: Ticket) => {
        const t = [...this.storedTickets];
        t.push(ticket);
        this.storedTickets = t;
      })
    );
  }

  public delete(ticketId: number): Observable<Ticket> {
    const foundTicket = this.findTicketById(+ticketId);
    if (foundTicket) {
      return of(foundTicket).pipe(
        delay(randomDelay()),
        tap(({ id }) => {
          this.storedTickets = this.storedTickets.filter(
            (ticket) => ticket.id !== id
          );
        })
      );
    }
    return throwError(new Error("ticket not found"));
  }

  public update(editTicket: Ticket): Observable<Ticket> {
    const foundTicket = this.findTicketById(+editTicket.id);
    if (foundTicket) {
      return of(editTicket).pipe(
        delay(randomDelay()),
        tap(({ id }) => {
          this.storedTickets = this.storedTickets.map((ticket) => {
            if (ticket.id === editTicket.id) return editTicket;
            return ticket;
          });
          return editTicket;
        })
      );
    }
    return throwError(new Error("ticket not found"));
  }

  public assign(ticketId: number, userId: number): Observable<Ticket> {
    const user = this.findUserById(+userId);
    const foundTicket = this.findTicketById(+ticketId);

    if (foundTicket && user) {
      return of(foundTicket).pipe(
        delay(randomDelay()),
        tap((ticket: Ticket) => {
          ticket.assigneeId = +userId;
        })
      );
    }

    return throwError(new Error("ticket or user not found"));
  }

  public complete(
    ticketId: number,
    completed: boolean,
    order: number
  ): Observable<Ticket> {
    const foundTicket = this.findTicketById(+ticketId);
    if (foundTicket) {
      return of(foundTicket).pipe(
        delay(randomDelay()),
        map((ticket: Ticket) => {
          return {
            ...ticket,
            order,
            completed,
          };
        })
      );
    }
    return throwError(new Error("ticket not found"));
  }
}
