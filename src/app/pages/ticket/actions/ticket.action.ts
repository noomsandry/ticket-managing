import { createAction, props } from "@ngrx/store";
import { Ticket } from "@shared/interfaces/ticket.interface";

const source = "[Ticket Page]";

export const loadTickets = createAction(`[${source}] Load`);

export const ticketsLoaded = createAction(
  `[${source}] Loaded`,
  props<{ tickets: Ticket[] }>()
);

export const createTicket = createAction(
  `[${source}] Create`,
  props<{ ticket: Ticket }>()
);

export const ticketCreated = createAction(
  `[${source}] Create`,
  props<{ ticket: Ticket }>()
);

export const completeTicket = createAction(
  `[${source}] Complet`,
  props<{ ticketId: number; completed: boolean }>()
);

export const ticketComplated = createAction(
  `[${source}] Completed`,
  props<{ ticket: Ticket }>()
);

export const deleteTicket = createAction(
  `[${source}] Delete`,
  props<{ id: number }>()
);

export const ticketDeleted = createAction(
  `[${source}] Deleted`,
  props<{ id: number }>()
);
