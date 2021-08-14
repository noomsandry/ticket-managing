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
  props<{ description: string; assigneeId: number }>()
);

export const ticketCreated = createAction(
  `[${source}] Created`,
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

export const updateTicket = createAction(
  `[${source}] Update`,
  props<{ ticket: Ticket }>()
);

export const ticketUpdated = createAction(
  `[${source}] Updated`,
  props<{ ticket: Ticket }>()
);

export const setTicketFilter = createAction(
  `[${source}] set ticket filter`,
  props<{ filter: any }>()
);
