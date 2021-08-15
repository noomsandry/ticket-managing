import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";

import { TicketToolbarComponent } from "./ticket-toolbar.component";

describe("TicketToolbarComponent", () => {
  let component: TicketToolbarComponent;
  let fixture: ComponentFixture<TicketToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketToolbarComponent],
      imports: [StoreModule.forRoot([]), RouterModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
