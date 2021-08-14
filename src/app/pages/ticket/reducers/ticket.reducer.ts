import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { Ticket } from "@shared/interfaces/ticket.interface";
import { TicketActions } from "@pages/ticket/actions";

export const adapter: EntityAdapter<Ticket> = createEntityAdapter<Ticket>({
  selectId: (entry) => entry.id,
});

export interface TicketState extends EntityState<Ticket> {
  filter: any;
}

export function reducer(state: TicketState | undefined, action: Action) {
  return ticketReducer(state, action);
}

export const initialTicketState: TicketState = adapter.getInitialState({
  filter: null,
});

export const ticketReducer = createReducer(
  initialTicketState,
  on(TicketActions.ticketsLoaded, (state, { tickets }) =>
    adapter.setAll(tickets, { ...state })
  ),
  on(TicketActions.ticketCreated, (state, { ticket }) =>
    adapter.addOne(ticket, { ...state })
  ),
  on(TicketActions.ticketComplated, (state, { ticket }) =>
    adapter.updateOne(
      {
        id: ticket.id,
        changes: {
          completed: ticket.completed,
        },
      },
      { ...state }
    )
  ),
  on(TicketActions.ticketDeleted, (state, { id }) =>
    adapter.removeOne(id, { ...state })
  ),
  on(TicketActions.ticketUpdated, (state, { ticket }) =>
    adapter.updateOne(
      {
        id: ticket.id,
        changes: ticket,
      },
      {
        ...state,
      }
    )
  ),
  on(TicketActions.setTicketFilter, (state, { filter }) => ({
    ...state,
    filter,
  }))
);

export const { selectAll, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors();
