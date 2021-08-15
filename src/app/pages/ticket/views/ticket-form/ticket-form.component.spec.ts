import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Ticket } from "@app/shared/interfaces/ticket.interface";
import { StoreModule } from "@ngrx/store";

import { TicketFormComponent } from "./ticket-form.component";

describe("TicketFormComponent", () => {
  let component: TicketFormComponent;
  let fixture: ComponentFixture<TicketFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketFormComponent],
      imports: [
        StoreModule.forRoot([]),
        RouterModule.forRoot([]),
        ReactiveFormsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("form invalid when empty", () => {
    expect(component.form.valid).toBeFalsy();
  });

  it("completed field validity", () => {
    let errors = {};
    let completed = component.form.controls["completed"];
    completed.setValue(undefined);
    errors = completed.errors || {};
    expect(errors["required"]).toBeTruthy();
  });

  it("description field validity", () => {
    let errors = {};
    let description = component.form.controls["description"];
    description.setValue(undefined);
    errors = description.errors || {};
    expect(errors["required"]).toBeTruthy();
  });

  it("submitting a form emits a ticket", () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls["assigneeId"].setValue(111);
    component.form.controls["description"].setValue("My Ticket");

    expect(component.form.valid).toBeTruthy();

    let ticket: Ticket;
    component.onSubmit.subscribe((value) => (ticket = value));

    // Trigger the login function
    component.submit();

    // Now we can check to make sure the emitted value is correct
    expect(ticket.assigneeId).toBe(111);
    expect(ticket.description).toBe("My Ticket");
  });
});
