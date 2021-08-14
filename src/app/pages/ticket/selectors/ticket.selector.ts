import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as _ from "lodash";
import { selectUsers } from "@app/pages/user/selectors/user.selector";
import { Ticket } from "@app/shared/interfaces/ticket.interface";
import { TicketState, selectAll } from "../reducers/ticket.reducer";

export const getRouteState = createFeatureSelector<TicketState>("ticket");

export const selectTickets = createSelector(getRouteState, selectAll);

export const selectTicketFilter = createSelector(
  getRouteState,
  (state) => state.filter
);
export const selectTicketEntries = createSelector(
  selectTickets,
  selectUsers,
  selectTicketFilter,
  (tickets, users, filter) => {
    const userById = _.groupBy(users, "id");
    const ticketEntries = _.map(tickets, (ticket: Ticket) => {
      const _ticket = { ...ticket };
      _ticket.assigneed = _.get(userById, [ticket.assigneeId, 0]);
      return _ticket;
    });
    return _.filter(ticketEntries, filter);
  }
);
export const selectCompletedTickets = createSelector(
  selectTicketEntries,
  (tickets) =>
    _.orderBy(
      tickets.filter((ticket) => ticket.completed),
      "order"
    )
);
export const selectUnCompletedTickets = createSelector(
  selectTicketEntries,
  (tickets) =>
    _.orderBy(
      tickets.filter((ticket) => !ticket.completed),
      "order"
    )
);

export const selectById = (id: number) =>
  createSelector(selectTicketEntries, (tickets) =>
    tickets.find((ticket) => ticket.id === id)
  );
