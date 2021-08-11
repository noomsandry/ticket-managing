import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as _ from "lodash";
import { TicketState, selectAll } from "../reducers/ticket.reducer";

export const getRouteState = createFeatureSelector<TicketState>("ticket");

export const selectTickets = createSelector(getRouteState, selectAll);
export const selectCompletedTickets = createSelector(selectTickets, (tickets) =>
  tickets.filter((ticket) => ticket.completed)
);
export const selectUnCompletedTickets = createSelector(
  selectTickets,
  (tickets) => tickets.filter((ticket) => !ticket.completed)
);

export const selectById = (id: number) =>
  createSelector(selectTickets, (tickets) =>
    tickets.find((ticket) => ticket.id === id)
  );
