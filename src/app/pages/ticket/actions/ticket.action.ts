import { createAction, props } from "@ngrx/store";
import { Ticket } from "@shared/interfaces/ticket.interface";

const source = "[Ticket Page]";

export const loadTasks = createAction(`[${source}] Load`);

export const tasksLoaded = createAction(
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

export const updateTicket = createAction(
  `[${source}] Update`,
  props<{ ticket: Ticket }>()
);

export const ticketUpdated = createAction(
  `[${source}] Updated`,
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
